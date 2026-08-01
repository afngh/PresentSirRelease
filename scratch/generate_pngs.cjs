const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table & function
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crcVal = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(crcVal, 8 + len);
  return buf;
}

function generatePNG(width, height, drawPixel) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // Raw image scanlines
  const rawLines = [];
  for (let y = 0; y < height; y++) {
    const line = Buffer.alloc(1 + width * 4);
    line[0] = 0; // filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const rgba = drawPixel(x, y, width, height);
      const offset = 1 + x * 4;
      line[offset] = rgba[0];     // R
      line[offset + 1] = rgba[1]; // G
      line[offset + 2] = rgba[2]; // B
      line[offset + 3] = rgba[3]; // A
    }
    rawLines.push(line);
  }

  const rawData = Buffer.concat(rawLines);
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// 1. Student Screen
const studentPNG = generatePNG(360, 640, (x, y, w, h) => {
  // Top Header (0-60)
  if (y < 60) {
    if (x >= 20 && x <= 48 && y >= 16 && y <= 44) return [0, 86, 179, 255]; // Blue Icon
    return [255, 255, 255, 255]; // Header bg
  }
  // Nav Tab (60-95)
  if (y >= 60 && y < 95) {
    if (x < 180) return [0, 86, 179, 255]; // Home tab (Blue)
    return [226, 232, 240, 255]; // History tab
  }
  // Card 1: My Details (110-210)
  if (x >= 20 && x <= 340 && y >= 110 && y <= 210) {
    if (x === 20 || x === 340 || y === 110 || y === 210) return [226, 232, 240, 255];
    if (y > 140 && y < 142) return [241, 245, 249, 255]; // line
    return [255, 255, 255, 255];
  }
  // Card 2: Mark Attendance (230-380)
  if (x >= 20 && x <= 340 && y >= 230 && y <= 380) {
    if (x === 20 || x === 340 || y === 230 || y === 380) return [226, 232, 240, 255];
    // Input box (280-320)
    if (x >= 35 && x <= 325 && y >= 280 && y <= 320) return [237, 242, 252, 255];
    // Submit button (335-365, width 35-120)
    if (x >= 35 && x <= 120 && y >= 335 && y <= 365) return [0, 86, 179, 255];
    return [255, 255, 255, 255];
  }
  // Cards 3: Present / Absent (400-470)
  if (x >= 20 && x <= 170 && y >= 400 && y <= 470) {
    if (x === 20 || x === 170 || y === 400 || y === 470) return [226, 232, 240, 255];
    if (x >= 70 && x <= 120 && y >= 420 && y <= 445) return [25, 135, 84, 255]; // Green stat
    return [255, 255, 255, 255];
  }
  if (x >= 190 && x <= 340 && y >= 400 && y <= 470) {
    if (x === 190 || x === 340 || y === 400 || y === 470) return [226, 232, 240, 255];
    if (x >= 240 && x <= 290 && y >= 420 && y <= 445) return [220, 53, 69, 255]; // Red stat
    return [255, 255, 255, 255];
  }
  return [248, 250, 252, 255];
});

// 2. Faculty Screen
const facultyPNG = generatePNG(360, 640, (x, y, w, h) => {
  if (y < 60) return [255, 255, 255, 255];
  if (y >= 60 && y < 95) {
    if (x < 120) return [0, 86, 179, 255]; // Home
    if (x < 240) return [226, 232, 240, 255]; // History
    return [226, 232, 240, 255]; // Logout
  }
  if (x >= 20 && x <= 340 && y >= 110 && y <= 330) {
    if (x === 20 || x === 340 || y === 110 || y === 330) return [226, 232, 240, 255];
    if (x >= 35 && x <= 325 && y >= 160 && y <= 200) return [237, 242, 252, 255];
    if (y >= 225 && y <= 228 && x >= 40 && x <= 320) return [0, 86, 179, 255];
    if (x >= 35 && x <= 325 && y >= 275 && y <= 315) return [0, 86, 179, 255];
    return [255, 255, 255, 255];
  }
  if (x >= 20 && x <= 340 && y >= 350 && y <= 480) {
    if (x === 20 || x === 340 || y === 350 || y === 480) return [226, 232, 240, 255];
    if (x >= 35 && x <= 325 && y >= 395 && y <= 435) return [237, 242, 252, 255];
    return [255, 255, 255, 255];
  }
  return [248, 250, 252, 255];
});

// 3. Login Screen
const loginPNG = generatePNG(360, 640, (x, y, w, h) => {
  if (y < 60) return [255, 255, 255, 255];
  if (x >= 24 && x <= 336 && y >= 140 && y <= 380) {
    if (x === 24 || x === 336 || y === 140 || y === 380) return [226, 232, 240, 255];
    if (x >= 44 && x <= 316 && y >= 200 && y <= 240) return [237, 242, 252, 255];
    if (x >= 44 && x <= 316 && y >= 255 && y <= 295) return [237, 242, 252, 255];
    if (x >= 44 && x <= 316 && y >= 315 && y <= 355) return [25, 135, 84, 255];
    return [255, 255, 255, 255];
  }
  return [248, 250, 252, 255];
});

const outDir = path.join(__dirname, '..', 'public', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, '1.png'), studentPNG);
fs.writeFileSync(path.join(outDir, '2.png'), facultyPNG);
fs.writeFileSync(path.join(outDir, '3.png'), loginPNG);

console.log('Successfully generated valid PNG screenshot files: 1.png, 2.png, 3.png!');

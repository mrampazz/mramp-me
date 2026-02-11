const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../public/valentine-ph");
const outputDir = path.join(__dirname, "../public/valentine-webp");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Converting ${files.length} images to WebP...`);

let completed = 0;

files.forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
  );

  try {
    await sharp(inputPath)
      .webp({ quality: 85 }) // 85 quality is great balance
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    completed++;
    console.log(
      `[${completed}/${files.length}] ${file} -> ${path.basename(outputPath)} (${savings}% smaller)`,
    );
  } catch (error) {
    console.error(`Error converting ${file}:`, error.message);
  }
});

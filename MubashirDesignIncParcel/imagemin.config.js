module.exports = {
    "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 10 },
    "mozjpeg": { "progressive": true, "quality": 3 },
    "pngquant": { "quality": 3 },
    "svgo": {
      "plugins": [
        { "removeViewBox": false },
        { "cleanupIDs": true },
      ]
    },
    "webp": { "quality": 3 }
  }
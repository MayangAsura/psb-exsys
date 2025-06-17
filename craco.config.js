// craco.config.js
// const tailwindcss = require("tailwindcss");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        // tailwindcss('./tailwind.config.js'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      "presets": [
        [
          "next/babel",
          {
            "preset-react": { "throwIfNamespace": false },
          }
        ]
      ]
    },
  },
  eslint: false
}

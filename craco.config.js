// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
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
}

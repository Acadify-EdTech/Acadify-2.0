module.exports = {
    purge: {
      content: ['./index.html', './src/**/*.{jsx,js,ts}'], 
    },
    plugins: [],
    prefix: "tw-",
    theme:{
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
        cr: ['Croissant One', 'cursive'],
      },
    }
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    colors: {
      'skin': '#ef8a86', 
      'yellowish': '#fdf2df',
      'Darkskin': '#BE6361',
      
    },

    backgroundImage: {
      'running': "url('/img/running.png')",
      'logo': "url('img/LOGO.png')",

    },

    width: {
      'half': '50vw',
      'max': '100%',
  
    },

    height: {
      'half': '50vh',
      
    },

    fontFamily: {
      
      'alfa': ['Alfa Slab One', 'serif'],
    }

  
  

    
  },
  plugins: [


    
  ],

  
}




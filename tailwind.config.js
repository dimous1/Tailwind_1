/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    colors: {
      'skin': '#ef8a86', 
      'yellowish': '#fdf2df',
      'white': '#ffffff',
      'Darkskin': '#BE6361',
      
    },

    backgroundImage: {
      'running': "url('/img/running.png')",
      'logo': "url('img/LOGO.png')",

    },

    width: {
      'half': '50vw',
      'max': '100%',
      '517': '517px',
      

    },

    height: {
      'half': '50vh',
      '448': "448px"
      
    },

    fontFamily: {
      
      'alfa': ['Alfa Slab One', 'serif'],
    }

  
  

    
  },
  plugins: [


    
  ],

  
}




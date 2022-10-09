import { Static } from "nuxt/dist/app/compat/capi";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  app:{
    head: {
      meta:[
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        {
          name: 'description',
          content: 'Best karate class in Ahmedabad',
        },
        {
          name: 'author',
          content:'Niraj Parmar'
        },
      ],
    },
  },


  // link:[
  //   {href:"assets/css/main.css", rel: "stylesheet"},
  // ],

  
  css:[
    'bootstrap/dist/css/bootstrap.min.css',
    '@/static/css/main.css',
    // 'fortawesome/fontawesome-svg-core/styles.css'
  ],

  
  // script:{
  //   src: "assets/js/main.js",
  //   type: "text/javascript"
  // },
  // // plugins:[
  //   "~/plugins/fontawesome.js"
  // ],

  vite:{define:{'process.env.DEBUG': false}},

})

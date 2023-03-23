// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['assets/styles/global.scss','assets/styles/fonts.scss'],
  
  // build: {transpile:['vuetify']},
  // vite: { ssr: { noExternal: ['vuetify']}},
  modules: [
    
    // '@pinia/nuxt',
    // '@nuxtjs/google-fonts',
    // async (options, nuxt) => {
    //   nuxt.hooks.hook('vite:extendConfig', (config:any) => config.plugins.push(vuetify()))
    // }
  ],
  
  // // typescript: {shim:false},
  // build: {transpile:['vuetify']},
  // vite: { ssr: { noExternal: ['vuetify']}}
})

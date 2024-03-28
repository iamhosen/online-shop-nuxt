// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],

	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL,
		},
	},

	tailwindcss: {
        cssPath: '~/assets/scss/app.scss',
        configPath: 'tailwind.config',
        viewer: true
    },
})

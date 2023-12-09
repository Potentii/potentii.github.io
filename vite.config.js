import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Potentii',
				short_name: 'Potentii',
				description: '',
				theme_color: '#101010',
				display: "standalone",
				orientation: "portrait",
				icons: [
					{
						src: 'icon512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
			strategies: 'generateSW',
			workbox: {
				globPatterns: ['**/*.{html,js,css,jpg,jpeg,md,json,png,gif,svg,eot,ttf,woff,woff2,vue}'],
				maximumFileSizeToCacheInBytes: 15_000_000,
			},
			devOptions: {
				enabled: true,
				navigateFallback: 'index.html'
			}
		})
	],
	define: {
		process: {
			env: import.meta.env,
			argv: [],
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})

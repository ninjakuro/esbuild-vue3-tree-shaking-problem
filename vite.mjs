import { build } from 'vite'
import pluginVue from 'unplugin-vue';

await build({
	build: {
		rollupOptions: {
			input: './src/main.ts',
			output: {
				entryFileNames: 'vite.js',
			},
		},
		minify: false,
	},
	plugins: [pluginVue.vite()],
});

import { build } from 'esbuild';
import pluginVue from 'esbuild-plugin-vue-next';

build({
	entryPoints: ['src/main.ts'], // your entry file
	bundle: true,
	outfile: 'dist/bundle.js',
	plugins: [pluginVue()]
})

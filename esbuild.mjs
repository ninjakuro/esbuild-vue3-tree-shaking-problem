import { build } from 'esbuild';
import pluginVue from 'unplugin-vue';

build({
	entryPoints: ['./src/main.ts'], // your entry file
	bundle: true,
	outfile: './dist/esbuild.js',
	plugins: [pluginVue.esbuild()]
})

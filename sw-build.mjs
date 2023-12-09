import workboxBuild from 'workbox-build';
import path from 'path';

const outputPath = process.argv[2];

if(!outputPath?.trim().length)
	throw new Error(`Invalid outputPath for sw-workbox script: "${outputPath}"`);

workboxBuild.injectManifest({
	globDirectory: path.join(outputPath),
	globPatterns: [
		`**/*.{html,js,css,jpg,png,gif,svg,eot,ttf,woff,woff2}`
	],
	swDest: path.join(outputPath, `/sw.js`),
	swSrc: './sw.js',
	maximumFileSizeToCacheInBytes: 10_000_000,
});
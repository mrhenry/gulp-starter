// Change if your build location is different
const buildPath = './{{PUBLIC_PATH}}/assets';

// Normally you don't have to edit below
const sourcePath = './gulp/assets';

module.exports = {
	publicAssets: buildPath,
	js: {
		src: `${sourcePath}/js/app.js`,
		dest: `${buildPath}/js`,
		watch: [
			`${sourcePath}/js/**/*.js`,
			`${sourcePath}/js/app.js`,
		],
		browsers: [
			'last 2 versions',
			'> 0.5% in BE',
		],
		bundleName: 'app.js',
	},
	css: {
		src: `${sourcePath}/css/*.css`,
		dest: `${buildPath}/css`,
		watch: [
			`${sourcePath}/css/**/*.css`,
			`${sourcePath}/css/*.css`,
		],
		browsers: [
			'last 2 versions',
			'> 0.5% in BE',
		],
	},
	icons: {
		src: `${sourcePath}/icons/*.svg`,
		dest: `${buildPath}/icons`,
		filename: 'icons.svg',
	},
	images: {
		src: `${sourcePath}/images/**`,
		dest: `${buildPath}/images`,
	},
	fonts: {
		src: `${sourcePath}/fonts/**`,
		dest: `${buildPath}/fonts`,
	},
	favicons: {
		src: {
			png: `${sourcePath}/favicons/favicon.png`,
			svg: `${sourcePath}/favicons/favicon.svg`,
		},
		dest: `${buildPath}/favicons`,
	},
};

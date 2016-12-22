//
// Editable configs
//
const clientName = 'pe-2017';
const buildPath  = './public/assets'; // Change if your build location is different

// -----------------------------------------------------------------------------
// Normally you don't have to edit below
// -----------------------------------------------------------------------------

const sourcePath   = './gulp/assets';

module.exports = {
	publicAssets: buildPath,
	js: {
		src: sourcePath + '/js/app.js',
		dest: buildPath + '/js',
		watch: [
			sourcePath + '/js/**/*.js',
			sourcePath + '/js/app.js'
		],
		bundleName: 'app.js'
	},
	css: {
		src: sourcePath + '/css/*.css',
		dest: buildPath + '/css',
		watch: [
			sourcePath + '/css/**/*.css',
			sourcePath + '/css/*.css'
		],
		browsers: [ 'last 2 versions', '> 0.5% in BE' ]
	},
	icons: {
		src: sourcePath + '/icons/*.svg',
		dest: buildPath + '/icons',
		filename: 'icons.svg'
	},
	images: {
		src: sourcePath + '/images/**',
		dest: buildPath + '/images'
	},
	fonts: {
		src: sourcePath + '/fonts/**',
		dest: buildPath + '/fonts'
	}
};

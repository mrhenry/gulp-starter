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
	js: {},
	css: {
		src: sourcePath + '/css/*.css',
		dest: buildPath + '/css',
		browsers: [ 'last 2 versions', '> 0.5% in BE' ]
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

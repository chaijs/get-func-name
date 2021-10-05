module.exports = function configureKarma(config) {
  config.set({
    basePath: '.',
    browsers: [ 'ChromeHeadless' ],
    frameworks: [ 'mocha' ],
    files: [
      { pattern: './index.js', type: 'module' },
      { pattern: './test/*.js', type: 'module' },
    ],
    reporters: [ 'progress' ],
    colors: true,
    autoWatch: false,
    singleRun: true,
  });
};

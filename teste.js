const uselessCssChecker = require('useless-css-checker');

const csscheck = () => {
  const content = [
    './public/index.html',
    './public/script.js',
  ];
  const css = [
    './public/styles.css',
  ];
  const options = {
    rejected: true,
    validationOutput: true, // gives output on rejections
    validationProcessExit: true, // determines if process.exit
    whitelist: ['*white-list-testing*'],
  };
  uselessCssChecker(content, css, options);
};


csscheck();

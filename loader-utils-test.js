const loaderUtils = require('loader-utils');

const randomString = 'example-string';
const interpolatedName = loaderUtils.interpolateName({}, randomString);

console.log(interpolatedName);
const { override } = require('customize-cra');

// No custom webpack plugins are required. CRA already handles copying
// assets from `public/` to `build/` during production builds.
module.exports = override();

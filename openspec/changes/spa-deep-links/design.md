# Design
`postbuild` npm script copies `build/index.html` to `build/404.html` with a Node one-liner (works on Windows and Linux CI). GitHub Pages returns it with HTTP 404 status; the browser still runs the app. No redirect script needed because asset URLs are absolute (`homepage`) and the router has a basename.

Overview:
Features:
- PNG/JPEG compression (%80 quality retained)
- HTML minification
- JS concatination/minification
- SASS/CSS concatination/minification
- CSS autoprefixer (last 10 versions)
- ES6 to ES5 Transpiler for browser support

Prerequisites:
- Have nodeJS alongside npm installed on your machine
- A command line or bash, I use git bash on windows, https://git-scm.com/downloads


Clone the repository

```
git clone https://github.com/mubashirdesign/Mubashirs-Barebone-Webpack-Setup.git
```

Commands:

Install all the modules
```
npm install
```

Run the web server and work in real-time
```
npm start
```

Bundle all the files into a production ready state (will be outputted to the /dist folder)
```
npm run build
```

To expose your localhost to be accessible via internet. Download ngrok globally.
```
npm install ngrok -g
```

If your on git bash, run 
```
ngrok.cmd http 8080 -host-header="localhost:8080"
```
else 
```
ngrok http 8080 -host-header="localhost:8080"
```

Now go to localhost:4040 which will be the ngrok interface where you can get the URLs that will allow anyone to access your project.



To make this into a react app, add these:

Package.json
DevDependancies
```
"@babel/preset-react": "^7.0.0",
"@babel/plugin-proposal-class-properties": "^7.3.0",
```
Dependancies
```
"react": "^16.8.1",
"react-dom": "^16.8.1"
```


.babelrc
```
"plugins": ["@babel/plugin-proposal-class-properties"],

    "presets": [

        ["@babel/preset-env", {

            "targets": {

                "browsers": [

                "last 1 versions"
                // "ie >= 8"

                ]

            }

        }],
        "@babel/preset-react"
```
index.js
```
import React from "react";
import ReactDOM from "react-dom";
```


Future Plans:
- Add chunks for vendors and components

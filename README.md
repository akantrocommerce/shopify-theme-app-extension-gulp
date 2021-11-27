# theme-app-extension-gulp

**Dependancies**
1) ```node```, ```npm```, and ```npx```
2) If Gulp is not already installed follow the quick start instructions at https://gulpjs.com/docs/en/getting-started/quick-start to install Gulp in your project.
3) Install ```gulp-run``` by running command ```npm i gulp-run``` (https://www.npmjs.com/package/gulp-run) 

**Install**
1) Add ```gulpfile.js``` to root of your project.
2) Add ```"push:extension": "gulp"``` command to ```package.json``` file.
3) Update your files pathes in the ```watcher();``` function. By default, we watch for ```theme-app-extension/assets/*```, ```theme-app-extension/blocks/*'``` and ```theme-app-extension/snippets/*```.

**Usage**
1) Open a new terminal in your project root and run ```npm run push:extension``` _(Note: You stay in the main app project root, you do not need to ```cd``` into ```theme-app-extension```)_
2) Upon save the script will now push theme extension updates to Shopify accordingly. 

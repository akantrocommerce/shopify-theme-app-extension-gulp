// Imports
const { series, watch } = require('gulp');
const run = require('gulp-run');

const watcher = async (cb) => {
  watch('theme-app-extension/assets/*', push);
  watch('theme-app-extension/blocks/*', push);
  watch('theme-app-extension/snippets/*', push);
  cb();
}

const push = async () => {
  const pushExtension = new run.Command('npm run push:extension');
  pushExtension.exec();
}

// Exports
exports.default = series(watcher);

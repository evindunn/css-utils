const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

function tapFunc(compilation, done) {
    const removePromises = [];
    compilation.getAssets().forEach((asset) => {
        const fileName = asset.name;
        if (fileName.endsWith('.js')) {
            const fullPath = path.join(compilation.outputOptions.path, fileName);
            removePromises.push(fsPromises.unlink(fullPath));
        }
    });
    Promise.all(removePromises).then(() => done());
}

class RemoveCssJsonPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tapAsync(RemoveCssJsonPlugin.name, tapFunc);
    }
}

module.exports = RemoveCssJsonPlugin;

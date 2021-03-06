const fs = require('fs');

// writes the HTML markup to ./dest/index.HTML
const writeMarkup = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copies the css file from ./src to ./dest
const copyCSS = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject({
          ok: false,
          message: 'Something went wrong!',
          err
        });
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = { writeMarkup, copyCSS };

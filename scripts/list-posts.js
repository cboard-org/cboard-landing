const postsFolder = './../public/locales/en/posts/';
const fs = require('fs');

var posts = {
    postsFiles: []
}

console.log('Writing a JSON file with all blog posts...');
fs.readdirSync(postsFolder).forEach(file => {
    posts.postsFiles.push({ name: file });
    console.log(file);
});
var json = JSON.stringify(posts);
fs.writeFile(postsFolder + 'postsFileNames.json', json, 'utf8', (err) => {
    if (err)
        console.log('Error writing file names. ' + err);
    else {
        console.log("File names written successfully\n");
    }
});
console.log('Done!');

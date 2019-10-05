const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));


/*var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
 
INPUT_path_to_your_images = './public/src/img/gudavalli_branch.jpg';
OUTPUT_path = './public/img/';

compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                            {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
            console.log('-------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('-------------');                                   
});*/


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'public/templates/index.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!\n /`));



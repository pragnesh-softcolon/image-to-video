const videoShow = require('videoshow');
const images = [
    {
        path: './images/anime.jpeg',
    },
    {
        path: './images/gojo.jpeg',
    },
    {
        path: './images/goku.jpeg',
    },
    {
        path: './images/inozuke.jpeg',
    },
    {
        path: './images/luffy.jpeg',
    },
    {
        path: './images/naruto.jpeg',
    },
    {
        path: './images/nezuko.jpeg',
    },
    {
        path: './images/rengoku.jpeg',
    },
    {
        path: './images/zenitsu.jpeg',
    },
    {
        path: './images/zoro.jpeg',
    },
];

const videoOptions = {
    fps: 60,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
};
videoShow(images, videoOptions)
    .audio('./audio/audio.m4a')

    .save('video.mp4')
    .on('start', function (command) {
        console.log('ffmpeg process started:', command)
    })
    .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output) {
        console.error('Video created in:', output)
    })

// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); 

// Fullscreen
const fullscreen = player.querySelector('.fullscreen')

// Functions

function togglePlay() {
    // Play/Pause Video
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }


}

function updateButton() {
    // Updating play/pause button
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}


function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // Update either volume or playBackRate
    video[this.name] = this.value;
}

function handleProgress() {
    // Get the current time as a percent (as the value will be passed into flexBasis)
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // Work out were the progress bar was clicked and / by length of area
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Full Screen
function toggleFullscreen() {
    console.log('fullscreen btn pressed')

    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElemen) {
        console.log('exit full screen');
    
        document.exitFullscreen();

    } else {
        player.requestFullscreen();
    }

}

// Event listners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


progress.addEventListener('click', scrub);

let mousedown = false;
// Only calls scrub if mousedown = true
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


// Full Screen
fullscreen.addEventListener('click', toggleFullscreen)
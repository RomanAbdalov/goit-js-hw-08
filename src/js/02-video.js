import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Player(iframe)


const onPlay = function(data) {
    localStorage.setItem("videoplayer-curent-time", data.seconds);
    };
    

    player.on('timeupdate', throttle(onPlay, 1000));
    player.setCurrentTime(localStorage.getItem("videoplayer-curent-time"));
    
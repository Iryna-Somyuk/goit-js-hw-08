import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//console.log(Player);

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(PlayOnPlayer, 1000));

function PlayOnPlayer(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

export const playBtn = (url) => {
  return `<button id="play-audio-btn"
    class="btn btn--play"
    ><span class="sr-only">Play Phonetic</span>
    <audio id="phonetic-audio" crossorigin="anonymous" src="${url}"></audio>
    </button>`;
};

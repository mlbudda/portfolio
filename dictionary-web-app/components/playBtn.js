export const playBtn = (url) => {
  return `<button id="play-audio-btn"
    class="btn btn--play"
    aria-labelledby="Play Phonetic"
    >
    <audio id="phonetic-audio" crossorigin="anonymous" src="${url}"></audio>
    </button>`;
};

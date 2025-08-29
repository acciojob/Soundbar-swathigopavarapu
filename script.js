// List of sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

// Create buttons dynamically
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);

  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  buttons.appendChild(audio);
});

// Add stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSounds);
buttons.appendChild(stopBtn);

// Function to stop sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

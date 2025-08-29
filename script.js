//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3", "sound4"];

const buttonsContainer = document.getElementById("buttons");

// Generate buttons dynamically
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsContainer.appendChild(btn);

  // Create hidden audio elements
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  buttonsContainer.appendChild(audio);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";
stopBtn.addEventListener("click", stopSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

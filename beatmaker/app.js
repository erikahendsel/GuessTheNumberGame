class DrumKit {
  constructor() {
    //   this = {}
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat-acoustic01.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8; // % - remaining of 8
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      //Check if pads are active
      if (bar.classList.contains("active")) {
        //Check each sounds
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0; //The currentTime property sets or returns the current position (in seconds) of the audio/video playback. When setting this property, the playback will jump to the specified position. Souce: https://www.w3schools.com/tags/av_prop_currenttime.asp
          this.kickAudio.play(); //The HTMLMediaElement play() method attempts to begin playback of the media. Source:https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    //Check if it's playing
    if (this.isPlaying) {
      //if isPlaying has a value(is true, truthy), clear the Interval and set isPlaying back to null
      //Clear the interval
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    } else {
      //else (if isPlaying value is null) set a interval(meaning start this function) and run repeat()
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval); //time of how fast this function repeats
    }
  }
  updateBtn() {
    if (this.isPlaying) {
      //We could do the opposite and do !this.isPlaying - !this.isPlaying would mean it has a value
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    } else {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    }
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    console.log(selectionName, selectionValue, this.kickAudio);
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track"); //The getAttribute() method returns the value of the attribute with the specified name, of an element.Source: https://www.w3schools.com/jsref/met_element_getattribute.asp
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }
  changeTempo(e) {
    const tempoText = document.querySelector(".tempo-nr");
    tempoText.innerText = e.target.value;
  }
  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector(".play");
    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }
}

const drumKit = new DrumKit();

//Event Listeners

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.updateBtn();
  drumKit.start();
});
console.log(drumKit);

drumKit.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drumKit.changeSound(e);
  });
});
drumKit.muteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
});
drumKit.tempoSlider.addEventListener("input", function (e) {
  drumKit.changeTempo(e);
});
drumKit.tempoSlider.addEventListener("change", function (e) {
  drumKit.updateTempo(e);
});

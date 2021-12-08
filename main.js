$( document ).ready(function() {



const musicContainer = document.getElementById('media-btn');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
let playImg = document.getElementById("play-img");
let volume = document.querySelector("#volume-control"); 
let isPlaying = false
const songs = ['Rise', 'Hip-Hop', 'Chillpop'];
let songIndex = 2;
loadSong(songs[songIndex]);



function loadSong(song) {
    title.innerText = song;
    audio.src = `audios/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
  }


function playSong () {
    isPlaying = true;
      $("#play-img").attr("src", "img/pause-thin.svg");
      audio.play();
      audio.loop= true;
      
        
}


function pauseSong () {
    isPlaying = false;
  $("#play-img").attr("src", "img/play-thin.svg");
  
  audio.pause();
}

function playOrPause (){

  if (isPlaying == false) {
    return playSong();
 }

 else {
     return pauseSong();
 }


}

function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  

  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }

$("#play").on("click", playOrPause);
$("#prev").on("click", prevSong);
$("#next").on("click", nextSong);


volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})

});
console.log("Welcome to JS");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Gulabi Aankhen", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tum Hi Ho", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Tera Ban Jaunga", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Bekhayali", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Shayad", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Khairiyat", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pal", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" }
];

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
});

// Listen to audio events to update the progress bar
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Handle seekbar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from (document.getElementsByClassName("songItemplay")).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    // console.log(e.target);
    makeAllPlay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;  
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>7){
        songIndex + 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;  
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<0){
        songIndex + 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;  
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
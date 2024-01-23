const video = document.getElementById('video-bg')
const play = document.getElementById('play')
const mutev = document.getElementById('mutev')
const list = ['Tom Clancy’s Rainbow Six Siege - The Playbook (720p)', 'Tom Clancy’s Rainbow Six Siege_ Year 8 Cinematic Trailer']
console.log(list[1])
let video_num = 0

function next(){
    if (video_num < list.length-1){
        video_num = video_num + 1
    
    }
    else{
        video_num = 0
    }
   
    console.log(video_num)
    video.src = `video/${list[video_num]}.mp4`
}
function prev(){
    if (video_num != 0){
        video_num = video_num - 1
    
    }
    else{
        video_num = list.length-1
        
    }
   
    console.log(video_num)
    video.src = `video/${list[video_num]}.mp4`
    
}

function play_v(){
    if (video.paused){
        video.play()
        play.src = 'img/icons8-pause-50.png'
    }
    else {
        video.pause()
        play.src = 'img/icons8-play-50.png'
    }
}

function mute_v(){
    if (video.muted){
        video.muted = false
        mutev.src = 'img/icons8-sound-50.png'
    }
    else {
        video.muted = true
        mutev.src = 'img/icons8-mute-50.png'
    }
}
window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);

    if (!audio) return; //stop the funcyion from runing all together

    audio.currentTime = 0;//rewind to the start

    audio.play();

    box.classList.add("playing")

})

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing')
}

const boxs = document.querySelectorAll(".box");
boxs.forEach(box => box.addEventListener('transitionend',removeTransition))
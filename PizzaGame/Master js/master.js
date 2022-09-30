let _time = 44000
let _timer = 0 
let timercheck = true

for(i=0; i<79;i++){
    x= ((parseInt(Math.random()*30))+2)
    y= ((parseInt(Math.random()*100)))
    // console.log(document.querySelector(`.food:nth-of-type(${i+2})`))
    document.querySelector(`.food:nth-of-type(${i + 2})`).style.animationDuration=x+'s'
    document.querySelector(`.food:nth-of-type(${i + 2})`).style.left=y+'%'
    // console.log(document.querySelector(`.food:nth-of-type(${i + 2})`).style.left=y+'%')
}
function loseTime() {
    _timer = _timer + 1
    console.log(_timer)
    if(timercheck) {
        setTimeout(loseTime, 1000)
    }
    document.getElementById('time').innerHTML = _timer+ 's'
    document.querySelector('.timeup').innerHTML = 'Time Remaining : ' + _timer + 's' 
}
loseTime()


console.log(_timer)

let _div = document.querySelectorAll('.food')
_div.forEach(function(loss){
    loss.addEventListener('mouseenter', function(){
        let _popup = document.querySelector('.pop-lose')
        _popup.classList.add('active')
        document.getElementById('PizzaBox').removeAttribute('src')
        document.getElementById('PizzaBox').setAttribute('src', 'img/fat-man.png')
        document.querySelector('.pop-win').remove()
        timercheck = false
    })
})

function win() {
    document.querySelector('.pop-win').classList.add('active')
    timercheck = false
}

document.getElementsByTagName('main')[0].addEventListener('mousemove',(e)=>{
    x = e.clientX - 40
    y = e.clientY - 40
    document.getElementById('PizzaBox').style.top=y+'px'
    document.getElementById('PizzaBox').style.left=x+'px'

})
document.querySelectorAll('.refresh')[0].addEventListener('click', function() {
    location.reload()
})
document.querySelectorAll('.refresh')[1].addEventListener('click', function() {
    location.reload()
})

setTimeout(win, _time)
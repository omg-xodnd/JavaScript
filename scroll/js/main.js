import smoothScrollTo from './modules/scroll.js'

const box1 = document.getElementById('box-1')
const box2 = document.getElementById('box-2')
const box3 = document.getElementById('box-3')
const box4 = document.getElementById('box-4')

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btnTop = document.getElementById('btn-top')
const btnBottom = document.getElementById('btn-bottom')
const btnNext = document.getElementById('btn-next')

btn1.addEventListener('click', scrollToTarget.bind(null, box1))
btn2.addEventListener('click', scrollToTarget.bind(null, box2))
btn3.addEventListener('click', scrollToTarget.bind(null, box3))
btn4.addEventListener('click', scrollToTarget.bind(null, box4))
btnTop.addEventListener('click', smoothScrollTo.bind(null, 0))

btnBottom.addEventListener('click', smoothScrollTo.bind(
    null, document.body.scrollHeight
))
btnNext.addEventListener('click', scrollToNext)
/**
 * 
 * @param {Element} target - 이동하고자 하는 타겟 element
 */
function scrollToTarget(target) {
    smoothScrollTo(target.offsetTop)
}

function scrollToNext() {
    let h = window.innerHeight
    smoothScrollTo(h * ((Math.floor((window.scrollY+1)/h)) + 1))
}


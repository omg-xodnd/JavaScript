import { smoothScrollTo } from './modules/smoothScrollTo.js'
import { hasScrolledDown, isCheckingScroll } from './modules/hasScrolledDown.js'

const btnTop = document.getElementById('btn-top')
btnTop.addEventListener('click', smoothScrollTo.bind(null, 0))

const btnBottom = document.getElementById('btn-bottom')
btnBottom.addEventListener('click', smoothScrollTo.bind(
    null, document.body.scrollHeight
))

const btnNext = document.getElementById('btn-next')
btnNext.addEventListener('click', scrollToNext)

for (let i = 1 ; i < 5 ; i++) {
    let box = document.getElementById(`box-${i}`)
    let btn = document.getElementById(`btn-${i}`)
    btn.addEventListener('click', scrollToTarget.bind(null, box))
}

window.addEventListener('scroll', hideOnScroll)
const header = document.getElementById('header')

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

function hideOnScroll() {
    if (isCheckingScroll) { 
        return
    }
    hasScrolledDown().then(res => {
        if (res) {
            header.classList.add('hide')
        }else{
            header.classList.remove('hide')
        }
    })
}
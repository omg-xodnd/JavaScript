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
// btnTop.addEventListener('click', smoothScrollTo.bind(null, 0))
btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
})
btnBottom.addEventListener('click', smoothScrollTo.bind(
    null, document.body.scrollHeight
))
btnNext.addEventListener('click', scrollToNext)
/**
 * @param {Number} targetY - target scrollY position
 */
function smoothScrollTo(targetY) {
    let n = 1
    if (window.scrollY > targetY) {
        n = -1
    }
    let scrollInterval = setInterval(() => {
        window.scrollBy(0, n)
        console.log(`${window.scrollY} / ${targetY}`)
        if (Math.abs(n)<60) {n += 0.5 * n}

        /**
         * 1. 타겟이 출발 위치보다 상단 && 현재 위치가 타겟 위치와 같거나 상단
         * 2. 타겟이 출발 위치보다 하단 && 현재 위치가 타겟 위치와 같거나 하단
         * 3. 타겟이 출발 위치보다 하단 && 현재 위치가 마지막 
         */
        if ( (n < 0 && window.scrollY <= targetY) |
             (n > 0 && (
                window.scrollY >= targetY) | 
                window.scrollY >= document.body.scrollHeight-box1.offsetHeight-1) 
            ) {
            window.scrollTo(0, targetY)
            clearInterval(scrollInterval)
        }
    }, 20)
}

/**
 * 
 * @param {Element} target - target element you want to scroll to
 */
function scrollToTarget(target) {
    smoothScrollTo(target.offsetTop)
}

function scrollToNext() {
    let h = box1.offsetHeight
    smoothScrollTo(h * ((Math.floor((window.scrollY+1)/h)) + 1))
}


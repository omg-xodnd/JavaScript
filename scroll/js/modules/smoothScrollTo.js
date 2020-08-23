/**
* @param {Number} targetY - target scrollY position
*/
export default function (targetY) {
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
/**
 * 인자로 전달된 scrollY좌표로 최대 100px/16ms의 속도로 이동
 * @param {Number} targetY - 이동하고자 하는 scrollY값
 */
const smoothScrollTo =  function (targetY) {
  // 방향 판단 및 이동 픽셀값 초기화
  let n = 1
  if (window.scrollY > targetY) {n = -1}
  
  // 15ms마다 n만큼 이동시키는 setInterval 함수
  const scrollInterval = setInterval(() => {
      // n만큼 이동
      window.scrollBy(0, n)
      // 속도제한 100px/15ms        
      if (Math.abs(n)<100) {
          n += 0.5 * n
        }
        /**
         * 종료조건
         * 1. 타겟이 출발 위치보다 상단 && 현재 위치가 타겟 위치와 같거나 상단
         * 2. 타겟이 출발 위치보다 하단 && 현재 위치가 타겟 위치와 같거나 하단
         * 3. 타겟이 출발 위치보다 하단 && 현재 위치가 이동할 수 있는 최하단
         * 
         * 일 경우, 타겟 위치로 scrollTo 후 Interval 종료
         */
        if ((n < 0 && window.scrollY <= targetY) |
            (n > 0 && (
                window.scrollY >= targetY | 
                window.scrollY >= document.body.scrollHeight-window.innerHeight-1)) 
            ) {
                window.scrollTo(0, targetY)
                clearInterval(scrollInterval)
            }
    }, 15)
}

export { smoothScrollTo }
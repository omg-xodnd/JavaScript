let lastY = window.scrollY
let isCheckingScroll = false

const hasScrolledDown = function() {
    isCheckingScroll = true

    return new Promise((resolve) => {
        const scrollInterval = setInterval(() => {
            let nowY = window.scrollY
            if (Math.abs(lastY - nowY) > 100) {
                if (lastY < nowY) {
                    resolve(true)
                }else{
                    resolve(false)
                }
                lastY = nowY
                isCheckingScroll = false
                clearInterval(scrollInterval)
            }
        }, 250)
    })
}

export { hasScrolledDown, isCheckingScroll }
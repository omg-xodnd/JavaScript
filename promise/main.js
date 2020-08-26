const wrap = document.getElementById("wrap")
const startBtn = document.querySelector('.start-btn')


const doubleDigitTime = (time) => {
  return time < 10 ? '0' + time : time
}

const getTime = () => {
  let now = new Date()
  let hour = doubleDigitTime(now.getHours())
  let minute = doubleDigitTime(now.getMinutes())
  let second = doubleDigitTime(now.getSeconds())

  return `${hour}:${minute}:${second}`
}

const promise1 = () => {
  return new Promise((resolve) => {
    console.log('promise started at ' + getTime())

    // 3초 후 시간을 resolve
    setTimeout(() => {
      resolve(`promise resolved at ` + getTime())
    }, 3000)
  })
  // resolve된 값(시간)을 콘솔로 출력
  .then(text => {
    console.log(text)
  })
}

startBtn.addEventListener('click', promise1)
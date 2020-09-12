// 객체를 반환하는 함수 movie가 종료된 이후에도
// return된 객체는 외부함수 movie의 변수 title = "madmax"에 여전히 접근할 수 있다

function movie(title) {
  return {
    get_title() {
      return title
    },
    set_title(_title) {
      title = _title
    }
  }
}

madmax = movie('madmax')

console.log(madmax.get_title())

madmax.set_title("madmax: fury road")  

console.log(madmax.get_title())

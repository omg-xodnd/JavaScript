
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

a = movie('madmax')

a.set_title("madmax: fury road")  

console.log(a.get_title())
console.log(a)
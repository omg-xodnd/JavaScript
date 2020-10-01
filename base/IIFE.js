function init() {
  (function() {
    alert('test')
    document.querySelector('#test')
      .addEventListener('click', function() {
        (function(text) {alert(text)})('omg')
      })  
  })();

  for (var i = 0 ; i < 10 ; i++ ) {
    (function(n) {
      setTimeout(function() {
        console.log(n)
      }, 300*n)
    })(i)
  }
}

init()
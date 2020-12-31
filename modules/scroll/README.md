# [JavaScript] 특정 위치로 부드럽게 스크롤하기



## 배경 및 목적

Vue.js를 이용한 웹 개발 프로젝트를 진행하면서 네비게이션 바의 링크들을 `@click` 이벤트 발생시 `this.$router.push`를 실행하도록 구현하였다.



그런데 `vue-router`는 현재 위치로 다시 한 번 `router.push`하면 'Avoided redundant navigation to current location' 오류를 발생시킨다. 예를 들어 '/home'에 위치한 상태에서 다시 한 번 '/home'으로 push할 경우 해당 오류가 발생하며, 이는 `.catch()`를 이용한 예외처리로 해결할 수 있다.



```
  methods: {
    onClickNavItem(target) {
      this.$router.push({ name: target })
        .catch(() => { this.smoothScrollTo() })
    }
  }
```



## 구현

현재 위치로 이동하는 네비게이션 바 버튼을 한 번 더 누를 경우 해당 페이지의 맨 위로 이동하도록 구현하고자 하였다.


이미 쉽게 이용할 수 있는 라이브러리들이 있긴 하지만 별로 어렵지 않을 것 같아서, 맨 위로만 이동하는 함수가 아니라 특정 scrollY값을 입력하면 해당 위치로 스크롤하는 함수로 구현하였다.



부드러운 애니메이션 효과를 위해 interval을 15ms 단위로 주었다.
60fps => 1프레임당 1/60s = 1000/60ms = 16.6ms 이기 때문에..
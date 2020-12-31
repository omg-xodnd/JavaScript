
/*
  2020.09.24
  ES6 spread에 대해 학습
  
  1. spread
  2. function call
  2. spread in object literal
  2. deconstructuring assignment
  3. 

*/

/* [1. spread]
- iterable의 앞에 콤마 3개를 붙여 해당 iterable을 전개시키는 기능
- 문자열의 split 메서드를 대체할 수 있음.
*/
function spread() {
  const str = 'omg'
  console.log(
    'spread only      : ', ...str, '\n',
    'spread in array  : ', [...str], '\n',
    'split method     : ', str.split(''),
  )
}

// [2. spread in function call]
{
  const arr = [1, 2, 3]
  const strArr = ['a', 'b', 'c']
  function addUp(a, b, c) {
    return a + b + c
  }

  function joinStr(...str) {
    let result = ''
    for (char of str) {
      result += char
    }
    return result
  }
  
  console.log(addUp(...arr))
  console.log(addUp(...strArr))
  console.log(joinStr(...'oops'))
}


/*
[3. spread in object literal 객체 전개 연산자]
- 원본 조작없는 객체 갱신을 위해 Object.assign() 대신 spread 사용하기
- 객체를 전개하기 위해서는 항상 객체 리터럴 안에서 사용되어야 한다
*/
function spreadObj() {
  const person = {
    name: 'Tom',
    age: 30
  }

  function updateJob_1(person, job) {
    return Object.assign({}, person, { job })
  }
  function updateJob_2(person, job) {
    return {...person, job}
  }
  const personUpdated_1 = updateJob_1(person, 'programmer')
  const personUpdated_2 = updateJob_2(person, 'researcher')

  console.log(
    'original Object:', person, '\n',
    'Object.assign:  ', personUpdated_1, '\n',
    'Spread:         ', personUpdated_2, 
  )
}


// [4. spread + deconstructuring assignment]
// 
{
  let arr = [1, 2, 3]
  let [n1, n2, n3] = [...arr] 
}

// [5. rest parameter]
// rest parameter


/*
[Vuex helper]
- Vuex의 mapActions 헬퍼 직접 구현해보기
*/

{
  const houseworkStore = {
    actions: {
      sweeping() {
        console.log('I have LG cord Zero')
      }
    }
  }

  const store = {
    actions: {
      greeting() {
        console.log('hello')
      },
      eating() {
        console.log('yummy')
      }
    },

    modules: {
      housework: houseworkStore,
    }
  }

  function mapActions(a, b) {
    const storeModule = b ? store.modules[a] : store
    const keyList = b ? b : a

    const result = {}
    if (keyList.constructor === Array) {
      keyList.map(key => result[key] = storeModule.actions[key])
    } else if (keyList.constructor === Object) {
      for ([key, actionKey] of Object.entries(keyList)) {
        result[key] = storeModule.actions[actionKey]
      }
    } else {
      throw new Error('인자로 배열 또는 객체를 전달하세요')
    }
    return result
  }
  
  const myActions = {
    ...mapActions(['greeting']),
    ...mapActions({ yumyum: 'eating' }),
    ...mapActions('housework', ['sweeping']),
    suspecting() {
      console.log('hmm')
    }
  }

  myActions.greeting()
  myActions.yumyum()
  myActions.sweeping()
}
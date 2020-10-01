
/*
  2020.09.24
  ES6 spread에 대해 학습
  
  1. spread
  2. function call
  2. object literal
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

// [spread with Array]
{

}


/*
[3. spread in object literal 객체 전개 연산자]
- 원본 조작없는 객체 갱신을 위해 Object.assign() 대신 spread 사용하기
- 객체를 전개하기 위해서는 항상 객체 리터럴 안에서 사용되어야 한다
- 장점
  코드의 의미를 더욱 명확하게 전달하여 가독성을 높일 수 있음.
  새로운 객체를 반환하기 위해 부자연스러운 코드를 작성할 필요 없음.
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
  const actions = {
    greeting() {
      console.log('hello')
    },
    eating() {
      console.log('yummy')
    }
  }
  function mapActions(keyArray) {
    const result = {}
    keyArray.map(key => result[key] = actions[key])
    return result
  }
  
  const myActions = {
    ...mapActions(['greeting']),
    suspecting() {
      console.log('hmm')
    }
  }

  myActions.greeting()
}
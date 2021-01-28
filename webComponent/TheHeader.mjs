import { Component } from '../framework.mjs';
import Test from './MyTest.mjs';

class TheHeader extends Component {
  constructor() {
    super();
    this.components = [ Test ];
    this.template = `
      <header>
        <my-test></my-test>
        <h1>🐈고양이 사진 검색기🔎</h1>
        <input class="keyword" autocomplete="off" />
      </header>`
  }
}

export default TheHeader;
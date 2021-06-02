import React, { Component } from "react";
class UpdateContent extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
    /* shouldComponentUpdate가 왜 필요?
    프로그램의 크기가 커졌을때 불필요한 render을 막기 위해서
    return false일때는 아래 render가 실행되지 않는다. 
    만약 push를 통해 Content를 새로 생성(Create)한다면
    복사본을 setState해주는 것이 아닌
    원본을 setState해주기 때문에
    newProps와 this.props.data가 같은 값을 가져서 
    Content의 변화가 있는지 비교할 수 없다 
    원본을 바꾸지 않는다 === immutable'불변성' */
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault(); /*
          preventDefault()는 submit버튼을 눌렀을때 /create_process로 
          페이지가 넘어가는 것을 막아 준다 */
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
export default UpdateContent;

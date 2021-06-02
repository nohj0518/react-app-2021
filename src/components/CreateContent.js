import React, { Component } from "react";
class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault(); /*
          preventDefault()는 submit버튼을 눌렀을때 /create_process로 
          페이지가 넘어가는 것을 막아 준다 */
            alert("Submit!");
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
export default CreateContent;

import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import "./App.css";

//Compoenet를 만들 때는 최상위 태그가 한 개 존재

class App extends Component {
  //constructor는 render보다 먼저 실행되어 초기화를 담당한다
  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        {
          id: 3,
          title: "JavaScript",
          desc: "JavaScript is for interactive",
        },
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        {/*.state.mode = "welcome";
           1. bind(this)
                  => this는 function안으로 들어온 순간
                  null이 된다. this를 바인딩 시켜줘야함
           2. setState
                  => setState를 해야 리액트가 mode가 바뀐것을 안다
         */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;

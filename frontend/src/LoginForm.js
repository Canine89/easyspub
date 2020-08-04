import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function LoginForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder="아이디를 입력하세요" name="username" />
        <input
          type="text"
          placeholder="비밀번호를 입력하세요"
          name="password"
        />
        <input type="submit" />
      </form>
      <>
        <Route exact path={`${props.match.path}`} render={() => <h3>로그인 화면</h3>}/>
      </>
    </>
  );
}

export default LoginForm;

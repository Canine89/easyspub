import React from "react";

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
    </>
  );
}

export default LoginForm;

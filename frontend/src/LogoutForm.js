import React from "react";

function LogoutForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input type="submit" />
      </form>
    </>
  );
}

export default LogoutForm;

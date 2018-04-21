import React from "react"
import HelloList from "./HelloList"

const HelloWorld = props => {
  return (
    <div>
      <h3>hello, {props.data.content}</h3>
      <HelloList />
    </div>
  );
}

export default HelloWorld

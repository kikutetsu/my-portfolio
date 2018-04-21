import React from "react"
import HelloList from "./HelloList"

const HelloWorld = ({datas}) => {
  let list = []
  datas.map((data) => {
    list.push(
      <div>
        <h3>hello, {data.content}</h3>
        <HelloList />
      </div>
    )
  })
  return (
    <div>
      {list}
    </div>
  );
}

export default HelloWorld

import React from "react"

const WorkList = ({datas}) => {
  let list = []
  datas.map((data) => {
    list.push(
      <div>
        <img src={"/posts/main_images/" + data.main_image} />
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </div>
    )
  })
  return (
    <div>
      {list}
    </div>
  );
}

export default WorkList

import React from 'react'
import './ContentList.css'

function ContentList({datas}) {
  return (
    <div className="content">
      <div className="row">
        <div className="col">{datas.id}</div> 
        <div className="col">{datas.title}</div> 
        <div className="col">{datas.createdAt}</div> 
      </div>  
    </div>
  )
}

export default ContentList
import React from 'react'
import './ContentList.css'
import data from '../resource/dummyData.js'

function ContentList() {
  return (
    <div className="content">
      {data.map((data) => {
        // console.log(data)
        return(
          <div className="row">
            <div className="col">{data.id}</div> 
            <div className="col">{data.title}</div> 
            <div className="col">{data.createdAt}</div> 
          </div>
        )
      })}
    </div>
  )
}

export default ContentList
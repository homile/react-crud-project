import React from 'react'
import './ContentList.css'

function ContentList({datas, onHandleTitleClick}) {
  return (
    <div className="row">
        <div className="col col-id">{datas.id}</div> 
        <div className="col col-title" 
          id={datas.id} 
          onClick={onHandleTitleClick}
          >
            {datas.title}
        </div> 
        <div className="col col-date">{datas.createdAt}</div> 
    </div>
  )
}

export default ContentList
import React from 'react'
// import data from '../resource/dummyData'
import './Create.css'

function Create({onSubmitClick, onHandleCreateTitle, onHandleCreateContent, onHandleCreateBtn}) {
  // console.log(datas)
  return (
    <div className='Content'>
      <span>글 쓰기</span>
      <input placeholder='제목을 입력하세요.' 
        onChange={onHandleCreateTitle}>
      </input>
      <textarea placeholder='내용을 입력하세요.' 
        onChange={onHandleCreateContent}>
      </textarea>
      <div>
        <button className='prev-btn' onClick={onHandleCreateBtn}>
          취소
        </button>
        <button className='sumbit-btn' 
          onClick={onSubmitClick}>
          저장
        </button>
      </div>
    </div>
  )
}

export default Create
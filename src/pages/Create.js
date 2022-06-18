import React from 'react'
// import data from '../resource/dummyData'
import './Create.css'

function Create({onSubmitClick, datas, onHandelCreateTitle, onHandelCreateContent}) {
  console.log(datas)
  return (
    <div className='Content'>
      <span>글 쓰기</span>
      <input placeholder='제목을 입력하세요.' onChange={onHandelCreateTitle}>
      </input>
      <textarea placeholder='내용을 입력하세요.' onChange={onHandelCreateContent}>
      </textarea>
      <div>
        <button className='prev-btn'>
          취소
        </button>
        <button className='sumbit-btn' onClick={onSubmitClick}>
          저장
        </button>
      </div>
    </div>
  )
}

export default Create
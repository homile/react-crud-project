import React from 'react'
import Create from './pages/Create'
import ContentList from './pages/ContentList'
import './App.css'

function App() {

  return (
    <div className='container'>
      {/* 왼쪽 목록 */}
      <div className="table">
        <div className='table-title'>
          <span>목록</span>
          <button>글쓰기</button>
        </div>
        <div className="table-title">
          <div className="tab">번호</div>
          <div className="tab">제목</div>
          <div className="tab">날짜</div>
        </div>
        <ContentList/>
      </div>
      {/* 오른쪽 Create 컴포넌트 */}
      <Create/>
    </div>
  )
}

export default App
import {React, useEffect, useState} from 'react'
import Create from './pages/Create'
import ContentList from './pages/ContentList'
import data from './resource/dummyData'
import './App.css'
import Read from './pages/Read'

function App() {

  const [dummyData, setDummyData] = useState(data);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let idLen = dummyData.length+1;

  const handleSubmitClick = (() => {
    const datas ={
      id: idLen,
      username: 'MinWoo',
      title,
      content,
      createdAt: new Date().toISOString(),
    }
    console.log('저장 버튼 클릭');
    // console.log(datas);

    setDummyData([datas, ...dummyData]);
  });


  const handelCreateTitle = ((e) => {
    // console.log(e.target)
    setTitle(e.target.value);
  });

  const handelCreateContent = ((e) => {
    // console.log(e.target)
    setContent(e.target.value);
  });
  

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
        {dummyData.map((datas)=>(
          <ContentList key={datas.id} datas={datas}/>
        ))
        }
      </div>
      {/* 오른쪽 Create 컴포넌트 */}
      <Create 
        datas={dummyData} 
        onSubmitClick = {handleSubmitClick} 
        onHandelCreateTitle = {handelCreateTitle}
        onHandelCreateContent = {handelCreateContent}
      />
      <Read/>
    </div>
  )
}

export default App
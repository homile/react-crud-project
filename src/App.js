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
  const [id, setId] = useState('');
  const [createBtn, setCreateBtn] = useState(false);

  let idLen = dummyData[0].id+1;

  const handleSubmitClick = (() => {
    const datas ={
      id: idLen,
      username: 'MinWoo',
      title,
      content,
      createdAt: new Date().toLocaleDateString(),
    }
    console.log('저장 버튼 클릭');
    // console.log(datas);

    setDummyData([datas, ...dummyData]);
  });


  const handleCreateTitle = ((e) => {
    // console.log(e.target)
    setTitle(e.target.value);
  });

  const handleCreateContent = ((e) => {
    // console.log(e.target)
    setContent(e.target.value);
  });

  const handleTitleClick = ((e) => {
    // console.log(e.target.id)
    setId(e.target.id);
  });

  const handleCreateBtn = (() => {
    createBtn ? setCreateBtn(false) : setCreateBtn(true); 
  });

  // 저장 버튼 눌렀을 경우
  useEffect(()=>{
    setCreateBtn(false);
    setId(dummyData.length);
  },[dummyData])

  const handleDeleteBtn = (() => {
    console.log(id);
    const filterData = dummyData.filter((el) => (el.id !== Number(id)) );

    setDummyData(filterData);
  });
  

  return (
    <div className='container'>
      {/* 왼쪽 목록 */}
      <div className="table">
        <div className='table-title'>
          <span>목록</span>
          <button onClick={handleCreateBtn}>글쓰기</button>
        </div>
        <div className="table-title">
          <div className="tab">번호</div>
          <div className="tab">제목</div>
          <div className="tab">날짜</div>
        </div>
        {dummyData.map((datas)=>(
          <ContentList 
            key = {datas.id} 
            datas = {datas}
            onHandleTitleClick = {handleTitleClick}
          />
        ))
        }
      </div>
      {/* 오른쪽 Create 컴포넌트 */}
      {
        createBtn 
        ? <Create 
          onSubmitClick = {handleSubmitClick} 
          onHandleCreateTitle = {handleCreateTitle}
          onHandleCreateContent = {handleCreateContent}
          onHandleCreateBtn = {handleCreateBtn}
        />
        :id
        ? <Read 
          datas = {dummyData}
          titleClickId = {Number(id)}
          onHandleDeleteBtn = {handleDeleteBtn}
        />
        :<Read 
          datas = {dummyData}
          titleClickId = {Number(dummyData.length)}
        />
      }
    </div>
  )
}

export default App
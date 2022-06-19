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
  const [modifyClick, setModifyClick] = useState(false);

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

    setDummyData([datas, ...dummyData]);
  });


  const handleCreateTitle = ((e) => {
    setTitle(e.target.value);
  });

  const handleCreateContent = ((e) => {
    setContent(e.target.value);
  });

  const handleTitleClick = ((e) => {
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
    const filterData = dummyData.filter((el) => (el.id !== Number(id)) );

    setDummyData(filterData);
  });

  const modify = (() => {
    modifyClick ? setModifyClick(false) : setModifyClick(true);
  })


  const handleChange = ((e) => {
    setModifyClick(false);
    for(let i = 0; i < dummyData.length; i++){
      if(dummyData[i].id === Number(e.target.id)){
        dummyData[i].content = content;
        break;
      }
    }
  });

  return (
    <div className='container'>
      {/* 왼쪽 목록 */}
      <div className="table">
        <div className='table-title'>
          <span>목록</span>
          <button onClick={handleCreateBtn}>글쓰기</button>
        </div>
        <div className="row">
          <div className="col col-id">번호</div>
          <div className="col col-title">제목</div>
          <div className="col col-date">날짜</div>
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
          onHandleUpdateTitle = {handleCreateTitle}
          onHandleUpdateContent = {handleCreateContent}
          modify = {modify}
          modifyClick = {modifyClick}
          onHandleChange = {handleChange}
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
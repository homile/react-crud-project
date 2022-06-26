import {React, useEffect, useState} from 'react'
import Create from './pages/Create'
import ContentList from './pages/ContentList'
// import data from './resource/dummyData'
import './App.css'
import Read from './pages/Read'

function App() {

  const domain = 'http://localhost:3001';

  // const [dummyData, setDummyData] = useState(data); dummydata사용
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = (() => {
    return fetch('http://localhost:3001/discussions')
        .then((res) => res.json())
        .then((data) => {
            setDummyData(data)
      })
  })

  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [createBtn, setCreateBtn] = useState(false);
  const [modifyClick, setModifyClick] = useState(false);

  // let idLen = dummyData[0].id+1;

  const handleSubmitClick = () => {
    const newData = {
      title,
      content,
    };

    fetch(domain + '/discussions/', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }).then((res) => {
      if(res.status === 200){
        getData();
      }
    })
    // ===== dummydata 사용 =====
    // const datas ={
    //   id: idLen,
    //   username: 'MinWoo',
    //   title,
    //   content,
    //   createdAt: new Date().toLocaleDateString(),
    // }
    // console.log('저장 버튼 클릭');

    // setDummyData([datas, ...dummyData]);
    // =============================
  };


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
    fetch(domain + `/discussions/${id}`,{
      method: 'DELETE',
    }).then((res) => {
      if (res.status === 200){
        getData();
      }
    })

    // const filterData = dummyData.filter((el) => (el.id !== Number(id)) );
    // setDummyData(filterData);
  });

  const modify = (() => {
    modifyClick ? setModifyClick(false) : setModifyClick(true);
  })


  const handleChange = ((e) => {
    setModifyClick(false);

    fetch(domain + `/discussions/${e.target.id}`, {
      method: 'PUT',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'content':content})
    }).then((res) => {
      if(res.status === 200){
        getData();
      }
    })

    // for(let i = 0; i < dummyData.length; i++){
    //   if(dummyData[i].id === Number(e.target.id)){
    //     dummyData[i].content = content;
    //     break;
    //   }
    // }
  });

  return (
    <div className='container'>
      {/* 왼쪽 목록 */}
      <div className="table">
        <div className='row table-title'>
          <div className='col'></div>
          <div className='col'>
            <span>목록</span>
          </div>
          <div className='col'>
            <button onClick={handleCreateBtn}>글쓰기</button>
          </div>
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
import React from 'react'

function Read({datas, titleClickId, onHandleDeleteBtn, onHandleUpdateTitle, onHandleUpdateContent, modify, modifyClick,onHandleChange}) {
  // console.log(titleClickId);
  const titleClickContent = datas.filter((el)=>el.id === titleClickId);

  return (
    <div>
      {titleClickContent.length !== 0 ?
        modifyClick === false ? 
        <div className='Content'>
          <div>{titleClickContent[0].title}</div>
          <div>
            <span>{titleClickContent[0].username}</span>
            <span>{titleClickContent[0].createdAt}</span>
          </div>
          <div>{titleClickContent[0].content}</div>
          <div>
            <button onClick={modify}>
              수정하기
            </button>
            <button 
              onClick={onHandleDeleteBtn}
            >
              삭제하기
            </button>
          </div>
        </div> 
          :
          <div className='Content'>
            <div>{titleClickContent[0].title}</div>
            <div>
              <span>{titleClickContent[0].username}</span>
              <span>{titleClickContent[0].createdAt}</span>
            </div>
            <textarea 
              defaultValue={titleClickContent[0].content} 
              onChange={onHandleUpdateContent}>
            </textarea>
            <div>
              <button onClick={modify}>
                취소하기
              </button>
              <button id={titleClickContent[0].id} onClick={onHandleChange}>
                수정완료
              </button>
            </div>
          </div> 
          :
          <div className='Content'>
            <div>삭제된 게시물 입니다.</div>
          </div> 
      }
    </div>
  )
}

export default Read
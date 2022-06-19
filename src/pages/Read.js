import React from 'react'

function Read({datas, titleClickId, onHandleDeleteBtn}) {
  // console.log(titleClickId);
  const titleClickContent = datas.filter((el)=>el.id === titleClickId);

  return (
    <div className='Content'>
      {titleClickContent.length !== 0 ?
        <div>
          <div>{titleClickContent[0].title}</div>
          <div>{titleClickContent[0].username}{titleClickContent[0].createdAt}</div>
          <div>{titleClickContent[0].content}</div>
          <div>
            <button>
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
        <div>
          <div>삭제된 게시물 입니다.</div>
        </div> 
      }
    </div>
  )
}

export default Read
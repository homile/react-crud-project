import React from 'react'

function Read({datas, titleClickId}) {
  // console.log(titleClickId);
  const titleClickContent = datas.filter((el)=>el.id === titleClickId);
  // console.log(titleClickContent);

  return (
    <div className='Content'>
      <div>{titleClickContent[0].title}</div>
      <div>{titleClickContent[0].username}{titleClickContent[0].createdAt}</div>
      <div>{titleClickContent[0].content}</div>
      <button>수정하기</button>
    </div>
  )
}

export default Read
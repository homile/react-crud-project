import React from 'react'
import './ContentList.css'

function ContentList() {
  return (
    <div className="row">
      {/* data의 번호 */}
      <div className="col">{'번호 들어갈 자리'}</div>
      {/* data의 제목 */}
      <div className="col">{'제목 들어갈 자리'}</div>
      {/* data의 작성일자 */}
      <div className="col">{'작성일자 들어갈 자리'}</div>
    </div>
  )
}

export default ContentList
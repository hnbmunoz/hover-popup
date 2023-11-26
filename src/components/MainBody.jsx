import React from 'react'
import HoverComponent from './HoverComponent'

const MainBody = () => {
  return (
    <div>
      <div>MainBody</div>
      {/* <HoverComponent /> */}
      <div>
        <div>
          <h1 contentEditable={true}>This is H1</h1>
        </div>
        <div>
          <h2>This is H2</h2>
        </div>
        <div>
          <h3>This is H3</h3>
        </div>
      </div>
    </div>
  )
}

export default MainBody
import style from './web.module.css'
import React from 'react'
import './page.css'
import HomePage from "../../page"

const WebDeveopmentPage = () => {
  return (<>
  <HomePage />
    <div className="page services">
      <div className="card">
          <div className="card-text">
            <h2>Graphic Design</h2>
            <p>Graphic Design services coming soon</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default WebDeveopmentPage
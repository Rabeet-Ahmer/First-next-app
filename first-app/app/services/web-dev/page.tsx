import style from './web.module.css'
import React from 'react'
import './page.css'
import HomePage from "../../page"

const WebDeveopmentPage = () => {
  return (
    <>
    <HomePage />
    <div className="page services">
      <div className="card">
          <div className="card-text">
            <h2>Web Development</h2>
            <p>Web Developement services coming soon</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default WebDeveopmentPage
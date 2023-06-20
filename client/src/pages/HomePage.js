
import Layout from "../components/Layout/Layout"
import './HomePage.css'

import React from 'react'
import { useState } from "react"
import Modal from "antd/es/modal/Modal"

const HomePage = () => {
  const[showModal,setShowModal] = useState(false)
  return (
    <Layout>
      <div className="filters">
    <div>Range Filters</div>
    <div>
      <button className="btn btn-primary" onClick={()=>setShowModal(true)}>Add new</button>
    </div>
      </div>
      <div className="content"></div>
      <Modal title="Add Transaction"
      open={showModal}
      onCancel={()=>setShowModal(false)}
      footer={false}
      >
        
    <h1>Hello</h1>
      </Modal>
    </Layout>
  )
}

export default HomePage

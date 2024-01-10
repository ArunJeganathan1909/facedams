import React from 'react'

import PageHeader from './components/PageHeader'
import Sidebar from './components/Sidebar'
import DisplayPage from './components/DisplayPage'
import './styles/IndexPage.css'

const IndexPage = () => {
  return (
    <div>
        <div className='index-container'>
            <div className='index-pageHeader'>
                <PageHeader />
            </div>
            <div className='index-pageBody'>
                <div className='index-sidebar'><Sidebar /></div>
                <div className='index-displayPage'><DisplayPage /></div>
            </div>
        </div>
    </div>
  )
}

export default IndexPage
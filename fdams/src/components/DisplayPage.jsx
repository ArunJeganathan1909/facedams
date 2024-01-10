import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AdminPage from '../Pages/AdminPage.jsx'
import StaffPage from '../Pages/StaffPage.jsx'
import StudentPage from '../Pages/StudentPage.jsx'

const DisplayPage = () => {
  return (
    <div>DisplayPage
      <dir>
        <Routes>
          <Route path='/Home' Component={HomePage} />
          <Route path='/Admin' Component={AdminPage} />
          <Route path='/Staffs' Component={StaffPage} />
          <Route path='/Students' Component={StudentPage} />
        </Routes>
      </dir>
    </div>
  )
}

export default DisplayPage
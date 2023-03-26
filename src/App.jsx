import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Table from './Components/table'
import TopInfo from './Components/topInfo'

function App() {

  return (
    <div className="App bg-gray-900 h-[100vh] flex absolute w-[100vw]">
      <Sidebar />
      <TopInfo />
    </div>
  )
}

export default App

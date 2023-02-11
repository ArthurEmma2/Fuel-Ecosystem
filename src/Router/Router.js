import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home'
import Ecosystem from '../Pages/Ecosystem'
import Job from '../Pages/Job'
import Metrics from '../Pages/Metrics'
import News from '../Pages/News'
import Education from '../Pages/Education'
import Articles from '../Pages/Articles'
import Airdrop from '../Pages/Airdrop'
// import Projectdetails from '../Pages/Projectdetails'
import Project from '../Pages/Project'

function Router() {
  




  return (
   <Routes>
      <Route path='/home'element={<Navigate to='/'/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/education' element={<Education />}/>
      <Route path='/ecosystem/:id' element={<Project />} />
      <Route path='/jobs' element={<Job />}/>
      <Route path='/airdrop' element={<Airdrop />}/>
      <Route path='/news' element={<News />}/>
      <Route path='/articles' element={<Articles />}/>
      <Route path='/ecosystem:id' element={<Ecosystem />} />
      <Route path='/ecosystem' element={<Ecosystem />} />
      <Route path='/metrics' element={<Metrics />}/>

   </Routes>
  )
}

export default Router
import React from 'react'
import { projectData } from '../../staticData/projectStaticData'
import ProjectCard from '../../component/projectCom/ProjectCard'

const page = () => {
  return (
    <div className=''>
     <h1 className='text-3xl font-bold text-center mb-3' >MY Project</h1>
     <div className='grid grid-cols-1  gap-2 md:grid-cols-2 lg:grid-cols-3' >
        {projectData.map((e)=>(
          <ProjectCard key={e.name} item={e} />
        ))}
     </div>
    </div>
  )
}

export default page

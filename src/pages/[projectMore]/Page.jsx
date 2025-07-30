import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
    const param=useParams()

    
    useEffect(()=>{


    },[param.projectId])

    
  return (
    <div>
      
    </div>
  )
}

export default Page

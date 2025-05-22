import React from 'react'

// const projects=[
//   title:'Workers 360',
//   description:
// ]

const ProjectsWindow = ({onClose}) => {
  return (
    <div className='absolute top-20 left-20 w-[750px] h-[540px] bg-white border-2 border-gray-600 shadow-xl rounded-md overflow-hidden z-50'>
        <div className=''bg-blue-600 text-white px-3 py-1 flex justify-between items-center font-semibold>
            <span>My Projects</span>
            <button onClick={onClose} className='bg-red-500 hover:bg-red-600 px-2 py-0.5 rounded text-sm font-bold'>X</button>
        </div>
        <div className='w-full h-full overflow-auto bg-gray-50'>
            <img src="" alt="ProjectsView" className='w-full h-full object-contain'/>
        </div>
      
    </div>
  )
}

export default ProjectsWindow


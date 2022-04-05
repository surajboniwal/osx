import React from 'react'

export default function Folder({ project }) {
    return (
        <div onClick={() => window.open(project.html_url, '_blank')} className={`m-4 p-2 flex flex-col items-center justify-center bg-opacity-30 rounded-lg cursor-pointer`}>
            <img className=' w-16 h-16' src="icons/folder_no_bg.svg" alt="" />
            <p className='text-black font-semibold text-center'>{project.name}</p>
        </div>
    )
}

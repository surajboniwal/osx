import React from 'react'
import { apps } from './../apps.config'

const Dock = ({ launchApp }) => {


    return (
        <div className="w-full flex justify-center mb-2 transition">
            <div className={`bg-white p-2 rounded-2xl bg-opacity-30 flex items-center dock-parent`}>
                {apps.map(app => {
                    return <DockIcon key={app.id} launch={launchApp} app={app} />
                })}
            </div>
        </div >
    )
}

export default Dock

export const DockIcon = ({ app, launch, onHover }) => {
    return (
        <img onClick={() => launch(app.id)} alt={app.icon} className='px-4  dock-child transform transition duration-200 cursor-pointer h-12' src={app.icon} />
    )
}

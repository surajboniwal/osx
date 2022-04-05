import React from 'react'
import { FaApple } from 'react-icons/fa'
import { MdAirplay, MdWifi, MdVolumeDown, MdSearch, MdSettings } from 'react-icons/md'

const TopBar = ({ launchApp }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date()

    return (
        <div className='w-full h-6 z-10 fixed bg-white bg-opacity-30 flex justify-between text-white px-3'>
            <div className="flex items-center">
                <div className="mr-4 cursor-pointer">
                    <FaApple />
                </div>

                <div onClick={() => launchApp('finder')} className="text-base font-bold mr-4 cursor-pointer">Finder</div>

                <ul className="list-none flex font-bold">
                    <MenuItem label='File' />
                    <MenuItem label='Edit' />
                    <MenuItem label='View' />
                    <MenuItem label='Go' />
                    <MenuItem label='Window' />
                    <MenuItem label='Help' />
                </ul>
            </div>

            <div className="flex items-center">
                <div className="mr-4 cursor-pointer">
                    <MdAirplay />
                </div>
                <div className="mr-4 cursor-pointer">
                    <MdWifi />
                </div>
                <div className="mr-4 cursor-pointer text-lg">
                    <MdVolumeDown />
                </div>
                <div className="mr-4 cursor-pointer">
                    <MdSearch />
                </div>
                <div className="mr-4 cursor-pointer">
                    <MdSettings />
                </div>
                <div className="text-sm font-semibold">
                    {
                        `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBar

function MenuItem({ label }) {
    return (
        <li className="text-sm mr-4 cursor-pointer font-bold">{label}</li>
    )
}


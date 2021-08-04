import React from 'react'
import { FaApple } from 'react-icons/fa';

const BootScreen = () => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
            <div className="text-white text-9xl">
                <FaApple />
            </div>

        </div>
    )
}

export default BootScreen

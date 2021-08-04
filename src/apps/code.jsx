import React from 'react'

export default function Code() {
    return (

        <div className="w-full h-full bg-white">
            <iframe title='code' className='w-full h-full' src="https://github1s.com/surajboniwal/FCalc" frameborder="0"></iframe>
        </div>

    )
}

export const displayCode = () => {
    return <Code />
}
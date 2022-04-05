import React from 'react'


export default function Resume() {
    return (

        <div className="w-full h-full bg-white">
            <object data="./surajboniwal-resume.pdf" type="application/pdf" width="100%" height="100%">
            </object>
        </div>

    )
}

export const displayResume = () => {
    return <Resume />
}
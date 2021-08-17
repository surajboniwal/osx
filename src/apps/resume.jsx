import React from 'react'


export default function Resume() {
    return (

        <div className="w-full h-full bg-white">
            <object data="./surajboniwal-resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </div>

    )
}

export const displayResume = () => {
    return <Resume />
}
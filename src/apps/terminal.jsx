import React from 'react'
import Terminal from 'portfolio-terminal'

const openUrl = (url, label) => {
    window.open(url, '_blank')
    return `Visited ${label} :)`
}

const TerminalApp = () => {
    return (
        <div className='h-full bg-green-500'>
            <Terminal
                hideTopBar={true}
                startState='maximised'
                commands={{
                    'github': () => openUrl('https://github.com/surajboniwal', 'Github'),
                    'linkedin': () => openUrl(' https://linkedin.com/in/surajboniwal', 'LinkedIn'),
                }}
                descriptions={{
                    'github': 'Visit me on Github',
                    'linkedin': 'Visit me on LinkedIn',
                }}
                msg={`Hello! You can type 'help' for list of commands`}
            />
        </div>
    )
}

export default TerminalApp

export const displayTerminal = () => {
    return <TerminalApp />
}

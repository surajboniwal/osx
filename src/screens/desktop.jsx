import React, { Component } from 'react'
import Dock from './../components/Dock'
import Window from './../base/window'
import { apps } from './../apps.config'

export class Desktop extends Component {

    constructor() {
        super();
        this.state = {
            launched_apps: [],
            projects_selected: false,
        }
    }

    launchApp = (app) => {
        let _launched_apps = this.state.launched_apps
        if (_launched_apps.find(a => a.id === app
        )) return
        _launched_apps.push(apps.find(a => a.id === app))
        this.setState({ launched_apps: _launched_apps })
    }

    closeApp = (app) => {
        let _launched_apps = this.state.launched_apps.filter(_app => _app !== app)
        this.setState({ launched_apps: _launched_apps })
    }

    render() {
        return (

            <div className='h-full pt-6 w-full relative overflow-hidden overscroll-none flex flex-col justify-between'>
                <div onClick={() => this.state.projects_selected ? this.setState({ projects_selected: false }) : {}} className='h-full relative flex justify-start items-start'>

                    {/* Windows goes here */}
                    {
                        this.state.launched_apps.map(app => {
                            return <Window closeApp={this.closeApp} child={app} />
                        })
                    }

                    <div onDoubleClick={() => this.launchApp('finder')} onClick={() => this.setState({ projects_selected: true })} className={`m-6 p-2 flex flex-col items-center justify-center bg-opacity-30 rounded-lg ${this.state.projects_selected ? 'bg-blue-500' : ''}`}>
                        <img className=' w-16 h-16' src="icons/folder.svg" alt="" />
                        <p className='text-white font-semibold'>Projects</p>
                    </div>

                </div>

                <Dock launchApp={this.launchApp} />
            </div>

        )
    }
}

export default Desktop
import React, { Component } from 'react'
import Dock from './../components/Dock'
import Window from './../base/window'
import { apps } from './../apps.config'
import TopBar from '../components/TopBar';

export class Desktop extends Component {

    constructor() {
        super();
        this.state = {
            launched_apps: [],
            projects_selected: false,
            focused_window: ''
        }
    }

    focusWindow = (id) => {
        this.setState({ focused_window: id })
    }

    launchApp = (id) => {
        let _launched_apps = this.state.launched_apps
        let app = apps.find(a => a.id === id)
        if (_launched_apps.find(a => a.id === id)) return
        _launched_apps.push(app)
        this.setState({ launched_apps: _launched_apps, focused_window: app.id })
    }

    closeApp = (app) => {
        let _launched_apps = this.state.launched_apps.filter(_app => _app !== app)
        this.setState({ launched_apps: _launched_apps })
    }

    render() {
        return (
            <>

                <TopBar launchApp={this.launchApp} />
                <div className='h-full w-full pt-6 relative overflow-hidden overscroll-none flex flex-col justify-between'>
                    <div onClick={() => this.state.projects_selected ? this.setState({ projects_selected: false }) : {}} className='h-full relative flex justify-start items-start'>

                        {/* Windows goes here */}
                        {
                            this.state.launched_apps.map(app => {
                                return <Window closeApp={this.closeApp} focused={this.state.focused_window === app.id} setFocused={this.focusWindow} child={app} />
                            })
                        }

                        <div onDoubleClick={() => this.launchApp('finder')} onClick={() => this.setState({ projects_selected: true })} className={`m-6 p-2 flex flex-col items-center justify-center bg-opacity-30 rounded-lg ${this.state.projects_selected ? 'bg-blue-500' : ''}`}>
                            <img className=' w-16 h-16' src="icons/folder_no_bg.svg" alt="" />
                            <p className='text-white font-semibold'>Projects</p>
                        </div>

                    </div>

                </div>
                <Dock launchApp={this.launchApp} />
            </>
        )
    }
}

export default Desktop
import React, { Component } from 'react'
import TopBar from './components/TopBar'
import BootScreen from './screens/boot_screen'
import Desktop from './screens/desktop';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            booting: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            localStorage.setItem('booting', false)
            this.setState({ booting: false })
        }, 2000)

    }

    render() {
        return (
            <div className='bg-macos-bg h-screen w-screen overflow-hidden'>
                {this.state.booting ? < BootScreen /> : <></>}
                <TopBar />
                <Desktop />
            </div>
        )
    }
}

export default App
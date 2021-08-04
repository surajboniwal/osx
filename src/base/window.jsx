import React, { Component } from 'react'
import Draggable from 'react-draggable'


export class Window extends Component {

    constructor() {
        super()
        this.state = {
            cursorHold: false
        }
    }

    setCursorHoldOn = () => {
        this.setState({ cursorHold: true })
    }

    setCursorHoldOff = () => {
        this.setState({ cursorHold: false })
    }

    render() {
        return (
            <Draggable
                axis="both"
                handle=".title-bar"
                grid={[1, 1]}
                scale={1}
                onStop={this.setCursorHoldOff}
                onStart={this.setCursorHoldOn}
                allowAnyClick={false}
                defaultPosition={{ x: 50, y: 50 }}
                bounds='parent'
                style={{ position: 'absolute' }}
            >
                <div className='shadow-xl' style={{ width: '1000px', height: '550px', position: 'absolute', top: 0 }}>

                    <div className={`title-bar flex items-center justify-between bg-gray-200 rounded-t p-1 ${this.state.cursorHold ? 'cursor-move' : ''}`}>
                        <div className='flex'>
                            <div onClick={() => this.props.closeApp(this.props.child)} className="bg-red-500 text-white rounded-full p-1.5 mr-2 cursor-pointer"></div>
                            <div className="bg-yellow-500 text-white rounded-full p-1.5 mr-2 cursor-pointer"></div>
                            <div className="bg-green-500 text-white rounded-full p-1.5 mr-2 cursor-pointer"></div>
                        </div>
                        <div className={`${this.state.cursorHold ? 'cursor-move' : 'cursor-default'}`}>{this.props.child.title}</div>
                        <div className='px-6'></div>
                    </div>

                    {this.props.child.display()}
                </div>

            </Draggable>
        )
    }
}

export default Window
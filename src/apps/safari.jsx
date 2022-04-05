import React, { Component } from 'react'
import { safariApps } from './../safari.config'
import { IoLockClosed } from 'react-icons/io5'


export class Safari extends Component {

    constructor() {
        super()
        this.state = {
            isFav: true
        }
    }

    setIsFav = (val) => {
        this.setState({ isFav: val })
    }

    render() {
        return (
            <div className='h-full bg-safari-bg'>
                <div className="pb-2 flex items-center justify-center bg-gray-200">
                    <div className="bg-gray-300 w-1/2 rounded-md text-sm p-1 flex items-center justify-center">
                        {
                            this.state.isFav ? <></> : <IoLockClosed className='text-gray-500 mr-2' />
                        }
                        <div className="">{this.state.isFav ? 'Bookmarks' : 'google.com'}</div>
                    </div>
                </div>
                {this.state.isFav ?
                    <>
                        <div className="pl-8 py-4 text-white text-2xl font-bold">Favorites</div>
                        <div className="w-full h-full flex px-8">
                            {
                                safariApps.map(app => {
                                    return <SafariIcon setIsFav={this.setIsFav} key={app.label} app={app} />
                                })
                            }
                        </div>
                    </> : <div className="w-full h-full bg-white">
                        <iframe title='safari' className='w-full h-full' src="https://www.google.com/webhp?igu=1" frameborder="0"></iframe>
                    </div>
                }


            </div>
        )
    }
}

export const displaySafari = () => {
    return <Safari />
}

function SafariIcon({ app, setIsFav }) {
    return (
        <div onClick={() => setIsFav(false)} className='bg-white bg-opacity-80 cursor-pointer w-16 h-16 p-4 mr-4 rounded-lg'>
            <img src={app.icon} alt={app.label} />
        </div>
    )
}


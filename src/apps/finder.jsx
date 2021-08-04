import React, { Component } from 'react'
import { IoIosFolder } from 'react-icons/io'
import Folder from '../components/Folder'


export class Finder extends Component {

    constructor() {
        super()
        this.state = {
            projects: null
        }
    }

    componentDidMount() {
        this.loadGithubRepos()
    }

    loadGithubRepos = () => {
        fetch('https://api.github.com/users/surajboniwal/repos').then(response => response.json()).then(data => {
            this.setState({ projects: data })
        })
    }

    render() {
        return (
            <div className="w-full h-full bg-white flex flex-row">
                <div className="bg-gray-200 w-1/3">
                    <div className='text-gray-500 m-4'>
                        Favorites
                    </div>

                    <div className="mx-4 bg-gray-300 px-3 py-1 cursor-pointer rounded flex items-center">
                        <div className='mr-2 text-blue-500'>
                            <IoIosFolder />
                        </div>
                        <div>
                            Projects
                        </div>
                    </div>
                </div>

                <div className="bg-white h-full w-full">
                    {
                        this.state.projects === null ?
                            <div className="flex items-center justify-center">
                                Loading...
                            </div> :
                            <div className='grid grid-cols-3 h-full overflow-scroll'>
                                {
                                    this.state.projects.map(project => {
                                        return <Folder project={project} />
                                    })
                                }
                            </div>
                    }
                </div>

            </div>
        )
    }
}

export default Finder


export const displayFinder = () => {
    return <Finder />
}
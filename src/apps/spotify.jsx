import React from 'react'

export default function Spotify() {
    return (

        <div className="w-full h-full bg-white">
            <iframe title='spotify' className='h-full' src="https://open.spotify.com/embed/playlist/5ky7GaEwLAKfs45xIbHEMk?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

    )
}

export const displaySpotify = () => {
    return <Spotify />
}
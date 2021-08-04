import { displaySafari } from './apps/safari'
import { displayTerminal } from './apps/terminal'
import { displayCode } from './apps/code'
import { displaySpotify } from './apps/spotify'
import { displayFinder } from './apps/finder';

export const apps = [
    {
        id: 'safari',
        title: 'Safari',
        icon: './icons/safari.svg',
        display: displaySafari,
    },
    {
        id: 'terminal',
        title: 'Terminal',
        icon: './icons/terminal.svg',
        display: displayTerminal,
    },
    {
        id: 'finder',
        title: 'Finder',
        icon: './icons/finder.svg',
        display: displayFinder,
    },
    {
        id: 'code',
        title: 'VS Code',
        icon: './icons/code.ico',
        display: displayCode,
    },
    {
        id: 'spotify',
        title: 'Spotify',
        icon: './icons/spotify.svg',
        display: displaySpotify,
    }
];
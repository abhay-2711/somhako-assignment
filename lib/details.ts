import { colours } from "./colours";

export const Data: Note[] = [
    {
        id: 1,
        title: 'Sample Note',
        content: 'This is a sample note content.',
        timestamp: Date.now(),
        colour: colours[0], 
        image: "https://d3nn873nee648n.cloudfront.net/900x600/16909/13-SM734012.jpg",
    }, 
    {
        id: 2,
        title: 'Another Note',
        content: 'This is another sample note content.',
        timestamp: Date.now(),
        colour: colours[1],
        image: "https://d3nn873nee648n.cloudfront.net/900x600/2341/20-SM105669.jpg",
    },
    {
        id: 3,
        title: 'One More Note',
        content: 'This is one more sample note content.',
        timestamp: Date.now(),
        colour: colours[2],
        image: "https://d3nn873nee648n.cloudfront.net/900x600/18648/220-SM848863.jpg",
    },
    {
        id: 4,
        title: 'Last Note',
        content: 'This is the last sample note content.',
        timestamp: Date.now(),
        colour: colours[3],
        image: "https://d3nn873nee648n.cloudfront.net/900x600/20362/12-SM1020557.jpg",
    }, 
];
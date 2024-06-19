interface HomeImage {
    src: string;
    width: string;
    zIndex: number;
    animation: string;
    sx: string;
}

export const homeImages: HomeImage[] = [
    {
        src: '/image/home/computer.svg',
        width: '10%',
        zIndex: 1,
        animation: '',
        sx: `
            transform: translate(-50%, -50%) rotate(-15deg);
            left: 42%;
            bottom: 40%;
        `,
    },
    // {
    //     src: '/image/home/coffee.svg',
    //     width: '10%',
    //     zIndex: 1,
    //     animation: '',
    //     sx: `
    //         transform: translate(-50%, -50%) rotate(-15deg);
    //         bottom: 40%;
    //         left: 62%;
    //     `,
    // },
    // {
    //     src: '/image/home/camera.svg',
    //     width: '10%',
    //     zIndex: 1,
    //     animation: '',
    //     sx: `
    //         transform: translate(-50%, -50%) rotate(55deg);
    //         bottom: 40%;
    //         left: 62%;
    //     `,
    // },
    {
        src: '/image/home/star.svg',
        width: '4%',
        zIndex: 1,
        animation: '',
        sx: `
            transform: translate(-50%, -50%) rotate(55deg);
            bottom: 40%;       
            left: 65%;
        `,
    },
    {
        src: '/image/home/star.svg',
        width: '3%',
        zIndex: 1,
        animation: '',
        sx: `
            transform: translate(-50%, -50%) rotate(55deg);
            bottom: 60%;         
            left: 55%;
        `,
    },
    // {
    //     src: '/image/home/game.svg',
    //     width: '10%',
    //     zIndex: 1,
    //     animation: '',
    //     sx: `
    //         transform: translate(-50%, -50%) rotate(10deg);
    //         bottom: 44%;
    //         left: 50%;
    //     `,
    // },
    {
        src: '/image/home/liquid.svg',
        width: '35%',
        zIndex: 0,
        animation: '',
        sx: `
            transform: translate(-50%, -50%) rotate(10deg);
            bottom: 20%;   
            left: 45%;
        `,
    },
    {
        src: '/image/home/liquid.svg',
        width: '20%',
        zIndex: 0,
        animation: '',
        sx: `
            transform: translate(-50%, -0%) rotate(140deg);
            bottom: 20%;   
            left: 70%;
        `,
    },
    {
        src: '/image/home/cloud.svg',
        width: '25%',
        zIndex: 0,
        animation: 'upDown',
        sx: `
            transform: translate(-50%, -50%) rotate(0deg);
            bottom: 10%;  
            left: 76%;
        `,
    },
    {
        src: '/image/home/cloud2.svg',
        width: '15%',
        zIndex: 0,
        animation: 'upDown2',
        sx: `
            transform: translate(-50%, -50%) rotate(0deg);
            bottom: 60%;    
            left: 2%;
        `,
    },
];

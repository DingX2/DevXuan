export const animation = (screenWidth: number = 0) => ({
    wind: {
        initial: { x: 0, y: 0 },
        animate: {
            x: [-100, screenWidth + 100],
            y: [0, -100, -200, -100, 0, 100, 200, 300, 270, 250, 230, 200, 150],
            rotate: [0, -45, 45, -30, 30, 0],
        },
        transition: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
    wind2: {
        initial: { x: 100, y: 0 },
        animate: {
            x: [-100, screenWidth + 100],
            y: [0, -100, -200, -100, 0, 100, 200, 300, 270, 250, 230, 200, 150],
            rotate: [0, -45, 45, -30, 30, 0],
        },
        transition: {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
    pop: {
        initial: { opacity: 0, y: 50, scale: 1 },
        animate: { opacity: 1, y: 0, transition: { delay: 0.05 } },
        transition: { duration: 0.25, ease: 'ease-out' },
        exit: { opacity: 0, y: -50, scale: 1 },
    },
});

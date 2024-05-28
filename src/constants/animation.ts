interface BasicAnimationConfig {
    initial: { x?: number; y?: number; opacity?: number; scale?: number };
    animate: {
        x?: number | number[];
        y?: number | number[];
        rotate?: number | number[];
        opacity?: number | number[];
        scale?: number | number[];
        transition?: { delay?: number };
    };
    transition: { duration: number; ease: string; repeat?: number; repeatType?: string };
    exit?: { opacity: number; y: number; scale: number };
}

interface WindAnimationConfig extends BasicAnimationConfig {
    animate: { x: number[]; y: number[]; rotate: number[] };
}

interface Animations {
    wind: WindAnimationConfig;
    wind2: WindAnimationConfig;
    wind3: WindAnimationConfig;
    wind4: WindAnimationConfig;
    pop: BasicAnimationConfig;
    [key: string]: BasicAnimationConfig;
}

export const animation = (screenWidth: number = 0): Animations => ({
    wind: {
        initial: { x: 0, y: 0 },
        animate: {
            x: [-200, screenWidth / 2 + 50],
            y: [0, -100, -200, -100, 0, 100, 200, 300, 270, 250, 230, 200, 150],
            rotate: [0, -45, 45, -30, 30, 0],
        },
        transition: {
            duration: 14,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
    wind2: {
        initial: { x: 0, y: 0 },
        animate: {
            x: [-200, screenWidth / 2 + 50],
            y: [0, -20, -40, -80, -160, -200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200, 160, 120, 80, 40],
            rotate: [0, -35, 35, -30, 30, 0],
        },
        transition: {
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
    wind3: {
        initial: { x: 0, y: 0 },
        animate: {
            x: [-200, screenWidth / 2 + 50],
            y: [0, -30, -60, -90, -150, -210, -240, -230, -200, -170, -140, -100, -70, -30, 0, 30, 60, 90, 120, 150],
            rotate: [0, -45, 45, -30, 30, 0],
        },
        transition: {
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
    wind4: {
        initial: { x: 0, y: 0 },
        animate: {
            x: [-200, screenWidth / 2 + 50],
            y: [0, -20, -40, -80, -150, -210, -240, -230, -200, -170, -140, -100, -70, -30, 0, 30, 60, 90, 120, 150],
            rotate: [0, -25, 25, -30, 30, 0],
        },
        transition: {
            duration: 18,
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

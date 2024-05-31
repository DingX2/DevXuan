export interface BasicAnimationConfig {
    initial: { x?: number; y?: number; opacity?: number; scale?: number; rotateY?: number };
    animate: {
        x?: number | number[];
        y?: number | number[];
        rotate?: number | number[];
        rotateY?: number | number[];
        opacity?: number | number[];
        scale?: number | number[];
        transition?: { delay?: number; duration?: number; ease?: string };
    };
    transition?: { duration: number; ease: string; delay?: number; repeat?: number; repeatType?: string };
    exit?: {
        opacity: number;
        y: number;
        scale: number;
        rotateY?: number;
        transition?: { delay?: number; duration?: number; ease?: string };
    };
}

export interface WindAnimationConfig extends BasicAnimationConfig {
    animate: { x: number[]; y: number[]; rotate: number[] };
}

export interface Animations {
    wind: WindAnimationConfig;
    wind2: WindAnimationConfig;
    wind3: WindAnimationConfig;
    wind4: WindAnimationConfig;
    pop: BasicAnimationConfig;
    flip: BasicAnimationConfig;
    [key: string]: BasicAnimationConfig | WindAnimationConfig;
}

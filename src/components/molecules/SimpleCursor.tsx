import { type Component, onMount, onCleanup } from 'solid-js';
import { gsap } from 'gsap';

export const SimpleCursor: Component = () => {
    let cursorRef!: HTMLDivElement;
    let followerRef!: HTMLDivElement;
    let trailRefs: HTMLDivElement[] = [];

    onMount(() => {
        const mouse = { x: 0, y: 0 };
        const delayedMouse = { x: 0, y: 0 };
        let rafId: number;

        // Linear interpolation function
        const lerp = (start: number, end: number, factor: number) => {
            return start * (1 - factor) + end * factor;
        };

        // GSAP quickTo methods for better performance
        const cursorXSetter = gsap.quickTo(cursorRef, 'x', {
            duration: 0.1,
            ease: 'power3',
        });
        const cursorYSetter = gsap.quickTo(cursorRef, 'y', {
            duration: 0.1,
            ease: 'power3',
        });

        const followerXSetter = gsap.quickTo(followerRef, 'x', {
            duration: 0.8,
            ease: 'power3',
        });
        const followerYSetter = gsap.quickTo(followerRef, 'y', {
            duration: 0.8,
            ease: 'power3',
        });

        // Create splash trail particles
        const createSplashTrail = (x: number, y: number) => {
            // Limit trail creation based on mouse movement speed
            const speed = Math.sqrt((mouse.x - delayedMouse.x) ** 2 + (mouse.y - delayedMouse.y) ** 2);

            if (speed > 2 && trailRefs.length < 15) {
                const trail = document.createElement('div');
                trail.className = 'splash-trail';
                trail.style.cssText = `
                    position: fixed;
                    width: ${4 + Math.random() * 8}px;
                    height: ${4 + Math.random() * 8}px;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    transform: translate(-50%, -50%);
                    left: ${x + (Math.random() - 0.5) * 30}px;
                    top: ${y + (Math.random() - 0.5) * 30}px;
                `;

                document.body.appendChild(trail);
                trailRefs.push(trail);

                // Animate and remove trail
                gsap.to(trail, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.6 + Math.random() * 0.4,
                    ease: 'power2.out',
                    onComplete: () => {
                        if (document.body.contains(trail)) {
                            document.body.removeChild(trail);
                        }
                        const index = trailRefs.indexOf(trail);
                        if (index > -1) {
                            trailRefs.splice(index, 1);
                        }
                    },
                });
            }
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Update cursor immediately
            cursorXSetter(mouse.x);
            cursorYSetter(mouse.y);
        };

        // Animation loop for smooth follower movement
        const animate = () => {
            // Smooth interpolation for delayed mouse
            delayedMouse.x = lerp(delayedMouse.x, mouse.x, 0.075);
            delayedMouse.y = lerp(delayedMouse.y, mouse.y, 0.075);

            // Update follower position
            followerXSetter(delayedMouse.x);
            followerYSetter(delayedMouse.y);

            // Create splash trail effect
            createSplashTrail(delayedMouse.x, delayedMouse.y);

            rafId = requestAnimationFrame(animate);
        };

        // Initialize positions to center
        gsap.set([cursorRef, followerRef], {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });

        // Start animation loop
        animate();

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        onCleanup(() => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);

            // Clean up trail elements
            trailRefs.forEach((trail) => {
                if (document.body.contains(trail)) {
                    document.body.removeChild(trail);
                }
            });
            trailRefs = [];
        });
    });

    return (
        <>
            {/* Main cursor dot */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    width: '12px',
                    height: '12px',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    'border-radius': '50%',
                    'pointer-events': 'none',
                    'z-index': '9999',
                    'mix-blend-mode': 'difference',
                }}
            />

            {/* Follower circle */}
            <div
                ref={followerRef}
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(102, 126, 234, 0.5)',
                    'border-radius': '50%',
                    'pointer-events': 'none',
                    'z-index': '9998',
                    background: 'rgba(102, 126, 234, 0.1)',
                    'backdrop-filter': 'blur(4px)',
                }}
            />
        </>
    );
};

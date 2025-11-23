import {useRef} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

// Text hover effect
const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400},
}
const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 100, default: 100},
    title: {min: 400, max: 900, default: 400},
}

// Render text
const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span key={index}
              className={`font-georama font-bold text-4xl ${className} inline-block`}
              style={{ "--wght": baseWeight }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
};

// Setup text hover effect
const setupTextHover = (container, type) => {
    // Check if container exists or return empty function
    if (!container) return ()=> {};

    // Get all the letters
    const letters = container.querySelectorAll('span');
    const {min, max, default: base} = FONT_WEIGHTS[type];

    // Animate a letter
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            "--wght": weight,
        })
    }

    //
    const handleMouseMove = (e) => {
        // Get the mouse position relative to the container
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        // Calculate the distance from the mouse to each letter
        letters.forEach((letter, index) => {
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    // Reset all letters
    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, base, 0.3);
        });
    };

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

//
const Welcome = () => {
    // Refs
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        // Setup text hover effect
        const cleanupTitle = setupTextHover(titleRef.current, 'title');
        const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle');

        // Cleanup function
        return () => {
            cleanupTitle();
            cleanupSubtitle();
        };

    }, [])

    // Render
    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Jon-EL! Welcome to my.",
                    'text-3xl font-georama', 100)}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText("portfolio",
                    'text-9xl italic font-georama')}
            </h1>

            <div className="small-screen">
                <p> This is a desktop only experience. Please view on a desktop/tablet device only. </p>
            </div>
        </section>
    )
}

export default Welcome

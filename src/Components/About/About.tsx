import { useRef, useEffect } from 'react';
import './About.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import author from '/images/author_img.jpg';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(imageRef.current, 
            { x: -100, opacity: 0 },
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.5,
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        gsap.fromTo(textRef.current, 
            { x: 100, opacity: 0 },
            { 
                x: 0, 
                opacity: 1, 
                duration: 0.4,
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }, []);

    return (
        <div className='about' id='about'>
            <img 
                src={author}
                ref={imageRef}
                className='about__image' 
                alt="Author" 
            />
            <div className="about__description" ref={textRef}>
                <h2 className="about__description-position">
                    Frontend Developer
                </h2>
                <p className="about__description-text">
                    Oleg is a frontend developer with a razor-sharp focus on crafting robust, user-centric web applications. He transforms complex requirements into clean, scalable code. His meticulous approach to architecture and performance optimization has positioned him as a trusted partner for startups and tech teams tackling ambitious projects.
                    Beyond pixels, he thrives on solving technical puzzles—streamlining workflows, integrating APIs, and pushing the limits of modern browser capabilities.
                </p>
            </div>
        </div>
    )
}

export default About;
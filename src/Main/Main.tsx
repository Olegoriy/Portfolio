import './Main.scss';

const Main: React.FC = () => {
    return (
        <div className='main'>
            <ul className="main__list">
                <li className="main__list-item main__item">
                    <h1 className="main__item-title">OLEG KIBALIN</h1>
                </li>

                <li className="main__list-item">
                    <h2 className="main__item-subtitle">Portfolio ©2025</h2>
                </li>

                <li className="main__list-item">
                    <h3 className="main__item-position">Frontend Developer</h3>
                </li>

                <li className="main__list-item">
                    <a href="#about" className="main__item-scroll">
                        Scroll To Explore
                    </a>
                </li>
                <li className="main__list-item">
                    <img 
                        src="https://cdn.prod.website-files.com/615d64939fac622a8fc9824e/6642c344eeb0c1dc6298bc07_hero%20element%20bot%20left.svg" 
                        loading="lazy" 
                        alt="fill" 
                        className="main__image-full"
                    />
                </li>
            </ul>

            <img 
                src='/author_img.jpg' 
                className='main__image' 
                alt="Author" 
            />
        </div>
    );
};

export default Main;
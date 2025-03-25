import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img src="/logo.svg" alt="Logo" className="header__logo"/>
            <a 
                href="mailto:Appleoleg2005@mail.ru?subject=Hello from Portfolio&body=Hi there!%0D%0A%0D%0AI wanted to say..." 
                className="header__btn header__btn-mail"
                aria-label="Send email"
            >
            SAY HELLO
            </a>
        </header>
    )
}

export default Header;
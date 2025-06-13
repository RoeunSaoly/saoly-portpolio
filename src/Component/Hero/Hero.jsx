import './Hero.css'
import blue_bg from '../../assets/blue_bg.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={blue_bg} alt=""/>
            <h1><span>I'm Roeun Saoly,</span> frontend developer based in Cambodia.</h1>
            <p>I'm a student in year 2 of Information Technology Engineering at Royal University of Phnom Penh.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
            <a className="hero-resume"
                href="/Roeun_Saoly_Cv.pdf"
                rel="noopener noreferrer"
                download>My resume </a>
            </div>
        </div>
    )
}

export default Hero

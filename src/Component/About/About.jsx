import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'
import blue_bg from '../../assets/blue_bg.jpg'

const About = ()=>{
    return (
            <div id='about' className='about'>
                <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img src={blue_bg} width={500} alt="" />
                    </div>
                    <div className="about-right">
                        <div className='about-para'>
                            <p>When I study in my university in department Engineering, My professor assign me to
                                do project praticium link web e-commerce website, and more i was reasch something like 
                                designer skills, OOP and algorithm also. 
                            </p>
                            <p>In addition, in class room we need to learn some subject link database, java, and c++
                                programing also that it very important for basic of programmer. Not only that i have learn 
                                some network configure in time Data communication.</p>
                        </div>
                       <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML & CSS</p>
                                <hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Vue Js</p>
                                <hr style={{ width: "50%" }} />
                            </div>
                            <div className="about-skill">
                                <p>JavaScript</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                            <div className="about-skill">
                                <p>React Js</p>
                                <hr style={{ width: "50%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Photoshop</p>
                                <hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Figma</p>
                                <hr style={{ width: "50%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>90+</h1>
                            <p>PROJECT COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>15+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
            </div>
        )
}
export default About
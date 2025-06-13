import { useState, useRef } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import { Link as AnchorLink } from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
// import theme_pattern from '../../assets/theme_pattern.svg'
const Navbar = () =>{
    const [menu,setMenu] = useState("home");
    const menuRef = useRef(null);

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "0";
        }
    }
    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
        }
    }

    return(
        <div className='navbar'>
            <h1>SaoLY</h1>
            {/* <img src={theme_pattern} alt="" /> */}
            <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
                <li>
                  <AnchorLink
                    className='anchor-link'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("home")}
                  >
                    Home
                  </AnchorLink>
                  {menu==="home"?<img src={underline} alt=''/>:<></>}
                </li>
                <li>
                  <AnchorLink
                    className='anchor-link'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("about")}
                  >
                    About Me
                  </AnchorLink>
                  {menu==="about"?<img src={underline} alt=''/>:<></>}
                </li>
                <li>
                  <AnchorLink
                    className='anchor-link'
                    to='service'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("services")}
                  >
                    Services
                  </AnchorLink>
                  {menu==="services"?<img src={underline} alt=''/>:<></>}
                </li>
                <li>
                  <AnchorLink
                    className='anchor-link'
                    to='work'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("work")}
                  >
                    Portfolio
                  </AnchorLink>
                  {menu==="work"?<img src={underline} alt=''/>:<></>}
                </li>
                <li>
                  <AnchorLink
                    className='anchor-link'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => setMenu("contact")}
                  >
                    Contact
                  </AnchorLink>
                  {menu==="contact"?<img src={underline} alt=''/>:<></>}
                </li>
            </ul>
            <div className='nav-connect'>
              <AnchorLink
                className='anchor-link'
                to='contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact With Me
              </AnchorLink>
            </div>
        </div>
    )
}
export default Navbar
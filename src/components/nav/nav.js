import Logo from '../../resources/img/logo.svg'
import './nav.scss'

function Navigation() {
    return (
        <div className="nav">
                <div className='nav_right'>
                    <a href="#"> <img src={Logo}></img></a>
                    <a href="#"> Product </a>
                    <a href="#"> Use Cases </a>
                    <a href="#"> Developers </a>
                    <a href="#"> Pricing </a>
                    <a href="#"> About </a>
                </div>

                <div className='nav_left'>
                    <a href="#"> Login </a>
                    {/* button */}
                    <a href="#" className='GetAPIKeys' > Get API Keys </a> 
                </div>
        </div>
    );
}

export default Navigation;

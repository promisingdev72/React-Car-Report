import react from "react";
import logoImage from '../assets/logo/logo_white.svg';
const Footer = () => {
    return(
        <>
            <div className="footer d-flex justify-content-center align-items-center">
                <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={logoImage} width={140} height={100}></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="text-center">
                            Contact  |  Privacy disclaimer  |  Terms and Conditions  |  Have the car appraised
                        </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="text-center">
                            © 2022 | KENTEKEN inzicht
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
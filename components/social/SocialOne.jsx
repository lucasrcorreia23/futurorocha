import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {faFacebookF, faTwitter, faInstagram, faYoutube, faDribbble, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {dsnCN} from "../../hooks/helper";


const socialData = [
    {link: "http://linkedin.com/in/futuro-rocha-38a1692aa", icon: faLinkedin, name: "Lkd"},
    {link: "https://www.facebook.com/profile.php?id=100092284283133&mibextid=ZbWKwL", icon: faFacebookF, name: "Fb"},
    {link: "https://www.instagram.com/futurorocha?igsh=MWtqZnhtMTEycmcwbA==", icon: faInstagram, name: "Ig"},
    {link: "http://www.youtube.com/@futurorocha", icon: faYoutube, name: "Yt"},
    
];


function SocialOne({className="" , ...restProps}) {
    return (
        <div className={dsnCN("social-side social-network d-flex align-items-center" , className)} {...restProps}>
            <div className="icon" data-dsn="parallax">
                <FontAwesomeIcon icon={faShareAlt}/>
            </div>
            <ul className="socials d-flex flex-column p-absolute ">
                {socialData && socialData.map(($item, number) => <li key={number} style={{"--dsn-index-animate":socialData.length - number -1}}>
                    <a href={$item.link} target="_blank">
                        <FontAwesomeIcon icon={$item.icon}/>
                        <span>{$item.name}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    );
}


export default SocialOne;
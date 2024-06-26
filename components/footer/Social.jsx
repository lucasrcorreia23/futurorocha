import {dsnCN} from "../../hooks/helper";


const socialContent = [    
    {name: "Linkedin. ", href: "http://linkedin.com/in/futuro-rocha-38a1692aa"},
    {name: "Youtube. ", href: "http://www.youtube.com/@futurorocha"},
   
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
                <br/>
                <li data-dsn="parallax" className="over-hidden">
                <a href="">contato@futurorocha.com.br</a>
                </li>
                <li data-dsn="parallax" className="over-hidden">
                <a href="">Florianópolis - SC</a>
                </li>
            </ul>
        </div>
    );
}

export default Social;
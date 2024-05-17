import {dsnCN} from "../../hooks/helper";
import DsnGrid, {DsnGridProps} from "../../layout/DsnGrid";
import Image from "next/image";


const data = [
    {src: "/img/futurorocha/parceiros/1.png"},
    {src: "/img/futurorocha/parceiros/2.png"},
    {src: "/img/futurorocha/parceiros/3.png"},
    {src: "/img/futurorocha/parceiros/4.png"},
    {src: "/img/futurorocha/parceiros/5.png"},
    {src: "/img/futurorocha/parceiros/6.png"},
    {src: "/img/futurorocha/parceiros/1.png"},
    {src: "/img/futurorocha/parceiros/3.png"},
];


function BrandClient({className, ...retsProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN("brand-client wrapper-client", className)} {...retsProps}>


                {data && data.map(($item, $index) =>
                    <div className="logo-box" key={$index}>
                        <div className="logo-box-inner p-relative">
                            <Image src={$item?.src} alt={""} width={180} height={54}/>
                        </div>
                    </div>
                )}


        </DsnGrid>
    );
}

export default BrandClient;
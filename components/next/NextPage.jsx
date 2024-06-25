import {dsnCN} from "../../hooks/helper";
import Button from "../button/Button";
import BgDot from "../header/BgDot";

const NextContent = {
    title: "Descubra como a Futuro Rocha pode ajudar a sua marca!",
    subtitle: `VAMOS CONVERSAS`,
    buttonText: "Entre em contato!"
};

function NextPage({className, ...restProps}) {
    return (
        <section className={dsnCN("next-page p-relative d-flex align-items-center", className)}
                 {...restProps}
        >
            <BgDot/>
            <BgDot rightPosition/>
            <div className="container w-100">
                <div className="c-wrapper d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="sub-heading line-shape line-shape-after ">
                            <span className="line-bg-left">{NextContent.subtitle}</span>
                        </p>
                        <h2 className="section-title max-w750 mt-15">
                            {NextContent.title}
                        </h2>
                    </div>

                    <div className="button-box d-flex justify-content-end align-items-center">
                        <Button
                            href={"https://api.whatsapp.com/send?phone=554888405715"}
                            className="mr-15 line-head"
                            borderStyle={"border-color-heading-color"}
                            borderRadius
                            transitionPage={{title: NextContent.buttonText}}
                            target={"_blank"}
                        >
                            {NextContent.buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextPage;

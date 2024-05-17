import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            <b>2024 Futuro Rocha © Todos os direitos reservados</b>
                <p>
            Desenvolvido por <a href="https://www.estudionakama.com.br" target="_blank"> Estúdio Nákama</a>
        </p>
        </h5>
       
       
    );
}


export default Copyright;
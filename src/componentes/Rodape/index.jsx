import "./Rodape.css"

const Rodape = () => {
    return(
        <>
            <footer className="rodape">
                <img src="./public/imagens/fundo.png" alt="fundo" className="rodape__fundo"/>
                <div className="rodape__conteudos">
                    <div className="redes__sociais">
                        <a href="#"><img src="./public/imagens/fb.png" alt="facebook" /></a>
                        <a href="#"><img src="./public/imagens/tw.png" alt="twitter" /></a>
                        <a href="#"><img src="./public/imagens/ig.png" alt="instagram" /></a>
                    </div>
                    <div className="logo">
                        <img src="./public/imagens/logo.png" alt="logo organo" />
                    </div>
                    <div className="desenvolvedor">
                        <h6>Desenvolvido por Evandro</h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Rodape
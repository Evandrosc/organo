import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campo__texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto


// outra forma mesmo resultado

/* 
function CampoTexto() {
    return(
        <h1>teste2</h1>
    )
}

export default CampoTexto 
*/
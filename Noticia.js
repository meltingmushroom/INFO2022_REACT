function Noticia() {
    const noticia = {
        titulo: "Creación de una app con react",
        descripcion: "Aplicando los conceptos aprendidos en el Informatorio 2022"
    }
    const {titulo, descripcion} = noticia;

    return(
        <div className="my-class">
            <h1 className="my-title">{titulo}</h1>
        </div>
    )
}

export default Noticia;

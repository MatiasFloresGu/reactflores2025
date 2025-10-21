

export function Post_it({ postProps, eliminarPost }) {
    return (
        <li className="col-xs-12 post-it" >
            <div>
                <button onClick={() => eliminarPost(postProps.id)} className="close" ><i className="bi bi-trash3"></i></button>
                <h2>{postProps.titulo}</h2>
                <p>{postProps.descripcion}</p>

            </div>
        </li>
    )
}

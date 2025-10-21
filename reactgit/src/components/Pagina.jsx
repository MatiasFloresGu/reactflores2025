import React, { Fragment, use, useRef, useState } from "react";
import { Post_it } from "./Post_it";
import { v4 as uuid } from 'uuid';
import "bootstrap-icons/font/bootstrap-icons.css";

export function Pagina() {


    const [listadoPost_it, setPost_it] = useState([
        { id: uuid(), titulo: 'AC Origin', descripcion: 'Es un juego' },
        { id: uuid(), titulo: 'AC Origin', descripcion: 'Es un juego' }
    ]);



    const inputPostTitulo = useRef();
    const inputPostDescrip = useRef();

    const agregarPost = (e) => {
        const inputPostTituloText = inputPostTitulo.current.value;
        const inputPostDescripText = inputPostDescrip.current.value;

        if (!inputPostTituloText || !inputPostDescripText) return


        setPost_it((prevPost) => {
            const postNuevo = {
                id: uuid(),
                titulo: inputPostTituloText,
                descripcion: inputPostDescripText

            }
            inputPostTitulo.current.value = "";
            inputPostDescrip.current.value = "";
            return [...prevPost, postNuevo]
        });
    }


    const eliminarPost = (id) => {
        setPost_it((prevPost) => prevPost.filter((post) => post.id !== id));

    }


    return (
        <Fragment>
            <div>
                <h1 style={{ textAlign: "center" }}>Post it AMAZING!!!!</h1>

                <hr></hr>
                <div className="container-sm">
                    <div className="input-group">
                        <input ref={inputPostTitulo} type="text" className="form-control" placeholder="Ingrese Titulo..." />
                        <input ref={inputPostDescrip} type="text" className="form-control" placeholder="Ingrese Descripcion..." />
                        <button onClick={agregarPost} className="btn btn-success h-100"><i className="bi bi-search"></i></button>
                    </div>
                </div>

                <ul>
                    {listadoPost_it.map((postActual) => (
                        <Post_it
                            postProps={postActual}
                            key={postActual.id}
                            eliminarPost={eliminarPost}
                        ></Post_it>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}
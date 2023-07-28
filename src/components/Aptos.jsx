import React, { useState, useEffect } from 'react';
import BtnApto from './BtnApto';
import AddApto from './AddApto';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Aptos() {

  //INGRUMA
  let { ingruma } = useParams()
  console.log(ingruma);

  //Array con los apartamentos
  const [aptos,setAptos] = useState([]);

  //
  const [estadoDialog, setEstadoDialog] = useState(false);
  const mostrarAddApto = () => {
    setEstadoDialog(!estadoDialog);
  }

  function getAptos() {
    const options = {
      method: "POST"
    };
    let url = new URL("http://localhost:5000/"+ingruma);
    fetch(url, options) // se hace la consulta 
      .then(response => response.text()) // se obtiene el cuerpo de la respuesta
      .then(data => {
        const json = JSON.parse(data);// se pasa la respuesta de string json a objeto de javascript
        console.log(json);
        setAptos(json); // funcion del useState
      });
    }

    // se usa useEffect((),[]) sin parametros para solo hacer una vez la consulta a la BD, no se debe hacer cada vez que se renderice
    useEffect(() => {
      getAptos();
    }, []);

  return (
    <div className="App">
       {estadoDialog && <AddApto mostrarAddApto={mostrarAddApto} />}
      <h1>Redistribución</h1>
      <Link to='/productos' > 
        <button>Productos</button>
      </Link>
      <h2>Aptos</h2>
      <div>
        {
          (aptos === 0 ? (
            <p>Cargando ...</p> // en caso que no haya cargado 
            ) : (
            aptos.map((apto) => // se recorre el arreglo para mostrar los elementos
            (
                <BtnApto apto={apto} />
            )
            )
        ))

        }
      <div><button onClick={() => (mostrarAddApto())}>+</button></div>
      </div>
      <h2>Hacer redistribucion</h2>
      <Link to={{pathname: `/redistribution/${ingruma}`}}>
        <button>Redistribution</button>
      </Link>
    </div>
  );
}

export default Aptos;

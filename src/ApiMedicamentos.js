import React from 'react';

const obtenerInfoMedicamento = require("./library");

class Api extends React.Component {

    constructor(props){
        super(props);
        this.state={
            laboratorio: "",
            nombre: "",
            nregistro: "",
            pactivos: "",
            encontrado: true
        }
 
        this.handlerObtenerMedicamento = this.handlerObtenerMedicamento.bind(this);
        this.handlerObtenerNumeroRegistro = this.handlerObtenerNumeroRegistro.bind(this);
    }
   
        handlerObtenerNumeroRegistro(event){
            this.setState({nregistro: event.target.value + "%20ESP"});
        }

        handlerObtenerMedicamento(){
            obtenerInfoMedicamento(this.state.nregistro).then((info) => {
                this.setState({ encontrado: true,
                                laboratorio: "Laboratorio: "+info.labtitular,
                                nombre: "Medicamento: "+info.nombre,
                                nregistro: "Nro Registro: "+info.nregistro,
                                pactivos: "Principios Activos: "+info.pactivos,
                                })
             }).catch((err) => {
                this.setState({ 
                    encontrado: false
                });
            });
        }


        render(){
           
            if(this.state.encontrado === true){
                return (
                    <div> 
                        <div className="text-left">
                            <h2>{this.state.laboratorio}</h2>
                            <h2>{this.state.nombre}</h2>
                            <h2>{this.state.pactivos}</h2>
                        </div>
                        <div className="text-center">
                            <label for="uname">Escriba un Numero de Registro </label>
                            <input type="text" id="medicamentos" name="medicamentos" onChange={this.handlerObtenerNumeroRegistro}></input>
                            <button onClick={this.handlerObtenerMedicamento}>Apretar</button>
                            <p> Existen a partir del numero 1 al numero 3944</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <h1>Numero de Registro INVALIDO</h1>
                        
                        <div className="text-center">
                            <label for="uname">Escriba un Numero de Registro </label>
                            <input type="text" id="medicamentos" name="medicamentos" onChange={this.handlerObtenerNumeroRegistro}></input>
                            <button onClick={this.handlerObtenerMedicamento}>Apretar</button>
                            <p> Existen a partir del numero 1 al numero 3944</p>
                        </div>
                    </div>
                );
            }
        }
}

export default Api;

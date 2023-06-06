import React, { useState } from 'react'
import "./form.css";
import axios from 'axios';
const FormAddRotulos = (props) => {
    const [NomeDoAlimento, setNomeDoAlimento] = useState("");
    const [Rotulo, setRotulo] = useState("");
    const [inputDisable, setInputDisable] = useState(false);
    const cadastrarAlimento = (e) =>{
      if(NomeDoAlimento && Rotulo){
        e.preventDefault();
        function formatDateToBR(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
          }
          const currentDate = new Date();
          const DataDeAdicao = formatDateToBR(currentDate);
          //alert(NomeDoAlimento +" " + Rotulo)
        axios.put("https://oqueeissonomeurotulo.vercel.app/add",{
            NomeDoAlimento,
            Rotulo,
            DataDeAdicao
        }).then((response)=>{
            console.log(response);
            //setAlimentos(response?.data)
            setNomeDoAlimento("");
            setRotulo("")
            props.setUp();
            setInputDisable(false)
          }).catch((error) => {
            console.error(error);
          });
        return;
      }
      
      alert("Preencha os campos")
    }
    const deleteTable = ()=>{
        axios.put("https://apirotulo-mateusdata.vercel.app/delete").then((response)=>{
            console.log(response);
            //setAlimentos(response?.data)
            props.setUp();
          }).catch((error) => {
            console.error(error);
          });
    }
    return (
        <div className='mainRotulo'>
            <h1>Cadastro de alimentos</h1>
            <h2>Adicionar itens</h2>
            <form  className="container">
                <form className="form">
                    <div className="form-group">
                        <label >Nome do Alimento:</label>
                        <input onChange={(e)=> setNomeDoAlimento(e.target.value)} value={NomeDoAlimento} type="text" id="nomeAlimento" name="nomeAlimento" />
                    </div>
                    <div className="form-group">
                        <label >Rótulo:</label>
                        <input onChange={(e)=> setRotulo(e.target.value)} value={Rotulo} type="text" id="rotulo" name="rotulo" />
                    </div>
                    <div className="form-group">
                        <input  disabled={inputDisable} onClick={cadastrarAlimento} type="submit" value="Enviar" />
                    </div>
                </form>
            </form>
            <button onClick={deleteTable} className='buutonDelete'>limpar Tabela</button>
        </div>

    )
}
export default FormAddRotulos
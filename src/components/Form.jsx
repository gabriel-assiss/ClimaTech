
import { useState } from 'react'
function Form(){

    const[cidade, setCidade] = useState("");
    const [clima, setClima] = useState(null);

    const key = import.meta.env.VITE_OPENWEATHER_KEY;

    async function buscarClima(e){
        e.preventDefault();
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
   
        const resposta = await fetch (url);
        const dados = await resposta.json();
        console.log(dados);
        setClima(dados);
    }   

    

    return(
        
        <form id="form" onSubmit={buscarClima}>
            <h1 id="clima">Clima em Tempo Real</h1>
            <input value={cidade}  onChange={(e) => setCidade(e.target.value)}type="text" placeholder=" Coloque a sua Cidade:"/>
            <button type="submit">Ver Clima</button>
            {clima && (
                <div className="resultado">
                    <h2>{clima.name}</h2>
                    <p>Temperatura: {clima.main.temp}°C</p>
                    <p>Clima: {clima.weather[0].description}</p>
                </div>
            )}
        </form>
        
    )
}

export default Form;
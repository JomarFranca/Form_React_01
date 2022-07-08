/* eslint-disable linebreak-style */
import React, {useState} from 'react';

function App() {

	const [client, setClient] = useState();
	const [client2, setClient2] = useState();
	const [enviado, setEnviado] = useState(false);

	return (

		<>
			<h1>Cadastra-se</h1>
			<label>Nome:</label>
			<input type="text" 
				id="fname" 
				value={client} 
				onChange={(e) => setClient(e.target.value)} 
				placeholder="Digite um nome:"/>
			<label>Sobrenome:</label>
			<input type="text" 
				id="sname"
				value={client2}
				onChange={(e) => setClient2(e.target.value)} 
				placeholder="Digite um sobrenome:" />

			<button onClick={() => setEnviado(true)} >Enviar</button>
			<p>Nome:{enviado && client + ' ' + client2}</p>
		</>
	);
}

export default App;

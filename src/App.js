/* eslint-disable linebreak-style */
import React, {useState} from 'react';

function App() {

	const [client, setClient] = useState();
	const [client2, setClient2] = useState();
	const [mail, setMail] = useState();
	const [clientCpf, setClientCpf] = useState();

	const [enviado, setEnviado] = useState(false);

	return (

		<>
			<h1>Cadastra-se:</h1>
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
			<label>Email:</label>
			<input type="email"
				id="email"
				value={mail}
				onChange={(e) => setMail(e.target.value)}
				placeholder="Digite um email:" />
			<label>CPF:</label>
			<input type="number"
				id="cpf"
				value={clientCpf}
				onChange={(e) => setClientCpf(e.target.value)} 
				data-mask="999.999.999-99"
				required placeholder="000.000.000-00" />

			<button onClick={() => setEnviado(true)} >Enviar</button>
			<p>Nome: {enviado && client + ' ' + client2}</p>
			<p>E-mail: {enviado && mail}</p>
			<p>CPF: {enviado && clientCpf}</p>
			<p>Data de Nascimento: </p>
			<p>Login: </p>
			<p>Senha: </p>
		</>
	);
}

export default App;

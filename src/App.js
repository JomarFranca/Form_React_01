/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import './App.css';

function formCad() {

	const [client, setClient] = useState();
	const [client2, setClient2] = useState();
	const [mail, setMail] = useState();
	const [clientCpf, setClientCpf] = useState();
	const [data, setData] = useState();
	const [log, setLog] = useState();
	const [pass, setPass] = useState();


	const [enviado, setEnviado] = useState(false);

	return (

		<>
			<h1>Cadastra-se:</h1>
			<form className="formulario">
				<div>
					<label>Nome:</label>
					<input type="text" id="fname" value={client} 
						onChange={(e) => setClient(e.target.value)} 
						placeholder="Digite um nome:"/>
					<label>Sobrenome:</label>
					<input type="text" id="sname" value={client2}
						onChange={(e) => setClient2(e.target.value)} 
						placeholder="Digite um sobrenome:" /><br/>
				</div>
				<div>
					<label>Email:</label>
					<input type="email" id="email" value={mail}
						onChange={(e) => setMail(e.target.value)}
						placeholder="Digite um email:" />					
				</div>
				<div>
					<label>CPF:</label>
					<input type="text" id="cpf" value={clientCpf}
						onChange={(e) => setClientCpf(e.target.value)} maxLength="11" size="11"  
						data-mask="999.999.999-99" required placeholder="000.000.000-00"
						pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" />
					<label>Data de Nascimento:</label>
					<input type="text" id="data" value={data}
						onChange={(e) => setData(e.target.value)}
						placeholder="dd/mm/aaaa" />
				</div>
				<div>
					<label>Login:</label>
					<input type="text" id="usuario" value={log}
						onChange={(e) => setLog(e.target.value)}
						placeholder="Digite o Login:" />
					<label>Senha:</label>
					<input type="password" id="password" value={pass}
						onChange={(e) => setPass(e.target.value)}
						placeholder="Digite a Senha:" />
				</div>
				<button id="btn" className='btn' onClick={() => setEnviado(true)} >Enviar</button>
			</form>
			<br/><hr/>
			<h2>Resultado:</h2>
			<p>Nome: {enviado && client + ' ' + client2}</p>
			<p>E-mail: {enviado && mail}</p>
			<p>CPF: {enviado && clientCpf}</p>
			<p>Data de Nascimento: {enviado && data}</p>
			<p>Login: {enviado && log}</p>
			<p>Senha: {enviado && pass}</p>
		</>
	);
}

export default formCad;

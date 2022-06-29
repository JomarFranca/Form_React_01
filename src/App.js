/* eslint-disable linebreak-style */
import React, {useState} from 'react';

function App() {
	return (

		<form>
			<h1>Preencha o formulário</h1>
			<label>Nome:</label>
			<input type="text" id="fname" value="Digite seu nome:" />
			<button onClick="click()" id="btn">Enviar</button>
			{/* <input onClick="botao()" type="submit" name="btEnviar" id="btn" value="Enviar" /> */}
		</form>
	);
}

export default App;

import React, { useState } from 'react';

function Jogo() {
  const [nome, setNome] = useState('');

  const handleEnviar = () => {
    if (nome.trim()) {
      localStorage.setItem('nome', nome); // Salva o nome no localStorage
      alert('Nome salvo no localStorage!');
      
    } else {
      alert('Por favor, escreva seu nome antes de enviar.');
    }
  };

  return (
    <div>

      <h1>Bem-vindo ao jogo</h1>

      <div id="cadastro">
        <p>Qual é o seu nome?</p>
        <input type="text" name="nome" id="nome" placeholder="Escreva seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <button type="button" id="enviar" onClick={handleEnviar}>Enviar</button> 
      </div>

      <div id="bem-vindo">
          <h2>Bem-vindo, {localStorage.getItem('nome')}!</h2>
          <p>Estamos felizes em ter você aqui!</p>
        </div>
    </div>
  ); 
}

export default Jogo;

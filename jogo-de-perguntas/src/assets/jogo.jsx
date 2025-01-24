import React from 'react';

function Jogo() {
  return (
    <div>
      <h1>Bem vindo ao jogo</h1>
      <div id='cadastro'>
        <p>Qual é o seu nome ?</p>
        <input type="text" name="nome" id="nome" placeholder='Escreva seu nome' />
        <button type="submit" id='enviar'>Enviar</button>
      </div>
    </div>
  );
}

export default Jogo;

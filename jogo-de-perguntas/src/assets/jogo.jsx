import React, { useState } from 'react';

function Jogo() {
  const [nome, setNome] = useState(''); // Armazena o nome do usuário
  const [logado, setLogado] = useState(false); // Controla se o usuário enviou o nome
  const [respostas, setRespostas] = useState({}); // Armazena as respostas do usuário

  // Perguntas e alternativas
  const perguntas = [
    {
      id: 1,
      pergunta: 'Qual é a capital do Brasil?',
      alternativas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
      correta: 'Brasília',
    },
    {
      id: 2,
      pergunta: 'Qual é o maior planeta do Sistema Solar?',
      alternativas: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
      correta: 'Júpiter',
    },
  ];

  // Lida com a escolha de uma alternativa
  const handleResposta = (id, resposta) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: resposta,
    }));
  };

  // Verifica se as respostas estão corretas
  const verificarRespostas = () => {
    perguntas.forEach((pergunta) => {
      const resposta = respostas[pergunta.id];
      if (resposta === pergunta.correta) {
        alert(`Pergunta ${pergunta.id}: Correto!`);
      } else {
        alert(`Pergunta ${pergunta.id}: Errado. A resposta correta é "${pergunta.correta}".`);
      }
    });
  };

  const handleEnviar = () => {
    if (nome.trim()) {
      localStorage.setItem('nome', nome);
      setLogado(true);
    } else {
      alert('Por favor, escreva seu nome antes de enviar.');
    }
  };

  return (
    <div>
      <h1>Bem-vindo ao jogo</h1>

      {!logado ? (
        <div id="cadastro">
          <p>Qual é o seu nome?</p>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Escreva seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button type="button" id="enviar" onClick={handleEnviar}>
            Enviar
          </button>
        </div>
      ) : (
        <div id="quiz">
          <h2>Bem-vindo, {nome}!</h2>
          <p>Responda às perguntas abaixo:</p>
          {perguntas.map((pergunta) => (
            <div key={pergunta.id} className="pergunta">
              <p>{pergunta.pergunta}</p>
              {pergunta.alternativas.map((alternativa) => (
                <label key={alternativa}>
                  <input
                    type="radio"
                    name={`pergunta-${pergunta.id}`}
                    value={alternativa}
                    onChange={() => handleResposta(pergunta.id, alternativa)}
                  />
                  {alternativa}
                </label>
              ))}
            </div>
          ))}
          <button type="button" onClick={verificarRespostas}>
            Verificar Respostas
          </button>
        </div>
      )}
    </div>
  );
}

export default Jogo;

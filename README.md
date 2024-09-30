# Chatbot Interface - RN SEDEC

Este é um projeto de interface simples de chat, utilizando simulação de respostas automáticas estilo ChatGPT, desenvolvido para a Secretaria de Desenvolvimento Econômico (SEDEC) do Rio Grande do Norte.

## Descrição

O projeto consiste em uma interface de usuário para simulação de interações com o ChatGPT. A interface permite ao usuário digitar mensagens e receber respostas simuladas. Foi criado usando HTML, CSS e JavaScript puro.

### Funcionalidades

- Interface simples de chat para interações entre o usuário e um bot.
- Simulação de respostas automáticas com base na entrada do usuário.
- Estilo customizado com a logo da SEDEC, destacada no topo da interface.

## Estrutura do Projeto

- **index.html**: Estrutura HTML da interface de chat.
- **app.js**: Lógica JavaScript responsável por controlar o fluxo de mensagens e simular a resposta do bot.
- **Logo Sedec -.jpeg**: Logotipo da SEDEC usado no cabeçalho da interface.

## Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador web.

### Pré-requisitos

Nenhum pré-requisito específico é necessário, apenas um navegador atualizado que suporte HTML5 e JavaScript.

## Capturas de Tela

![Logo SEDEC](Logo%20Sedec%20-.jpeg)
*Exemplo de como a logo aparece na interface.*

## Exemplo de Código

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            
            // Simula uma resposta do ChatGPT
            const response = await simulateChatGPTResponse(message);
            addMessage('bot', response);
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function simulateChatGPTResponse(message) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Resposta simulada do ChatGPT para: "${message}"`;
    }
});


### Explicação:
1. **Descrição**: Expliquei o objetivo do projeto e suas funcionalidades.
2. **Estrutura do Projeto**: Detalhei os arquivos principais fornecidos (HTML, JS, e a logo).
3. **Como Executar**: Simples passos para rodar o projeto localmente.
4. **Exemplo de Código**: Incluí um trecho de código chave do arquivo `app.js`&#8203;:contentReference[oaicite:0]{index=0}.
5. **Imagem**: Fiz referência à logo fornecida no cabeçalho do arquivo `index.html`&#8203;:contentReference[oaicite:1]{index=1}.

Esse modelo pode ser ajustado conforme necessário para adicionar mais detalhes ou funcionalidades futuras!


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
        // Simula um atraso de resposta
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Resposta simulada do ChatGPT para: "${message}"`;
    }
});
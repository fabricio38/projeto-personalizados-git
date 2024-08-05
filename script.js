document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar o código para processar o formulário, como enviar os dados para um servidor
});

document.getElementById('chatbot-send').addEventListener('click', function() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        addMessage('Você', message);
        input.value = '';
        respondToMessage(message);
    }
});

function addMessage(sender, text) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    messageContainer.innerHTML = `<strong>${sender}:</strong> ${text}`;
    document.getElementById('chatbot-messages').appendChild(messageContainer);
}

function respondToMessage(message) {
    let response = '';

    if (message.toLowerCase().includes('preço')) {
        response = 'Os preços das nossas caixas variam de acordo com o tamanho e a personalização. Entre em contato para mais detalhes!';
    } else if (message.toLowerCase().includes('entrega')) {
        response = 'Fazemos entregas em todo o Brasil. O prazo de entrega depende da sua localização.';
    } else if (message.toLowerCase().includes('personalização')) {
        response = 'Podemos personalizar as caixas conforme suas necessidades. Fale conosco para saber mais!';
    } else {
        response = 'Desculpe, não entendi sua pergunta. Pode reformular?';
    }

    setTimeout(() => addMessage('Chatbot', response), 1000);
}

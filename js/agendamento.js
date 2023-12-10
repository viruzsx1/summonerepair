function agendar() {
    var nome = document.getElementById('name').value
    var cpf = document.getElementById('cpf').value
    var data = document.getElementById('date').value
    var concerto = document.getElementById('eletro').value

    var formatdata = new Date(data).toLocaleDateString();

    var msg = 'Os dados do seu agendamento são: <br>' +
        'Nome: ' + nome + '<br>' +
        'CPF: ' + cpf + '<br>' +
        'Dia: ' + formatdata + '<br>' +
        'Hora: 12:00<br>' +
        'Concerto: ' + concerto;

    document.getElementById('confirma').innerHTML = msg;

    
}

function fecharModal() {
    // Fechar o modal
    document.getElementById('myModal').style.display = 'none';
}

function confirmar() {
    // Lógica para confirmação
    alert('Agendamento confirmado!');
    
}

function recusar() {
    // Lógica para recusa
    alert('Agendamento recusado!');
    

}

function mostrarbut(){
    var conteudodiv = document.getElementById('butoesconfir');
    conteudodiv.style.display = 'block'
}
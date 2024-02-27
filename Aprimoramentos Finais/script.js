
function atualizarNome() {
    let nome = prompt("Qual é o seu nome?");
    let sobre = prompt('Fale sobre voce');
    let mail = prompt('Digite seu e-mail');
    let tel = prompt('Digite seu telefone');
    let endereço = prompt('Digite seu endereço');

    

    if (nome !== null) {
        document.getElementById('nomeUsuario').textContent = nome;
    }

    if (sobre !== null) {
        document.getElementById('sobreMim').textContent = sobre;

    }

    if (mail !== null) {
        document.getElementById('email').textContent = 'Email:'+  mail;

    }
    if (tel !== null) {
        document.getElementById('telefone').textContent ='Telefone:' + tel;

    }
    if (endereço !== null) {
        document.getElementById('local').textContent = 'endereço:' + endereço;

    }
    
    
}

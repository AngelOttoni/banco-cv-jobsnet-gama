'use strict';

const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}


const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);


// Conexão entre Back-Front

const New_form = () => {
    // let form = {
    //     "nome": "Giovanni Tiago Iago Pires",
    //     "dataNasc": "25\/07\/1953",
    //     "genero": "Masculino",
    //     "civil": "Casado(a)",
    //     "rg": "31.132.121-5",
    //     "cpf": "817.235.788-51",
    //     "cep": "78089-718",
    //     "endereco": "Rua 7",
    //     "numero": "519",
    //     "complemento": "",
    //     "bairro": "Santa Terezinha (2ª Etapa)",
    //     "cidade": "Cuiabá",
    //     "uf": "MT",
    //     "celular": "(65) 99947-7151",
    //     "email": "ggiovannitiagoiagopires@roche.com",
    //     "linkedin": "",
    //     "profissao": "professor",
    //     "cargo": "professor de geografia"
    // }
    
    let form = {
        nome: document.getElementById('nome').value,
        dataNasc: document.getElementById('dataNasc').value,
        genero: document.getElementById('genero').value,
        civil: document.getElementById('civil').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        profissao: document.getElementById('profissao').value,
        cargo: document.getElementById('cargo').value,
    };
    console.log(form);
    return form
}

const createCandidate = async (candidate) => {
    const requisicao = await fetch('http://localhost:8081/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(New_form())
    });
    if (requisicao.status === 200) {
        alert('Seu cadastro foi finalizado com sucesso!');
    }

    if (requisicao.status === 400) {
        alert('Não foi possível realizar seu cadastro!');
    }
}

function check_form() {
    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('dataNasc').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value.mata;
    let profissao = document.getElementById('profissao').value;    
    let cargo = document.getElementById('cargo').value;

    if (nome == "" || dataNasc == "" || cpf == "" || cep == ""|| endereco == "" || bairro == "" || cidade == "" || uf == "" || celular == "" ||
        email == false || profissao == "" || cargo == "") {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        createCandidate();
        alert('Verificando cadastro...');
    }
}
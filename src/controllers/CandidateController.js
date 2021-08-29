const Candidate = require('../models/candidate');


module.exports = {
    async register(req, res) {

        const { nome, dataNasc, genero, civil, rg, cpf, cep, endereco, numero, complemento, 
                bairro, cidade, uf, celular, email, linkedin, profissao, cargo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.dataNasc = dataNasc;
        newCandidate.genero = genero;
        newCandidate.civil = civil;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.linkedin = linkedin;
        newCandidate.profissao = profissao;
        newCandidate.cargo = cargo;
        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(400).send('Erro ao cadastrar!');
            }

            return res.status(200).send(savedCandidate);
        });
    },

};
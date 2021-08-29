const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    dataNasc: { type: String, unique: false, required: true},
    genero: { type: String, unique: false, required: false},
    civil: { type: String, unique: false, required: false},
    rg: { type: String, unique: false, required: false},
    cpf: { type: String, unique: true, required: true},
    cep: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: false},
    numero: { type: String, unique: false, required: false},
    complemento: { type: String, unique: false, required: false},
    bairro: { type: String, unique: false, required: false},
    cidade: { type: String, unique: false, required: false},
    uf: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true },
    linkedin: { type: String, unique: false, required: false},
    profissao: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
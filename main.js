function Candidato (nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
}

function Funcionario (nome, cargo, salario, mesContratacao, anoContratacao) {
    Candidato.call(this, nome, cargo);
    this.salario = salario;
    this.mesContratacao = mesContratacao;
    this.anoContratacao = anoContratacao
}

function FuncionarioPromovido (nome, cargo, salario, mesContratacao, anoContratacao, novoCargo, novoSalario, mesPromocao, anoPromocao) {
    Funcionario.call(this, nome, cargo, salario, mesContratacao, anoContratacao);
    this.novoCargo = novoCargo;
    this.novoSalario = novoSalario;
    this.mesPromocao = mesPromocao;
    this.anoPromocao = anoPromocao
}

const candidato25 = new Candidato ('Janaina', 'auxiliar financeiro')
const novoFuncionario1 = new Funcionario ('João', 'vendedor', 2200, "Fevereiro", 2022);
const funcionario3Promovido = new FuncionarioPromovido ('Patricia', 'auxiliar financeiro', 2000, 'Agosto', 2018, 'supervisora financeiro', 3200, 'Julho', 2021);
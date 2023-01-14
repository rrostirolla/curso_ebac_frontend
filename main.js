let alunos = [
    {
        nome: 'Igor',
        nota: 7,
    },
    {
        nome: 'Melissa',
        nota: 9,
    },
    {
        nome: 'João',
        nota: 8,
    },
    {
        nome: 'Fabiano',
        nota: 5,
    },
    {
        nome: 'Tais',
        nota: 6,
    },
    {
        nome: 'Mery',
        nota: 4,
    },
    {
        nome: 'Diuli',
        nota: 2,
    },
    {
        nome: 'Messias',
        nota: 10,
    },
];

function alunosAprovados(alunos) {
    const alunosNotaMaisDeSeis = alunos.filter(alunos => alunos.nota >= 6);
    return alunosNotaMaisDeSeis
};

console.log(alunosAprovados (alunos));

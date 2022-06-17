interface ps{
    nome: string,
    idade: number,
    profissao: Profissao,
}

enum Profissao{
    Atriz,
    Padeiro,
}

let pessoa1: ps ={
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz,
}

let pessoa2: ps ={
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
}

let pessoa3: ps ={
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz,
}

let pessoa4: ps ={
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
}

console.log(pessoa1);
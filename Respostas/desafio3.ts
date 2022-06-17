let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;
let saldo: number = 0;

campoSaldo.innerHTML = String(saldo);

function somarAoSaldo(soma: number) {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
}

function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = String(saldo);
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

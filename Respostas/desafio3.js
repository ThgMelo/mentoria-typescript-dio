"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
campoSaldo.innerHTML = String(saldo);
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = String(saldo);
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

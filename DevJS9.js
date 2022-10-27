var banco = {
    conta: 1050, 
    saldo: 100, 
    tipo: "Conta-corrente", 
    agencia: 283,
    buscarsaldo: function() {
        console.log('Seu saldo é de:', banco.saldo, "reais.")
    },
    deposito: function(valor) {
        banco.saldo = banco.saldo + valor
    },
    saque: function(valor) {
        banco.saldo = banco.saldo - valor
    },    
    numconta: function() {
        console.log('O número da sua conta é:', banco.conta, ".")
    },
};


banco.buscarsaldo();
banco.deposito(500);
banco.buscarsaldo();
banco.saque(200);
banco.buscarsaldo();
banco.numconta();

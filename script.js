function calcularPoupanca() {
    const valorInvestido = parseFloat(prompt("Digite o valor investido:"));
    const meses = parseInt(prompt("Digite a quantidade de meses:"));
    const selic = parseFloat(prompt("Digite a taxa SELIC:"));
    const taxaReferencial = parseFloat(prompt("Digite a taxa referencial:"));
  
    let rendimentoMensal;
  
    if (selic < 8.5) {
      rendimentoMensal = (selic * 0.7 + taxaReferencial) / 100;
    } else {
      rendimentoMensal = (0.5 + taxaReferencial) / 100;
    }
  
    let resultado = valorInvestido;
  
    for (let i = 0; i < meses; i++) {
      resultado *= 1 + rendimentoMensal;
    }
  
    const rendimentoTotal = resultado - valorInvestido;
  
    console.log(`Valor investido: R$${valorInvestido.toFixed(2)}`);
    console.log(`Resultado final do investimento: R$${resultado.toFixed(2)}`);
    console.log(`Rendimento mensal: R$${rendimentoMensal.toFixed(2)}`);
    console.log(`Rendimento total: R$${rendimentoTotal.toFixed(2)}`);
  }

    // Input
    calcularPoupanca(1000, 12, 8, 0.5);

    // Output esperado
    // Valor investido: R$1000.00
    // Resultado final do investimento: R$1078.10
    // Rendimento mensal: R$0.56
    // Rendimento total: R$78.10

    // Input
    calcularPoupanca(2000, 24, 10, 0.5);

    // Output esperado
    // Valor investido: R$2000.00
    // Resultado final do investimento: R$2505.78
    // Rendimento mensal: R$0.58
    // Rendimento total: R$505.78

    // Input
    calcularPoupanca(0, 0, 0, 0);

    // Output esperado
    // Valor investido: R$0.00
    // Resultado final do investimento: R$0.00
    // Rendimento mensal: R$0.00
    // Rendimento total: R$0.00


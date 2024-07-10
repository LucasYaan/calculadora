// function somar(x, y) {
//     return x + y;
// }

// let result = somar;
// alert (result);

// function subt(x, y) {
//     return x - y;
// }

// result = subt(5, 6)
// alert (result);








var tela = document.getElementById('tela');
var valuesReceived = [];
var operation = ''

function operacao(parametroRecebidoDoHtml){
  const operators = ['+', '-', '/','X','='];
  let isOperator = operators.includes(parametroRecebidoDoHtml);
  valuesReceived.push(parametroRecebidoDoHtml)
  if(isOperator){
    limparTela()
    // CRIAR UMA CHAMADA PARA CADA OPERACAO
    switch(parametroRecebidoDoHtml) {
      case '=':
        // identificar o operador e chamar a função correta

        if(valuesReceived[1] === "+"){
        let dadoRetornadoDaFuncao = somar()
        tela.value = dadoRetornadoDaFuncao;
          valuesReceived = []
          limparTela()
        } 
      
      break;
      default:
      console.log(parametroRecebidoDoHtml)
      break;
    }

  }else{
    tela.value = tela.value + parametroRecebidoDoHtml
  }
}

function somar() {
  let result = valuesReceived[0] + valuesReceived[2];
  return result
}

function limparTela() {
  tela.value = '';
}

function adicionar(param) {
  params.push(param)
  tela.value = tela.value + param
}
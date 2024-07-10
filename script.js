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
    tela.value = '';
    // CRIAR UMA CHAMADA PARA CADA OPERACAO
    switch(paramn) {
      case '=':
        // identificar o operador e chamar a função correta

        if(val === "+"){
          let result = somar(val1, val2);
        } else if(val === "-") {
          let result = subtrair(val1, val2);
        } else if(val === "/") {
          let result = dividir(val1, val2);
        } else if(val === "X") {
          let result = multiplicar(val1, val2)
        }
      
      break;
      
      case '-':
        subtrair(val1,val2)
      break;
      default
      
  }else{
    tela.value = tela.value + parametroRecebidoDoHtml
  }
}

function adicionar(param) {
  params.push(param)
  tela.value = tela.value + param
}

console.log(params);
// Jogo Adivinhação
var numero = Math.floor(Math.random() * 11);
console.log("numero" + numero);

function jogoAdivinha() {
  var resp = parseInt(document.getElementById("numero").value);

  if (resp == numero) {
    alert("PARÁBENS, VOCÊ ACERTOU!!!");
  } else {
    alert("VOCÊ ERROU, TENTE NOVAMENTE");
  }
}
// ano bissexto

function anoBissexto() {
  var ano = parseInt(document.getElementById("ano").value);
  let resultado = document.getElementById("resultado");

  if (ano % 4 == 0 && !ano % 100 == 0) {
    resultado.textContent = ("O ano é bissexto");
  } else {
    resultado.textContent = ("O ano não é bissexto");
  }
}

// media escolar

function Media() {
  var prova1 = parseInt(document.getElementById("nota1").value);
  var prova2 = parseInt(document.getElementById("nota2").value);
  var prova3 = parseInt(document.getElementById("nota3").value);
  var prova4 = parseInt(document.getElementById("nota4").value);
  var resultado = document.getElementById("resultado");

  var media = (prova1 + prova2 + prova3 + prova4) / 4;


  if (media >= 7) {
    alert('aluno Aprovado ' + media);
  } else if (media >= 5 && media < 7) {
    alert('aluno em recuperação ' + media);
  } else {
    alert('aluno reprovado ' + media);
  }
}
//textContent

// calculo gorjeta

function CalcGorjeta() {
  var valorRef = parseInt(document.getElementById("preco").value);
  var seletor = document.getElementById("select").value;



  if (seletor == "Bom") {
    let precoFinal = valorRef * 1.10;
    alert('A conta deu R$' + precoFinal.toFixed(2) + ' reais')

  } else if (seletor == "Otimo") {
    let precoFinal = valorRef * 1.15;
    alert('A conta deu R$' + precoFinal.toFixed(2) + ' reais')

  } else if (seletor == "Excelente") {
    let precoFinal = valorRef * 1.20;
    alert('A conta deu R$' + precoFinal.toFixed(2) + ' reais')

  } else {
    alert('A conta deu R$' + valorRef.toFixed(2) + ' reais')
  }

}
// Saudacao
function Saudacao() {
  const data = new Date();
  let hora = data.getHours();
  var resultado = document.getElementById("resultado");

  if (hora >= 0 && hora <= 12) {
    resultado.textContent = ("Bom dia !!");
    document.body.style.backgroundImage = "url('../CSS/imagens/fundoDia.jpg')";
         document.getElementById("resultado").style.color = "#046D12";
       document.getElementById("h1").style.color = "#046D12";
  } else if (hora >= 13 && hora <= 18) {
    resultado.textContent = ("Boa tarde !!");
    document.body.style.backgroundImage = "url('../CSS/imagens/fundoTarde.jpg')"; 
  } else {
    resultado.textContent = ("Boa noite !!");
    document.body.style.backgroundImage = "url('../CSS/imagens/fundoNoite.jpg')";
     document.getElementById("resultado").style.color = "#fff"
       document.getElementById("h1").style.color = "#fff"
  }



}

// Classificação de Filmes
function Filmes() {
  let idade = parseInt(document.getElementById("idade").value);
  let recomendacao = document.getElementById("recomendacao");

  switch (true) {
    case (idade > 0 && idade < 13):
      recomendacao.textContent = ("Animação ou Aventura");
      break;

    case (idade > 12 && idade < 18):
      recomendacao.textContent = ("Ação o Drama");
      break;

    case (idade > 17 && idade < 65):
      recomendacao.textContent = ("Comédia ou Suspense");
      break;

    default:
      recomendacao.textContent = ("Romance ou Documentário");
      break;
  }

}
// Calculadora de Frete

function frete() {

  var pesoProd = parseFloat(document.getElementById("peso").value);
  var seletor = document.getElementById("regiao").value;


  switch (true) {

    case (seletor==='sudeste'):
      alert ('Não há frete.')
      break;

    case (seletor==='nordeste'):
      alert ('Não há frete.')
      break;

    case (seletor==='norte' && pesoProd > 5):
      alert ('Frete de R$25,00')
      break;

    case 'sul':
      case (seletor==='sul' && pesoProd > 5):
      alert ('Frete de R$20,00')
      break;

    case (seletor==='centro-oeste' && pesoProd > 5):
      alert ('Frete de R$22,00')
      break;
      
    case (seletor==='norte' && pesoProd <= 5):
      alert ('Frete de R$15,00')
      break;
      
    case (seletor==='sul' && pesoProd <= 5):
      alert ('Frete de R$10,00')
      break;

    case (seletor==='centro-oeste' && pesoProd <= 5):
      alert ('Frete de R$12,00')
      break;

  }



}

// Calculadora de Pontuação de Jogo

function pontua() {

  let ponto = parseInt(document.getElementById("pontos").value);
  let voltar = document.getElementById("voltar");

  switch (true) {

    case (ponto >= 0 && ponto <= 199):
      voltar.textContent = ("Iniciante")
      break;

    case (ponto >= 200 && ponto <= 499):
      voltar.textContent = ("Intermediario")
      break;

    case (ponto >= 500 && ponto <= 999):
      voltar.textContent = ("Avançado")
      break;

    case (ponto >= 1000):
      voltar.textContent = ("Mestre")
      break;

  }

}

// Validação de Senha


function VerifSenha() {
  let senha = document.getElementById("senha").value;
  let resposta = document.getElementById("resposta");
 

  switch (true) {
    
    case (senha.length < 8 ):
      console.log(senha);
      resposta.textContent = ("Senha precisa ser maior que 8 caracteres");
      document.getElementById("resposta").style.color = "#f70404";
      break;
      case (senha.length > 8 && senha.length > 16 ):
        console.log(senha);
      resposta.textContent = ("Senha precisa ser menor que 16 caracteres");
      document.getElementById("resposta").style.color = "#f70404";
        break;
        case (senha.length > 8 && senha.length < 16 && !/[@#$%&*]/.test(senha)):
          console.log(senha);
      resposta.textContent = ("Senha precisa ter no minimo um caracter especial");
      document.getElementById("resposta").style.color = "#f70404";
          break;
          case (senha.length > 8 && senha.length < 16 && /[@#$%&*]/.test(senha) && !/[A-Z]/.test(senha) ):
            console.log(senha);
            resposta.textContent = ("Senha precisa ter no minimo uma letra maiuscula");
            document.getElementById("resposta").style.color = "#f70404";
            break;
            case (senha.length > 8 && senha.length < 16 && /[@#$%&*]/.test(senha) && /[A-Z]/.test(senha) && !/[1-9]/.test(senha)):
              console.log(senha);
                resposta.textContent = ("Senha precisa ter pelo menos um numero");
                document.getElementById("resposta").style.color = "#f70404";
              break;
              case (senha.length > 8 && senha.length < 16 && /[@#$%&*]/.test(senha) && /[A-Z]/.test(senha) && /[1-9]/.test(senha)):
                console.log(senha);
                  resposta.textContent = ("Senha Valida");
                  document.getElementById("resposta").style.color = "51f704";
                break;
    default:
      resposta.textContent = ("deu problema, tente novamente");
      break;
  }
}



// Recomendações de Roupas
function clima() {
  let clima = parseInt(document.getElementById("clima").value);
  let recomendacao = document.getElementById("recomendacao");

  switch (true) {
    case (clima < 15):
      recomendacao.textContent = ("Casaco, Luvas");
      break;

    case (clima >= 15 && clima <= 25):
      recomendacao.textContent = ("Jaqueta, Cachecol");
      break;

    case (clima > 25 && clima < 40):
      recomendacao.textContent = ("Camiseta, Chapéu");
      break;

    default:
      recomendacao.textContent = ("Melhor rezar porque o fim do mundo tá chegando!");
      break;
  }

}

// Conversor de Moeda

function ConverterMoeda() {
  var valor = parseFloat(document.getElementById("valor").value);
  var seletor = document.getElementById("select").value;
  let resultado = document.getElementById("resultado");

  switch (seletor) {
    case "USD":
      var convertido = valor / 5;
      resultado.textContent = ('A conversão fica ' + convertido.toFixed(2) + ' dolares');
      break;
    case "EUR":
      var convertido = valor / 5.5;
      resultado.textContent = ('A conversão fica ' + convertido.toFixed(2) + ' Euros');
      break;
    case "GBP":
      var convertido = valor / 6;
      resultado.textContent = ('A conversão fica ' + convertido.toFixed(2) + ' Libras Esterlinas');
      break;
  }
}

// Desafio adivinhação
var adivinha = Math.floor(Math.random() * 101);
console.log(adivinha);
function Desafio(){
  let numero = document.getElementById("numero").value;
 

    do {
      if(numero == adivinha){
        alert("parabens!!");
        break;
      }else if(numero > adivinha){
        alert("Um pouco menos, tente novamente");
        break;
      } else{
        alert("um pouco mais, tente novamente");
        break;
      }
    
    } while (numero !== adivinha );


};

/* to tentando fazer sozinho*/
 


//eu também
const certo = Math.floor(Math.random() * 101)

function ad(){
  let numero =document.getElementById("numero").value;

do{
  if(certo == numero){
    texto.textContent = 'Parabéns! Você acertou!'
    }
    
  else if(certo < numero){
    texto.textContent = 'O número é menor! Tente novamente!'
  }
  
  else{
    texto.textContent = 'O número é maior! Tente novamente!'
  }
  
} while(numero !== adivinha);
}
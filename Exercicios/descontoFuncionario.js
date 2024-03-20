// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).





//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto
const valorCompra = parseFloat(prompt("Qual o valor da compra"))
let pergunta = parseInt(prompt("Digite qual tipo de cliente voce é:\n 1- Cliente 2- Funcionario \n 3 - Vip "))

switch (pergunta) {

    case 1:

        alert("Voce e um cliente infelizmente, voce nao possui desconto")
        alert(`O valor total da compra é de:${valorCompra}`)

        break

    case 2:

    alert ("Voce é um funcionario, Parabens tem direito a 10% de desconto")
    Desconto = (10/100)*valorCompra;
    alert (`o valor total da sua compra é de ${Funcionario} voce tera R$ ${Desconto}`)
        
        break
    case 3:
        alert ("Voce é um Vip, Parabens tem direito a 5% de desconto")
        Desconto = (5/100)*valorCompra;
        alert (`o valor total da sua compra é de ${Vip} voce tera R$ ${Desconto}`)
        
    break
    default:
         (" Erro so executar o programa: tente novamente")
         break
        
}
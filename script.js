
let number_one= Number(prompt('digite o primeiro número'))
let number_two= Number(prompt('digite o segundo número'))

let sum= number_one + number_two
let sub= number_one - number_two
let mult= number_one * number_two
let divi= number_one / number_two
let rest_divi= number_one % number_two

alert("A soma dos dois números é: "+ sum)
alert("A subtracão dos dois números é: "+sub)
alert("A multiplicacão dos dois números é: "+mult)
alert("A divisão dos dois números é: "+divi)
alert("O resto da divisão dos dois números é: "+rest_divi)

if (sum % 2 ==0 ) {
    alert("0 número é par")
   }
   else{
   alert("o número é impar")
   }
if (number_one != number_two){
  alert("Os número são diferentes ")
}
else (
alert("Os números são iguais")
)

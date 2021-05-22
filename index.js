

// Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    nome: "Douglas",
    idade: 26,
    altura: 1.63,
}
console.log(eu)


// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.time = "Flamengo"
console.log(eu)

// Remova uma propriedade desse objeto.

delete eu.altura
console.log(eu)

//Mostre no console todas as propriedades desse objeto.

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
{
    nome:"Douglas",
    idade: 26,
    telefone: 2111111111,
    amigos: ["Lucas", "Ivan", "Matheus", "Felipe","Naiara"],
},

{
    nome:"Alex",
    idade: 32,
    telefone: 2122222222,
    amigos: ["Ivan","Douglas","Felipe","Matheus","Felipe"],
},

{
    nome:"Ivan",
    idade: 29,
    telefone: 2133333333,
    amigos: ["Douglas","Naiara","Iara","Alex","Matheus"],
},

{
    nome:"Lucas",
    idade: 28,
    telefone: 2144444444,
    amigos: ["Matheus","Douglas","Ulisses","Naiara","Felipe"],
},

{
    nome:"Naiara",
    idade: 24,
    telefone: 2155555555,
    amigos: ["Douglas","Ulisses","Ivan","Bianca","Guaranai"],
},

]
console.log(cadastro)

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0],cadastro[1].amigos[1],cadastro[2].amigos[2],cadastro[3].amigos[3],cadastro[4].amigos[4])
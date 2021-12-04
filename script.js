//entradas

const nomeCliente = document.getElementById("nome");
const tel = document.getElementById("telefone");
const email = document.getElementById("email");
const come = document.getElementById("comentarios");
const lista = document.getElementById("lista");

//saidas
const retornarNome = document.getElementById("retornoNome");
const retornarTel = document.getElementById("retornoTel");
const retornarEmail = document.getElementById("retornoEmail");
const retornarCome = document.getElementById("retornoCome");
// botao
const botao = document.querySelector(".btn");
// criando função

const tarefa = (evento)=>{
    evento.preventDefault();
    const valorCliente = nomeCliente.value;
    retornarNome.innerText = valorCliente;
    retornarTel.innerHTML = tel.value;
    retornarEmail.innerHTML = email.value;
    retornarCome.innerHTML = come.value;


//criando elementos
    // const criarLista = document.createElement("li");
    // const ListaValor = `<h1>${retornarNome}</h1>`;
    // criarLista.innerHTML = ListaValor
    // lista.appendChild(criarLista)


    
}

 botao.addEventListener("click", tarefa)

// const botaoDeleta = ()=>{

// }



// //evento de click
// botaoDeleta.addEventListener("click", deleta)













//teste de objeto

function Armazenar(){
    
        this.nome= "nome",
        this.tel= 1,
        this.email="email",
        this.comentario= "comentario"

    }
// const adicionar = addEventListener("click", ()=>{
// const cliente = nomeCliente.Value;
// cliente = new Armazenar();
// cliente.tel = tel;
// cliente.email = email;
// cliente.comentario = come.Value;

// console.log(cliente)
// })





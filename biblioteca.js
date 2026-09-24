import promptSync from 'prompt-sync';
const prompt = promptSync();

const livros = []
let opcao
let livro = {
    titulo: "",
    autor: "",
    genero: ""
}

function cadastrarLivro(livro){
    livro.titulo = prompt("Título do livro: ")
    livro.autor = prompt("Autor: ")
    livro.genero = prompt("Gênero: ")
    livros.push(livro)
    console.log("Livro cadastrado com sucesso!")
    console.log(livros)
}

do{
    console.log("=== Biblioteca Pessoal ===");
    console.log("1. Cadastrar livro");
    console.log("2. Listar livros");
    console.log("3. Atualizar status de leitura");
    console.log("4. Remover livro");
    console.log("0. Sair");
    opcao = prompt("Escolha uma opção: ")
    switch(opcao){
        case "1":
            console.log("====")
            console.log("1. Insira as informações do livro a ser cadastrado:")
            cadastrarLivro(livro)
            break
        case "2":
            console.log("====")
            console.log("2. Livros cadastrados")
            break
        case "3":
            console.log("====")
            console.log("3. Atualizar status de leitura")
            break
        case "4":
            console.log("====")
            console.log("4. Remover livro")
            break
        case "0":
            console.log("====")
            console.log("Saíndo do sistema...Até logo!")
            break
        default:
            console.log("Digite uma opção válida")
    }
}while(opcao !== "0")
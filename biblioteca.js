import promptSync from 'prompt-sync';
const prompt = promptSync();

let opcao
let livros = []

function cadastrarLivro(){
    const livro = {
        titulo: prompt("Título do livro: "),
        autor: prompt("Autor: "),
        genero: prompt("Gênero: "),
        status: "[quero ler]"
    }

    livros.push(livro)

    console.log("Livro cadastrado com sucesso!")
}

function listarLivros(livros){
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado até agora");
    } else {
        for(let i = 0; i < livros.length; i++){
            let livro = livros[i]

            console.log(`${i + 1}. ${livro.status} ${livro.titulo} - ${livro.autor} - ${livro.genero}`)
        }
    }
}

do{
    console.log("--- Biblioteca Pessoal ---");
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
            cadastrarLivro()
            console.log("====")
            break
        case "2":
            console.log("====")
            listarLivros(livros)
            console.log("====")
            break
        case "3":
            console.log("====")
            console.log("3. Atualizar status de leitura")
            console.log("====")
            break
        case "4":
            console.log("====")
            console.log("4. Remover livro")
            console.log("====")
            break
        case "0":
            console.log("====")
            console.log("Saíndo do sistema...Até logo!")
            console.log("====")
            break
        default:
            console.log("====")
            console.log("Digite uma opção válida")
            console.log("====")
    }
}while(opcao !== "0")
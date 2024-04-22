// CRIANDO CLASSE LIVROS
class livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

// CRIANDO OBJETOS DA CLASSE LIVROS
let livros = []
livros.push(new livro("livro1", "marcos", "editora A", 2001))
livros.push(new livro("livro2", "marcos", "editora F", 1997))
livros.push(new livro("livro3", "Carlos", "editora F", 2010))
livros.push(new livro("livro4", "João", "editora A", 2005))
livros.push(new livro("livro5", "Fábio", "editora C", 2020))

// CRIANDO CLASSE BIBLIOTECA
class Biblioteca {
    Nome 
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarlivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }

}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2")

biblioteca.BuscarlivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")
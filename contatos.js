

// funções puras, não dependem de outras informações de fora para funcionar (tag, tabela etc...)
async function lerContatos() {

     const url = "https://bakcend-fecaf-render.onrender.com/contatos"

     const response = await fetch(url)
    
     const contatos = await response.json()
     
     console.log(contatos)

     return contatos

}

async function criarContato(contato) {
    
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        //Transformando o objeto em uma string
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    
    console.log(response.ok)
    return response.ok

}

async function deletarContato(id) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "DELETE"
    }
    
    const response = await fetch(url, options)

    return response.ok

}

async function atualizarContato(id, contato) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos${id}`
    
    const options = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        //Transformando o objeto em uma string
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    
    console.log(response.ok)
    return response.ok

}

const novoContato = {
    "nome": "Julia",
    "celular": "11 9 7171-6562",
    "foto": "none.jpg",
    "email": "julia@gmail.com",
    "endereco": "Av. ilha, 4",
    "cidade": "Londrina"
  }




lerContatos()

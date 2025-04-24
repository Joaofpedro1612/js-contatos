'use strict'

export async function getContatos(){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContatosPorNome(nome){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function  postContato(infoContact) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoContact)
    }

    const response = await fetch(url, options)
    return response.ok
}

async function  putContato(id, infoContact) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options ={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoContact)
    }

    const response = await fetch(url, options)
    return response.ok

}

async function deleteContatos(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options ={
        method: 'DELETE',
    }
    
    const response = await fetch(url, options)
    return response.ok
}

const novoContato = {
    "nome": "joao maciel",
    "celular": "11 9 777-666",
    "foto": "joao.png",
    "email": "joao@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "carapicuiba"
}
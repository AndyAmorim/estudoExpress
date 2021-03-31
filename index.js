const {response} = require ('express');
const express = require('express');
const {v4:uuidv4}= require('uuid');
const app = express();
app.use(express.json());
const projects = [];

/*
            GET: BUSCAR INFORMAÇOES DO BACK END
            POST: CRIAR UMA INFORMACAO NO BACK END
            PUT/PATCH ALTERAR UAMA INFORMAÇAO NO BACK END


            Query árams:  vamos usar principalmente para filtros e paginaçao
            Route Params: Identificar recursos na hora de atualizar ou deletar
            Request Params


*/
// console.log(app)

app.get('/projects',(request,response)=>{
    // const query = request.query;
    // console.log(query)
    // const { title, owner} = request.query
    // console.log(title)
    // console.log(owner)

   return response.json(projects)
})

app.post('/projects',(request,response)=>{
    const {title, owner } = request.body;

    const project = {id: uuidv4(), title, owner}

    projects.push(project) // esse push vai jogar a criaçao do nosso projeto para o nosso array
    
    return response.json(project) // sempre retornar o projeto recem criado e nunca exibir a lista completa
 })

 app.put('/projects/:id',(request,response)=>{
    const params = request.params
    console.log(params)

    return response.json([
         'Projeto 50',
         'Projeto 2',
         'Projeto 3',
         'Projeto 4',
         'Projeto 5',
     ])
 })

 app.delete('/projects/:id',(request,response)=>{
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ])
})

// app.listen(3000,()=>{
//     console.log('Servidor Rodando.')
// })
app.listen(3000)
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
    const {id} = request.params
    const {title, owner } = request.body;


    //aqui usamos o findindex para percorrer todo array atrás do id
    //caso ela seja satisfeita e retornar true, ela vai me retornar o id q estou passando
    const projectIndex = projects.findIndex(project => project.id ===id )
    if (projectIndex < 0){
        return response.status(400).json ({error : "Projeto nao foi encontrado"})
    }

    //agora tenho indice vou criar uma nova informação do projeto
    const project = {
        id,
        title,
        owner,
    }
    projects[projectIndex]= project
    
    return response.json(project)
 })

 app.delete('/projects/:id',(request,response)=>{
    const {id} = request.params

    const projectIndex = projects.findIndex(project => project.id ===id )
    
    if (projectIndex < 0){
        return response.status(400).json ({error : "Projeto nao foi encontrado"})
    }

    projects.splice(projectIndex,1)
    
    return response.status(204).send()
})

// app.listen(3000,()=>{
//     console.log('Servidor Rodando.')
// })
app.listen(3000)
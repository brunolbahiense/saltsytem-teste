const User = require('../users')
const fs = require('fs/promises')

const postForm = async (req, res) =>{
    const { 
        name,
        email,
        stack,
        gender,
        info,
        age
    } = req.body
    
    const usuario = new User({
        name,
        email,
        stack,
        gender,
        info,
        age
    })

    const fileJSON = await fs.readFile('users.json')
    const userJSON = JSON.parse(fileJSON)

    
    userJSON.push(usuario)

    const usersJSON = JSON.stringify(userJSON)
    await fs.writeFile('users.json', usersJSON) 


    const save = await usuario.save()
    return res.json(save)
}

module.exports ={
    postForm,
}
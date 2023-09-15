const express = require('express')

const app =express()

app.get ('/', (req, res)=>{
    res.json({
        status: 200,
        messsage: "Hello world!"
    })
})

app.listen(8080, () =>{
    console.log("server is running on port 8080")
})
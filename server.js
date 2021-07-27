const { Socket } = require('dgram')
const express = require('express')
const app = express()
const http = require('http').createServer(app)




const PORT =process.env.PORT || 3000



http.listen(PORT,()=>{
    console.log(`Listing on port : ${PORT}`)

})

// we use middle ware funtioin  because your  css  file not working 
app.use(express.static(__dirname +'/public'))



app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/index.html')
})

//socket programing
const io  =require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('connected.....')
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})


/* back tick lga kr javaScrip k variable ka use kr sk tha hu */
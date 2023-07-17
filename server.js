const express=require("express")
const cors=require("cors")
const corsOptions={
    origin:"https://localhost/8081"
}
const app=express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db=require("./models/index")
db.sequelize.sync()
.then(()=>{
    console.log("Synced db")
})

require("./routes/turorial.routes")(app)

app.listen(8080,()=>{
    console.log("Server running ")
})
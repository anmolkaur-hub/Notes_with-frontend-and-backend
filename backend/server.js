require('dotenv').config()
const app=require('./src/app')



const connectToDB=require('./src/config/database')

connectToDB()





console.log(app)


app.listen(3000,()=>{
    console.log("server is running")
})
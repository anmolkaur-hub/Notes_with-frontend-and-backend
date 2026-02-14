require('dotenv').config()
const mongoose=require("mongoose")


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Conneected to DB")
    })
     .catch((error) => {
        console.log("DB Connection Error:", error.message)
    })
}

console.log(process.env.MONGO_URI)



module.exports=connectToDB
const express=require("express")
const app=express()
const dotEnv=require('dotenv')
const mongoose=require("mongoose")
const vendorRoutes=require("./routes/vendorRoutes")
const bodyParser=require("body-parser")
const firmRoutes=require('./routes/firmRoutes')
const firm=require('./models/Firm')
const productRoutes=require('./routes/productRoutes')
const path=require('path')
const cors=require('cors')


const port=process.env.port || 4000



dotEnv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully")
}).catch((error)=>{
    console.log(error)
})
app.use(bodyParser.json())
app.use("/vendor",vendorRoutes)
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.use('/uploads',express.static('uploads'))
app.listen(port,()=>{
    console.log(`Server started and running at ${port}`)
})

app.use('/',(req,res)=>{
res.send("<h1> Welcomee</h1>")
})
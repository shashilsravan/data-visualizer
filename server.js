const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

app.use(fileUpload({
    createParentPath: true
}))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))

app.post("/file", async (req, res) => {
    try {
        if (!req.files){
            res.send({
                status: false, message: "No files"
            })
        }
        else{
            const {file} = req.files
            file.mv("./src/uploads/user" + file.name)
            res.send({
                status: true, message: "File uploaded", 
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

const port = 5000
app.listen(port, () => {
    console.log("Server is running");
})
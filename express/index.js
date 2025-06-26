import 'dotenv/config';
import express from "express";  

const app = express();
const port = 8000 || process.env.PORT; // this is used run on 8000 or on the port 
// any data which comes from front end is being parsed into  json using this line here.
app.use(express.json());

let teaData = [];
let nextid = 1;

// add a new tea
// majourity of the time  you have to save data one uses post route
app.post("/teas",(req,res) => {
    const {name,price} = req.body; // here desturturing is being done here
    const newtea = {
        id: nextid++,
        name,
        price
    }
    teaData.push(newtea);
    res.status(201).json(newtea);
})
// get all teas
app.get("/teas" , (req,res) => {
    res.status(200).send(teaData);
})
// get tea with unique id
// what ever comes after slash teas will be considered as id
// if anything comes in the body we accept it as request.body.id 
// bur suppose after teas we are sending any info and it is an id we accept it as req.params.id
// anything which comes from the url is in string format it should be converted into int using parseInt.
app.get("/teas/:id" , (req,res) => { // get a tea with an respective id code
    const tea = teaData.find(t => t.id == parseInt(req.params.id));
    if(!tea){
        return res.status(404).send("Tea not found");
    }
    res.status(200).send(tea);
})
app.get("/" , (req,res) => {
    res.send("Hello World Chud gye guru");
})
app.get("/ice-tea" , (req,res) => {
    res.send("Thanks for ordering ice tea, its really hot");
})
// update  tea
app.put("teas/:id" , (req,res) => {
    const tea = teaData.find(t => t.id == parseInt(req.params.id));
    if(!tea){
        return res.status(404).send("Tea not found");
    }
    const {name,price} = req.body; // here it is sending the data which we have to update for the respective tea.
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea);  
})
app.listen(port, () => {
    console.log(`Server running at  ${port}`);
}); 
// delete tea
app.delete("/teas/:id" , (req,res) => {
    const tea = teaData.find(t => t.id == parseInt(req.params.id));
    if(!tea){
        return res.status(404).send("Tea not found");
    }
    // filtering we remove the tea which matches the id here.
    teaData = teaData.filter(t => t.id != parseInt(req.params.id));
    res.status(200).send("Tea deleted");
});



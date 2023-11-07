const express = require('express');
const student = require("./models/studentModule");
const faculty = require('./models/faculty');
const app = express();
const PORT = 5000;


require('./db')
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!.........");

});
app.get("/students", (req, res) => {
    res.send("Hello from students");

});
app.get("/Boss", (req, res) => {
    res.send("Hai Boss");

});
app.post('/student', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const createstudent = new student(data);
        await createstudent.save();
        res.send("student created")
    } catch (error) {
        console.log("Error", error);
    }


});
app.get('/student', async (req, res) => {
    try {
        const studentList = await student.find();
        res.send(studentList);

    } catch (error) {
        console.log(error);
    }
});
// update a student
app.put("/student/:id",async(req,res) =>{
    try{
        const studentId =req.params.id;
        await student.updateOne ({id:studentId},{$set:req.body});
        res.send("Student Created")
    }catch(error){
        console.log(error);
    }
});
app.delete("/student/:id",async(req,res)=>{
    try{
        await student.deleteOne({ id:req.params.id});
        res.send("student deleted")
    }catch(error){
        console.log(error);
    }
});


//  create a resource
// app.post()
app.post('/faculty', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const createfaculty = new faculty(data);
        await createfaculty.save();
        res.send("faculty created")
    } catch (error) {
        console.log("Error", error);
    }
});
app.get('/faculty', async (req, res) => {
    try {
        const facultyList = await faculty.find();
        res.send(facultyList);

    } catch (error) {
        console.log(error);
    }
});
app.put("/faculty/:id",async(req,res) =>{
    try{
        const facultyId =req.params.id;
        await faculty.updateOne ({id:facultyId},{$set:req.body});
        res.send("faculty Created")
    }catch(error){
        console.log(error);
    }
});
app.delete("/faculty/:id",async(req,res)=>{
    try{
        await faculty.deleteOne({ id:req.params.id});
        res.send("faculty deleted")
    }catch(error){
        console.log(error);
    }
});


app.listen(PORT, function () {
    console.log(`server is running on localhost:${PORT}`);
});
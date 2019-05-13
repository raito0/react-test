const express=require('express');
const app=express();
const PORT=4000;
const cors=require('cors');
const mysql=require('mysql');
const SelectAllPerson='SELECT * FROM Persons';

const connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "huy",
    password: "123",
    database:'helloworlddb',
  });
  connection.connect((err) => {
    if (err) throw err;
  });
app.use(cors());
app.get('/',(req,res)=>{
    connection.query(SelectAllPerson, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:results
            })
        }
    });
});
app.post('/create', (req,res)=>{
    const {name, address} = req.query;
    const Insert_person = `INSERT INTO Persons (name, address) VALUE ('${name}', '${address}')`;
    connection.query(Insert_person, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('success')
        }
    });
});
app.post('/update',(req,res)=>{
    const {id, name, address}=req.query;
    const UpdatePerson = `UPDATE Persons SET name ='${name}', address='${address}' WHERE ID=${id}`;
    connection.query(UpdatePerson, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('success')
        }
    });
});
app.post('/delete',(req,res)=>{
    const {id}=req.query;
    const DeletePerson = `DELETE FROM Persons WHERE ID=${id}`;
    connection.query(DeletePerson, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('success')
        }
    });
});
app.listen(PORT, ()=>{
    console.log('Server is running on Port', PORT);
});
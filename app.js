const express =require("express");
const bp=require('body-parser');
const app=express();
const date=require(__dirname + "/date.js");
// console.log(date());

app.set("view engine","ejs");
app.use(bp.urlencoded({extended:true})) 
app.use(express.static("public"))

let items=[];
let workitems=[];

let port=100; 

app.listen(process.env.PORT||port,function(req,res){
    console.log('server is running on port ' +port);
})


app.get('/',function(req,res){
    // res.send("hey there");
    
    // switch(today){
    //     case 0: 
    //         day="sunday";
    //     break;
    //     case 1:
    //         day="monday";
    //     break;
    //     case 2:
    //         day="tuesday";
    //     break;
    //     case 3:
    //         day="wednesday";
    //     break;
    //     case 4:
    //         day="thursday";
    //     break;
    //     case 5:
    //         day="friday";
    //     break;
    //     case 6:
    //         day="saturday";
    //     break;
    // var options={
    //     weekday:"long"

    // }}
    let day=date.getDate();
    res.render("list",{listtitle:day,newlistitems:items});
})
app.get('/work',function (req,res) {
    res.render("list",{listtitle:"work List",newlistitems:workitems});
  })
app.get('/household',function (req,res) {
    res.render("list",{listtitle:"Household List",newlistitems:workitems});
  })
app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    let item = req.body.newitem;
    console.log(item)
    console.log(req.body.List)
    if(req.body.List==="work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect('/');
    }
})





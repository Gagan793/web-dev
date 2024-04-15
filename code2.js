const express = require("express");
const app = express();
const users = [{
    name: "Gagan",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const Johnkid = users[0].kidneys;
    //console.log(Johnkid);
    const numofkid = Johnkid.length;
    let numofhealthykid = 0;
    let  numunhealthykid=0;;
    
    for (let i = 0; i < Johnkid.length; i++) {
      // console.log(Johnkid[i].healthy)
        if (Johnkid[i].healthy) {
          
            numofhealthykid = numofhealthykid + 1;
        }
    }
        numunhealthykid =numofkid-numofhealthykid;
    res.json({
        msg: "hey there",
        numofhealthykid: numofhealthykid,
        numofkid,
        numunhealthykid

    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    });
});

app.put("/", function(req, res) {
  let atleastunhealthykid = false;
  
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "All kidneys are now healthy!"
    }); // Sending a response back to the client
});
//remove all unhealthy kidney
app.delete("/",function(req,res){
  const newkid =[];
  for(let i=0;i<users[0].kidneys.length;i++)
  {
    if(users[0].kidneys[i].healthy)
    {
      newkid.push({healthy:true})
    }
  }
  users[0].kidneys=newkid;
  res.json({msg:"done"}  )
})

app.listen(4000, function() {
    console.log("Server Started");
});

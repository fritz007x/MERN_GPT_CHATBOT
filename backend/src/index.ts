// import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";

//conection and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
.then(()=>{
    app.listen(PORT,()=>console.log("Server open & Connected to Database"));

})
.catch((err)=>console.log(err));

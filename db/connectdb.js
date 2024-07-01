import mongoose from "mongoose";
/*mongoose.connect("mongodb://localhost:2701/test").then(()
 => {
    console.log('connectin successfully..')
}) 
app.listen(port, () =>{
    console.log('server listening at http://localhost:${port}')
})*/


 const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "school",
         };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connected successfully.");
    } catch (err){
        console.log(err);
    }
};

export default connectDB;
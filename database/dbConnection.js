import mongoose from "mongoose";
export const dbConnection = () => {
  const URL=`mongodb+srv://newuser20:test321@cluster0.brtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  mongoose
    .connect(URL,{
      dbName: "NGO_Database",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To Database: ", error);
    });
};



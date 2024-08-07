import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://mithileshporate21:CqyIESH6Uu3PwLW5@cluster0.brtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "NGO_Database",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To Database: ", error);
    });
};



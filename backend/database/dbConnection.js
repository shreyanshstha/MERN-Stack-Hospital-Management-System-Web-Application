import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://shrestha246810:epZmOZddu0sjChD8@cluster0.drppbyz.mongodb.net/', {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};

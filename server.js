// import app from "./index.js";


// app.listen(process.env.PORT, () => {
//   console.log(`Server Listening At Port ${process.env.PORT}`);
// });


import app from "./index.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Listening At Port ${PORT}`);
});

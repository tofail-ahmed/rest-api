require('dotenv').config();
const app = require("./app");
const port=process.env.PORT||2023;
app.listen(port,()=>{
      console.log(`server listening on http://localhost:${port}`)
});

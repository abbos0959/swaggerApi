require("dotenv").config();
const app = require("./middleware/app");
const sequelize = require("./config/db");
const colors = require("colors");
const PORT = process.env.PORT || 5000;





const start = async () => {
   try {
      await sequelize.authenticate();
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold.underline));
   } catch (e) {
      console.log(e);
   }
};

start();

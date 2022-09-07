require("dotenv").config();
const express = require("express");

const swaggerjsdock = require("swagger-jsdoc");

const bookRouter = require("../router/book");
const swaggerUiExpress = require("swagger-ui-express");

const options = {
    apis: ["swagger/*.js"],
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Book Store API",
        version: "1.0.0",
        description: "kitob api",
      },
      servers: [{ url: "http://localhost:5000/api/v1" }],
    },
  };

const jsDock = swaggerjsdock(options);

const app = express();
app.use("/swagger", swaggerUiExpress.serve, swaggerUiExpress.setup(jsDock));
app.use(express.json());
app.use("/api/v1", bookRouter);

module.exports = app;

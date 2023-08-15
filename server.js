const { createServer } = require("http");
const next = require("next");

const app = next({
  // this tells our application to look at the global environment variable called node enviornment and look to see if it set to the string production, if it is then means that our application must must be running in production node
  dev: process.env.NODE_ENV !== "production",
});

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

// set app to a specific port
app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log("Ready on localhost:3000");
  });
});

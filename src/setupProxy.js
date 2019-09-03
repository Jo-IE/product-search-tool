const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/display-products", "/search-products"], {
      target: "http://localhost:5000"
    })
  );
};

var appRouter = function(app, fs) {

  // To prevent Access Control Origin error
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  // Fake endpoint for gift listing
  app.get("/gift", function(req, res) {

    // Read in sample gift data
    var giftFile = fs.readFileSync(__dirname + '/gift-data.json', 'utf8');
    var obj = JSON.parse(giftFile);
    res.json(obj);

  });

  // Fake endpoint for individual gift
  app.get("/gift/:id", function(req, res) {

    var response;

    if(req.params.id < 1 || req.params.id > 6 || isNaN(req.params.id)) {
      response = { "status": "error" };
    } else {

      // Read in sample gift data
      var giftFile = fs.readFileSync(__dirname + '/gift-data.json', 'utf8');
      var obj = JSON.parse(giftFile);
      obj.status = "success";
      response = obj.gifts[req.params.id - 1];
    }

    res.json(response);

  });

}

module.exports = appRouter;

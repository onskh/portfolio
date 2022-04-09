const res = require("express/lib/response");
var db = require("../database-mysql");
var selectProjects = function (req, res) {
  db.query("SELECT * FROM projects", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};
var AddProject = function (req, res) {
  let params = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };
  var query = `INSERT INTO projects SET ?`;
  db.query(query, params, (err, project) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(project);
      console.log( '-------->',project);
    }
  });
};
var selectAll = function (req, res) {
  db.query("SELECT * FROM items", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAllM = function (req, res) {
  db.query("SELECT * FROM contact", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var deleteOne = function (req, res) {
  let params = req.params.id
  var query =`DELETE FROM contact WHERE id='${params}'`
 db.query(query,(err,data)=>{
   err?res.status(500).send(err):res.status(200).send(data)
 })
}
var insert = function (req, res) {
  let params = {
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
  };
  var query = `INSERT INTO contact SET ?`;
  db.query(query, params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log("hello", data);
    }
  });
};

module.exports = { insert, selectAll, selectAllM ,AddProject ,selectProjects ,deleteOne};
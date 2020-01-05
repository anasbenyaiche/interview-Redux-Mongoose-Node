const express = require("express");
const router = express.Router();

const User = require("../models/Users");

router.post("/", function(req, res, next) {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.get("/", function(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.get("/:id", function(req, res, next) {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.put("/:id", function(req, res, next) {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  )
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.delete("/:id", function(req, res, next) {
    User.findByIdAndDelete(req.params.id)
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });

module.exports = router;

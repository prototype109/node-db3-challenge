const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

function findSteps(id) {
  return db("schemes as sc")
    .join("steps as s", "sc.id", "=", "s.scheme_id")
    .where("sc.id", id)
    .orderBy("s.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where("id", id);
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}

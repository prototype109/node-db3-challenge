const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

function findSteps(id) {
  return db
    .select("scheme_name", "instructions")
    .from("schemes as sc")
    .join("steps as s", "sc.id", "=", "s.scheme_id")
    .where("sc.id", id)
    .orderBy("s.step_number");
}

const distributor = require('../db_apis/distributor.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await distributor.find(context);
 
    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
 
    const success = await distributor.delete(id);
 
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}


async function Create(req, res, next) {
  try{

    const data = req.body;

    const success = await distributor.Create(data);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

async function Edit(req, res, next) {
  try{

    const data = req.body;

    const success = await distributor.Edit(data);

    if (success) {
      res.status(204).end();
    } 
    else {
      res.status(404).end();
    }
  } 
  catch (err) {
    next(err);
  }
}

module.exports.Create = Create;
module.exports.Edit = Edit;


module.exports.delete = del;

module.exports.get = get;
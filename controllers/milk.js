const milk = require('../db_apis/milk.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await milk.find(context);
 
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
    const id = (req.params.id);
 
    const success = await milk.delete(id);
 
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

    const success = await milk.Create(data);

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

    const success = await milk.Edit(data);

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
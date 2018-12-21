const database = require('../services/database.js');
 
 
async function find(context) {
  let query = 'select * from provider1';
  const binds = {};
 
  if (context.id) {
    binds.PID = context.id;
 
    query += `\nwhere PID = :PID`;
  }
 
  const result = await database.simpleExecute(query, binds);

  const resResult={
    queryResult:result.rows,
    queryUsed:query
  }
 
  return resResult;
}

// async function findByName(context) {
//   let query = 'select * from provider1';
//   const binds = {};
 
//   if (context.name) {
//     binds.Name = context.name;
 
//     query += `\nwhere name = :name`;
//   }
 
//   const result = await database.simpleExecute(query, binds);
 
//   return result.rows;
// }

async function Create(data){
  console.log(data);
  const createSql = "insert into provider1 values('"+data.PID+"','"+data.Name+"','"+data.DOB+"','"+data.Address+"','"+data.Contact_no+"','"+data.Aadhar_card+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update provider1 "+
  "SET NAME = '"+data.Name+"',"+
  "DOB = '"+data.DOB+"',"+
  "ADDRESS = '"+data.Address+"',"+
  "CONTACT_NO = '"+data.Contact_no+"',"+
  "AADHAR_CARD = '"+data.Aadhar_card+"' where PID = '"+data.PID+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}
 
async function del(id) {
  const deleteSql ='delete from provider1 where PID = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}

module.exports.Create = Create;
module.exports.Edit = Edit;
module.exports.delete = del;

module.exports.find = find;
// module.exports.findByName=findByName;


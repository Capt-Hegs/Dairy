const database = require('../services/database.js');
 
const baseQuery = 'select DID "DID", Name "Name", DOB "DOB", Address "Address", Contact_no "Contact_no", Aadhar_card "Aadhar_card" from distributor1;'

async function find(context) {
  let query = "select * from distributor1";
  const binds = {};
 
  if (context.id) {
    binds.DID = context.id;
 
    query += `\nwhere DID = :DID`;
  }
 
  const result = await database.simpleExecute(query, binds);

  const resResult={
    queryResult:result.rows,
    queryUsed:query
  }
 
  return resResult;
}

async function del(id) {
  const deleteSql ='delete from distributor1 where DID = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}

async function Create(data){
  console.log(data);
  const createSql = "insert into distributor1 values('"+data.DID+"','"+data.Name+"','"+data.DOB+"','"+data.Address+"','"+data.Contact_no+"','"+data.Aadhar_card+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update distributor1 "+
  "SET NAME = '"+data.Name+"',"+
  "DOB = '"+data.DOB+"',"+
  "ADDRESS = '"+data.Address+"',"+
  "CONTACT_NO = '"+data.Contact_no+"',"+
  "AADHAR_CARD = '"+data.Aadhar_card+"' where DID = '"+data.DID+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}

module.exports.Create = Create;
module.exports.Edit = Edit;

module.exports.delete = del;
module.exports.find = find;
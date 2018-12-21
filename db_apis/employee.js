const database = require('../services/database.js');
 
const baseQuery = 'select EID "EID", Name "Name", DOB "DOB", Address "Address", Contact_no "Contact_no", Aadhar_card "Aadhar_card", Position "Position", Salary "Salary" from employee1;'

async function find(context) {
  let query = "select * from employee1";
  const binds = {};
 
  if (context.id) {
    binds.EID = context.id;
 
    query += `\nwhere EID = :EID`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}

async function del(id) {
  const deleteSql ='delete from employee1 where EID = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}

async function Create(data){
  console.log(data);
  const createSql = "insert into employee1 values('"+data.EID+"','"+data.Name+"','"+data.DOB+"','"+data.Address+"','"+data.Contact_no+"','"+data.Aadhar_card+"','"+data.Position+"','"+data.Salary+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update employee1 "+
  "SET NAME = '"+data.Name+"',"+
  "DOB = '"+data.DOB+"',"+
  "ADDRESS = '"+data.Address+"',"+
  "CONTACT_NO = '"+data.Contact_no+"',"+
  "AADHAR_CARD = '"+data.Aadhar_card+"',"+
  "POSITION = '"+data.Position+"',"+
  "SALARY = '"+data.Salary+"' where EID = '"+data.EID+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}

module.exports.Create = Create;
module.exports.Edit = Edit;


module.exports.delete = del;
module.exports.find = find;
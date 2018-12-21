const database = require('../services/database.js');
 
const baseQuery = 'select Sl_no "Sl_no", Dates "Dates", Quantity "Quantity", Area "Area", Cost_per_ltr_of_milk "Cost_per_ltr_of_milk", Total_payment "Total_payment" from input1;'

async function find(context) {
  let query = "select * from input1";
  const binds = {};
 
  if (context.id) {
    binds.Sl_no = context.id;
 
    query += `\nwhere Sl_no = :Sl_no`;
  }
 
  const result = await database.simpleExecute(query, binds);

  const resResult={
    queryResult:result.rows,
    queryUsed:query
  }
  
 
  return resResult;
}

async function del(id) {
  const deleteSql ='delete from input1 where Sl_no = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}

async function Create(data){
  console.log(data);
  const createSql = "insert into input1 values('"+data.Sl_no+"','"+data.Dates+"','"+data.Quantity+"','"+data.Area+"','"+data.Cost_per_ltr_of_milk+"','"+data.Total_payment+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update input1 "+
  "SET DATES = '"+data.Dates+"',"+
  "QUANTITY = '"+data.Quantity+"',"+
  "AREA = '"+data.Area+"',"+
  "COST_PER_LTR_OF_MILK = '"+data.Cost_per_ltr_of_milk+"',"+
  "TOTAL_PAYMENT = '"+data.Total_payment+"' where Sl_no = '"+data.Sl_no+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}
module.exports.Create = Create;
module.exports.Edit = Edit;

module.exports.delete = del;
module.exports.find = find;
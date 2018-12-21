const database = require('../services/database.js');
 
const baseQuery = 'select Dates "Dates", Total_milk_input "Total_milk_input", Cost_per_ltr_of_milk "Cost_per_ltr_of_milk", Total_payment "Total_payment" from milk1;'

async function find(context) {
  let query = "select * from milk1";
  const binds = {};
 
  if (context.id) {
    binds.Dates = context.id;
 
    query += `\nwhere Dates = :Dates`;
  }
 
  const result = await database.simpleExecute(query, binds);

  const resResult={
    queryResult:result.rows,
    queryUsed:query
  }
 
  return resResult;
}

async function del(id) {
  const deleteSql ="delete from milk1 where Dates = '"+id+"'"
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}


async function Create(data){
  console.log(data);
  const createSql = "insert into milk1 values('"+data.Dates+"','"+data.Total_milk_input+"','"+data.Cost_per_ltr_of_milk+"','"+data.Total_payment+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update milk1 "+
  "SET TOTAL_MILK_INPUT = '"+data.Total_milk_input+"',"+
  "COST_PER_LTR_OF_MILK = '"+data.Cost_per_ltr_of_milk+"',"+
  "TOTAL_PAYMENT = '"+data.Total_payment+"' where DATES = '"+data.Dates+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}

module.exports.Create = Create;
module.exports.Edit = Edit;

module.exports.delete = del;
module.exports.find = find;
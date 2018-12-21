const database = require('../services/database.js');
 
const baseQuery = 'select Sl_no "Sl_no", Dates "Dates", Packets_manufactured "Packets_manufactured", Cost_per_pack "Cost_per_pack", Total_cost "Total_cost" from packet1;'

async function find(context) {
  let query = "select * from packet1";
  const binds = {};
 
  if (context.id) {
    binds.Total_cost = context.id;
 
    query += `\nwhere Total_cost = :Total_cost`;
  }
 
  const result = await database.simpleExecute(query, binds);

  const resResult={
    queryResult:result.rows,
    queryUsed:query
  }
 
  return resResult;
}

async function del(id) {
  const deleteSql ='delete from packet1 where Total_cost = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}


async function Create(data){
  console.log(data);
  const createSql = "insert into packet1 values('"+data.Sl_no+"','"+data.Dates+"','"+data.Packets_manufactured+"','"+data.Cost_per_pack+"','"+data.Total_cost+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update packet1 "+
  "SET SL_NO = '"+data.Sl_no+"',"+
  "DATES = '"+data.Dates+"',"+
  "PACKETS_MANUFACTURED = '"+data.Packets_manufactured+"',"+
  "COST_PER_PACK = '"+data.Cost_per_pack+"'"+
  "' where TOTAL_COST = '"+data.Total_cost+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}
module.exports.Create = Create;
module.exports.Edit = Edit;


module.exports.delete = del;
module.exports.find = find;
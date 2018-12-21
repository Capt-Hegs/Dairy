const database = require('../services/database.js');
 
const baseQuery = 'select Sl_no "Sl_no", Dates "Dates", Packets_processed "Packets_processed", Cost_per_packet "Cost_per_packet", Total_incoming "Total_incoming", Total_payment_for_milk "Total_payment_for_milk", Total_payment_for_packets "Total_payment_for_packets", Total_outgoing "Total_outgoing", Profit "Profit" from money1;'

async function find(context) {
  let query = "select * from money1";
  const binds = {};
 
  if (context.id) {
    binds.Sl_no = context.id;
 
    query += `\nwhere Sl_no = :Sl_no`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}

async function del(id) {
  const deleteSql ='delete from money1 where Sl_no = '+id
  console.log(deleteSql)
  const result = await database.simpleExecute(deleteSql);
 
  return result;
}


async function Create(data){
  console.log(data);
  const createSql = "insert into money1 values('"+data.Sl_no+"','"+data.Dates+"','"+data.Packets_processed+"','"+data.Cost_per_packet+"','"+data.Total_incoming+"','"+data.Total_payment_for_milk+"','"+data.Total_payment_for_packets+"','"+data.Total_outgoing+"','"+data.Profit+"')"
  console.log(createSql)
  const result = await database.simpleExecute(createSql);
  return result;
}

async function Edit(data) {
  console.log(data);
  const editSql = "update money1 "+
  "SET DATES = '"+data.Dates+"',"+
  "PACKETS_PROCESSED = '"+data.Packets_processed+"',"+
  "COST_PER_PACKET = '"+data.Cost_per_packet+"',"+
  "TOTAL_INCOMING = '"+data.Total_incoming+"',"+
  "TOTAL_PAYMENT_FOR_MILK = '"+data.Total_payment_for_milk+"',"+
  "TOTAL_PAYMENT_FOR_PACKETS = '"+data.Total_payment_for_packets+"',"+
  "TOTAL_OUTGONIG = '"+data.Total_outgoing+"',"+
  "PROFIT = '"+data.Profit+"' where SL_NO = '"+data.Sl_no+"'"

  console.log(editSql)
  const result = await database.simpleExecute(editSql);
  return result;
}

module.exports.Create = Create;
module.exports.Edit = Edit;


module.exports.delete = del;
module.exports.find = find;
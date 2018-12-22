const express = require("express")
const router = new express.Router()
const provider = require("../controllers/provider.js")
const distributor = require("../controllers/distributor.js")
const employee = require("../controllers/employee.js")
const input = require("../controllers/input.js")
const milk = require("../controllers/milk.js")
const packet = require("../controllers/packet.js")
const money = require("../controllers/money.js")
const queryTest = require("../controllers/queryTest.js")

router.route("/provider/show/:id?").get(provider.get)
router.route("/provider/remove/:id?").get(provider.delete)
router.route("/provider/create").post(provider.Create)
router.route("/provider/edit").post(provider.Edit)
// .put(provider.put)
//.delete(provider.delete);

<<<<<<< HEAD
router.route("/distributor/show/:id?").get(distributor.get)
router.route("/distributor/remove/:id?").get(distributor.delete)
router.route("/distributor/create").post(distributor.Create)
router.route("/distributor/edit").post(distributor.Edit)
// .post(distributor.post)
// .put(distributor.put)
// .delete(distributor.delete);

router.route("/employee/show/:id?").get(employee.get)
router.route("/employee/remove/:id?").get(employee.delete)
router.route("/employee/create").post(employee.Create)
router.route("/employee/edit").post(employee.Edit)
// .post(employee.post)
// .put(employee.put)
// .delete(employee.delete);
=======
router.route('/distributor/show/:id?').get(distributor.get);
router.route('/distributor/remove/:id?').get(distributor.delete);
  router.route('/distributor/create').post(distributor.Create);
  router.route('/distributor/edit').post(distributor.Edit);
  // .post(distributor.post)
  // .put(distributor.put)
  // .delete(distributor.delete);

router.route('/employee/show/:id?').get(employee.get);
router.route('/employee/remove/:id?').get(employee.delete);
  router.route('/employee/create').post(employee.Create);
  router.route('/employee/edit').post(employee.Edit);
  // .post(employee.post)
  // .put(employee.put)
  // .delete(employee.delete);
>>>>>>> 925e17ed5cef6d02e8367987f9b62ca4c87b4635

router.route("/input/show/:id?").get(input.get)
router.route("/input/remove/:id?").get(input.delete)
router.route("/input/create").post(input.Create)
router.route("/input/edit").post(input.Edit)
// .post(input.post)
// .put(input.put)

<<<<<<< HEAD
router.route("/milk/show/:id?").get(milk.get)
router.route("/milk/remove/:id?").get(milk.delete)
router.route("/milk/create").post(milk.Create)
router.route("/milk/edit").post(milk.Edit)
// .post(milk.post)
// .put(milk.put)
// .delete(milk.delete);

router.route("/packet/show:id?").get(packet.get)
router.route("/packet/remove/:id?").get(packet.delete)
router.route("/packet/create").post(packet.Create)
router.route("/packet/edit").post(packet.Edit)
// .post(packet.post)
// .put(packet.put)
// .delete(packet.delete);

router.route("/money/show:id?").get(money.get)
router.route("/money/remove/:id?").get(money.delete)
router.route("/money/create").post(money.Create)
router.route("/money/edit").post(money.Edit)
// .post(money.post)
// .put(money.put)
// .delete(money.delete);
=======
router.route('/milk/show/:id?').get(milk.get);
router.route('/milk/remove/:id?').get(milk.delete);
  router.route('/milk/create').post(milk.Create);
  router.route('/milk/edit').post(milk.Edit);
  // .post(milk.post)
  // .put(milk.put)
  // .delete(milk.delete);

router.route('/packet/show/:id?').get(packet.get);
router.route('/packet/remove/:id?').get(packet.delete);
  router.route('/packet/create').post(packet.Create);
  router.route('/packet/edit').post(packet.Edit);
  // .post(packet.post)
  // .put(packet.put)
  // .delete(packet.delete);

router.route('/money/show/:id?').get(money.get);
router.route('/money/remove/:id?').get(money.delete);
  router.route('/money/create').post(money.Create);
  router.route('/money/edit').post(money.Edit);
  // .post(money.post)
  // .put(money.put)
  // .delete(money.delete);
>>>>>>> 925e17ed5cef6d02e8367987f9b62ca4c87b4635

//router.route("/queryTest").get(queryTest.get)
router.route("/queryTest").post(queryTest.post)

module.exports = router

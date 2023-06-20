import express from 'express'
import { getAllTransection,addTransection } from '../controllers/transactionController';


//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);

//get transections
router.post("/get-transection", getAllTransection);

module.exports = router;


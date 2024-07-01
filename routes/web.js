import express from "express"
const router= express.Router();
import Studentcontroller from "../controller/studentcontroller.js";

router.get('/', Studentcontroller.getAllDoc)
router.post('/', Studentcontroller.createDoc)
router.get('/edit/:id', Studentcontroller.editDoc)
///router.post('/update/:id', Studentcontroller.updateDocById)
//router.post('/delete/:id', Studentcontroller.deleteDocById)


export default router
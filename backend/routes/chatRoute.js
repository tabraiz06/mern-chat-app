const express= require('express')

const verifyToken = require('../middleware/verifyToken');
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatControllers');
const router= express.Router()

router.route("/").post(verifyToken, accessChat);
router.route("/").get(verifyToken, fetchChats);
router.route("/group").post(verifyToken, createGroupChat);
router.route("/rename").put(verifyToken, renameGroup);
router.route("/group/remove").put(verifyToken, removeFromGroup);
router.route("/group/add").put(verifyToken, addToGroup);



module.exports=router
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/users.ts */
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../controllers/users"));
var router = express_1.default.Router();
router.get('/users', users_1.default.getUsers);
router.get('/users/:id', users_1.default.getUser);
router.put('/users/:id', users_1.default.updateUser);
router.delete('/users/:id', users_1.default.deleteUser);
router.post('/users', users_1.default.addUser);
router.post('/users/login', users_1.default.login);
module.exports = router;

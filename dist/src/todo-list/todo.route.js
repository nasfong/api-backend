"use strict";
exports.__esModule = true;
exports.routerTodo = void 0;
var express_1 = require("express");
var authMiddleware_1 = require("../../Middleware/authMiddleware");
var todo_controller_1 = require("./todo.controller");
var routerTodo = (0, express_1.Router)();
exports.routerTodo = routerTodo;
routerTodo.get('', todo_controller_1.readAllData);
routerTodo.post('', authMiddleware_1.authMiddleware, todo_controller_1.createData);
routerTodo.get('/:id', authMiddleware_1.authMiddleware, todo_controller_1.readData);
routerTodo.put('/:id', authMiddleware_1.authMiddleware, todo_controller_1.updateData);
routerTodo["delete"]('/:id', authMiddleware_1.authMiddleware, todo_controller_1.deleteData);

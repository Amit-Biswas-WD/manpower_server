"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("I am learning Express JS with TypeScript");
});
app.get("/data", (req, res) => {
    res.send("Hello World!");
});
app.post("/data/create_data", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;

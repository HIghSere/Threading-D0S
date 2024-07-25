"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UAGen = UAGen;
const fs_1 = __importDefault(require("fs"));
function UAGen() {
    const userAgents = fs_1.default.readFileSync("./data/user-agents.json", "utf-8");
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}
import * as dotenv from "dotenv"; dotenv.config();
const RustPlus = require("@liamcottle/rustplus.js");

let rustplus = new RustPlus(process.env.RUST_SERVER, process.env.RUST_PORT, process.env.RUST_SID64, process.env.RUST_TOKEN);

export {rustplus as Rust};

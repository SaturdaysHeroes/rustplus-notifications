import * as dotenv from "dotenv"; dotenv.config();
import {Discord} from "./discord";
import {Rust} from "./rust";

Rust.on("connected", () => {
    console.log("[Rust+] Successfully connected.");
    Discord({
        title: "Connected", 
        description: "Rust+ has successfully been connected."
    });
});
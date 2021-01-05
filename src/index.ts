import * as dotenv from "dotenv"; dotenv.config();
import {Discord} from "./discord";
import {Rust} from "./rust";

Rust.on("connected", () => {
    console.log("[Rust+] Successfully connected.");

    Discord({
        title: "Connected", 
        description: "Rust+ has successfully been connected."
    });

    Rust.getEntityInfo(process.env.RUST_ALARMID, () => {
        console.log("[Rust+] Successfully requested information about entites.");
    });

    Rust.on("message", (message) => {
        if (message.broadcast && message.broadcast.entityChanged) {
            let entityChanged = message.broadcast.entityChanged;
            let entityID = entityChanged.entityId; 
            
            if (entityID == process.env.RUST_ALARMID) {
                Discord({
                    title: "Alarm Triggered",
                    description: "An intruder has been detected by your smart alarm!"
                });

                console.log("[Rust+] Alarm triggered, notificaton sent.")
            };
        }
    });
});
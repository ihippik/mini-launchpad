import fs from "fs";
import bs58 from "bs58";

const secret = JSON.parse(
    fs.readFileSync(process.env.HOME + "/.config/solana/id.json", "utf8")
);

const secretKey = Uint8Array.from(secret);
const base58Key = bs58.encode(secretKey);

console.log(base58Key);jkl;
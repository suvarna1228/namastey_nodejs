// Crypto is a library For generating the key
const crypto = require("crypto");

// PBKDF 2 means Password based derivative function
// Arguments are : password -> keyname, salt -> encryption, 50000 -> iteration length i.e the bigger it, the tougher, 50 -> keylength, sha512 -> keylength.

// synchronous File read

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("Key is generated synchronously.");

// Asnc function

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (error, key) => {
    console.log("Key is generated");
});
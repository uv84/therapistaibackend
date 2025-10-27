"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.inngest = void 0;
const inngest_1 = require("inngest");
// Initialize the Inngest client
exports.inngest = new inngest_1.Inngest({
    id: "therapistai",
    // You can add your Inngest signing key here if you have one
    eventKey: "3sXziRz5Iy5VJEyR7MazeEiTSaM8u4cezKtG7jQGvJSeo9RvgorFGr4Se1fNHU-Gc5eMu13zYHsaUq8Yuxn7HQ",
});
// Export the functions array (this will be populated by the functions.ts file)
exports.functions = [];

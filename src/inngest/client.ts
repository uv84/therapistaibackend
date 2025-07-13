import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "therapistai",
  // You can add your Inngest signing key here if you have one
  eventKey:
    "3sXziRz5Iy5VJEyR7MazeEiTSaM8u4cezKtG7jQGvJSeo9RvgorFGr4Se1fNHU-Gc5eMu13zYHsaUq8Yuxn7HQ",
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];

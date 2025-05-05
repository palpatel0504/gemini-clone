


import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCXMjaBfc_tRt0PDdh1vejq-CXnwRpcD2I"; // ✅ Your Gemini API key
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    // model: "gemini-2.5-pro-preview-03-25",
    model:"gemini-2.5.pro-exp-03-25",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseModalities: [],
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
  
    // ✅ Get the plain text reply
    const text = result.response.text();
    console.log("🔍 Text response:", text); // Log to console
    
  
    return text; // ✅ Return the plain text so it can be used in context
  }
  
  export default run;
  















// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   // 🔐 Your Gemini API key — NEVER commit this in public repos
//   const apiKey = "AIzaSyDPtp2NKpDEYyTT1AHBgEmPLc8NDh6f3Y0";
  
//   // Initialize the Google Generative AI instance
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   // Load the model
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.5-pro-preview-03-25",
//   });
  
//   // Model configuration
//   const generationConfig = {
//     temperature: 0.9,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 2048,
//   };
  
//   // The function to run your prompt through Gemini
//   async function run(prompt) {
//     try {
//       const chatSession = model.startChat({
//         generationConfig,
//         history: [],
//       });
  
//       const result = await chatSession.sendMessage(prompt);
//       const textResponse = result.response.text();
  
//       console.log("🔍 Text response:", textResponse);
//       return textResponse;
//     } catch (error) {
//       console.error("❌ Error in run():", error);
//       return "Something went wrong. Please try again.";
//     }
//   }
  
//   export default run;
  























// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   const apiKey = "AIzaSyDPtp2NKpDEYyTT1AHBgEmPLc8NDh6f3Y0";
  
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.5-pro-preview-03-25",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 65536,
//     responseModalities: [],
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     const candidates = result.response.candidates;
  
//     for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
//       const candidate = candidates[candidate_index];
//       const parts = candidate.content.parts;
  
//       for (let part_index = 0; part_index < parts.length; part_index++) {
//         const part = parts[part_index];
//         if (part.inlineData) {
//           const byteCharacters = atob(part.inlineData.data);
//           const byteArrays = [];
//           for (let i = 0; i < byteCharacters.length; i++) {
//             byteArrays.push(byteCharacters.charCodeAt(i));
//           }
//           const blob = new Blob([new Uint8Array(byteArrays)], { type: part.inlineData.mimeType });
//           const url = URL.createObjectURL(blob);
//           const link = document.createElement("a");
//           link.href = url;
//           link.download = `output_${candidate_index}_${part_index}`;
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//         }
//       }
//     }
  
//     console.log("🔍 Text response:", result.response.text());
//   }
  
//   export default run;
  
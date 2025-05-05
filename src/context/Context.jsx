import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
   setResultData("")
   setLoading(true)
   setShowResult(true)
   await run(input)
  } 
//   onSent("what is react js")

const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
}

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
































// import { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider=(props) => {


// const onSent = async (prompt) => {
//     await run(prompt)
// }

// // onSent("what is react js")
// const[input,setInput] = userState("");
// const[recentPrompt,setRecentPrompt] = useState("");
// const[prevPrompt,setPrevPrompt] = useState([]);
// const[showResult,setShowResult] = useState(false);
// const[loading,setLoading] = useState(false);
// const[resultData,setResultData] = useState("");





//     const contextValue ={


//     }
 
//     return(
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
    
// }

// export default ContextProvider
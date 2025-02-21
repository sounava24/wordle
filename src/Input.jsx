import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { founded} from "./store/authSlice";

const Input = ({found}) => {
  const { register, handleSubmit } = useForm();
  const targetWord = useSelector((state) => state.auth.Data) || "";    
  const dispatch = useDispatch();
  const [colorA, setColorA] = useState("");
  const [colorB, setColorB] = useState("");
  const [colorC, setColorC] = useState("");
  const [colorD, setColorD] = useState("");
  const [colorE, setColorE] = useState("");
  const [sub, setsub]= useState(false);


  function wordCheck(value) {
    const userInput = (value.A + value.B + value.C + value.D + value.E).toLowerCase();
    setsub(true);
    console.log("User Input:", userInput, "Target Word:", targetWord);

    if (userInput === targetWord) {
      setColorA("bg-green-500");
      setColorB("bg-green-500");
      setColorC("bg-green-500");
      setColorD("bg-green-500");
      setColorE("bg-green-500");
      dispatch(founded());
      
    } else {
      setColorA(value.A === targetWord[0] ? "bg-green-500" : targetWord.includes(value.A) ? "bg-yellow-500" : "");
      setColorB(value.B === targetWord[1] ? "bg-green-500" : targetWord.includes(value.B) ? "bg-yellow-500" : "");
      setColorC(value.C === targetWord[2] ? "bg-green-500" : targetWord.includes(value.C) ? "bg-yellow-500" : "");
      setColorD(value.D === targetWord[3] ? "bg-green-500" : targetWord.includes(value.D) ? "bg-yellow-500" : "");
      setColorE(value.E === targetWord[4] ? "bg-green-500" : targetWord.includes(value.E) ? "bg-yellow-500" : "");
    }
  }



  return (
    <form onSubmit={handleSubmit(wordCheck)} className="flex flex-row items-center justify-center w-96" >
      <input disabled={found||sub} className={`w-1/5 p-6 m-2 rounded-lg ${colorA}`} type="text" maxLength="1" pattern="[A-Za-z]" {...register("A", { required: true })} />
      <input disabled={found||sub} className={`w-1/5 p-6 m-2 rounded-lg ${colorB}`} type="text" maxLength="1" pattern="[A-Za-z]" {...register("B", { required: true })} />
      <input disabled={found||sub} className={`w-1/5 p-6 m-2 rounded-lg ${colorC}`} type="text" maxLength="1" pattern="[A-Za-z]" {...register("C", { required: true })} />
      <input disabled={found||sub} className={`w-1/5 p-6 m-2 rounded-lg ${colorD}`} type="text" maxLength="1" pattern="[A-Za-z]" {...register("D", { required: true })} />
      <input disabled={found||sub} className={`w-1/5 p-6 m-2 rounded-lg ${colorE}`} type="text" maxLength="1" pattern="[A-Za-z]" {...register("E", { required: true })} />
      <button type="submit" className="hidden"></button>
    </form>
  );
};

export default Input;

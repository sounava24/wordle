import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setup } from './store/authSlice'
import './App.css'
import Input from './Input'

function App() {
  const dispatch = useDispatch();
  const url = "https://random-word-api.herokuapp.com/word?length=5";
  const [word, setWord] = useState("");
  const found = useSelector((state) => state.auth.found);
  console.log("Found:", found);

  async function fetchWord() {
    const response = await fetch(url);
    const data = await response.json();
    setWord(data[0]); 
  }

  useEffect(() => {
    fetchWord();
  }, []);

  useEffect(() => {
    if (word) {
      dispatch(setup(word)); 
    }
  }, [word]); 
   
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <h1>WORDLE</h1>
      <h1 hidden={!found}>Congratulations!! You have guessed it right.</h1>
      <Input found={found} />
      <Input found={found} />
      <Input found={found} />
      <Input found={found} />
      <Input found={found} />
    </div>
    </>
  );
}

export default App;

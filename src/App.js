import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [result, setResult] = useState("")

  const handleClick = (e) => {
    if (result === 'Error!') {
      setResult(''); 
    }
    const value = e.target.id;

    if (value === '.') {
      const parts = result.split(/[\+\-\*\/]/); 
      const lastPart = parts[parts.length - 1];
      if (lastPart.includes('.')) return; 
    }

    setResult((prev) => prev.concat(value));
  };

  const clearAll = () =>setResult("")
  const deleteOne = () => setResult(result.slice(0,-1))
  const calculate = () =>{
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error!")

    }
  }

  return (
          <div className="min-h-screen w-full flex flex-col items-center gap-10 px-3 py-10 overflow-x-hidden">
            <div className='fixed top-0 -z-10 h-full w-full'> 
            <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>            </div>
            <h1 className="text-4xl text-violet-700 font-bold">
              My Calculator
            </h1>
            <div className='bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 max-w-96 rounded-md border-4 border-violet-900 '>
              <input className='bg-slate-900/80 rounded-md p-4 text-2xl w-full font-semibold text-white text-right tracking-wider border-2 border-indigo-300 ' type='text' value={result} disabled>
              </input>
              <p className='bg-sky-500 inline-block rounded-full px-3 py-1 my-2 text-violet-700 text-sm tracking-wider border border-neutral-600 font-bold'>Shivram's Calculator</p>
              <div className='grid grid-cols-4 gap-2'>
                <button onClick={clearAll} type='button' className='operator '>AC</button>
                <button onClick={deleteOne} type='button' className='operator'>DEL</button>
                <button onClick={handleClick} type='button' className='operator' id='.'>.</button>
                <button onClick={handleClick} type='button' className='operator'id='/'>/</button>
                <button onClick={handleClick} type='button' className='number' id='7'>7</button>
                <button onClick={handleClick} type='button' className='number' id='8'>8</button>
                <button onClick={handleClick} type='button' className='number' id='9'>9</button>
                <button onClick={handleClick} type='button' className='operator' id='*'>*</button>
                <button onClick={handleClick} type='button' className='number' id='6'>6</button>
                <button onClick={handleClick} type='button' className='number' id='5'>5</button>
                <button onClick={handleClick} type='button' className='number' id='4'>4</button>
                <button onClick={handleClick} type='button' className='operator' id='-'>-</button>
                <button onClick={handleClick} type='button' className='number' id='3'>3</button>
                <button onClick={handleClick} type='button' className='number' id='2'>2</button>
                <button onClick={handleClick} type='button' className='number' id='1'>1</button>
                <button onClick={handleClick} type='button' className='operator' id='+'>+</button>
                <button onClick={handleClick} type='button' className='number' id='00'>00</button>
                <button onClick={handleClick} type='button' className='number' id='0'>0</button>
                <button onClick={calculate} type='button' className='operator col-span-2' id='='>=</button>
              </div>
            </div>
            <footer className="mt-auto">
              <p className="text-gray-500 text-center">&copy; 2024 My Calculator. All rights reserved.</p>
            </footer>
          </div>
  );
}

export default App;

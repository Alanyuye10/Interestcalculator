import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest, SetInterest] = useState(0)
  const [principle, SetPrinciple] = useState(0)
  const [rate, SetRate] = useState(0)
  const [year, SetYear] = useState(0)

  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInputs = (inputTag) => {
    console.log(typeof inputTag);
    const { name, value } = inputTag
    console.log(name, typeof value);
    console.log(!!value.match(/^\d*\.?\d+$/));

    if (name == "principle") {
      SetPrinciple(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidPrinciple(false)
      } else {
        setinvalidPrinciple(true)
      }
    }else if (name == "rate") {
      SetRate(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidRate(false)
      } else {
        setinvalidRate(true)
      }
    }else if (name == "year") {
      SetYear(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidYear(false)
      } else {
        setinvalidYear(true)
      }
    }

  }

  const handleCalculate = (e)=> {
    e.preventDefault()
    console.log("Inside handle calculate");
    if(principle && rate && year) {
      SetInterest(principle*rate*year/100)
    } else {
      alert("Please fill the form Completely!!")
    }
  }

  const handleReset = ()=> {
    SetInterest(0)
    SetPrinciple(0)
    SetRate(0)
    SetYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5' >
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily</p>
          <div className='bg-warning p-3 text-light text-center rounded'>
            <h1> ₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <div>
            <form className="mt-5">
              {/* principle */}
              <div className='mb-3'>
                <TextField value={principle || ""} name='principle' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
              </div>
              {/* invalid principle */}
              {invalidPrinciple && <div className="mb-3 text-danger fw-bolder">
                Invalid Principle Amount!!
              </div>}
              {/* rate */}
              <div className='mb-3'>
                <TextField value={rate || ""} name='rate' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
              </div>
              {/* invalid rate */}
              {invalidRate && <div className="mb-3 text-danger fw-bolder">
                Invalid Rate!!
              </div>}
              {/* year */}
              <div className='mb-3'>
                <TextField value={year || ""} name='year' onChange={(e) => validateInputs(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
              </div>
              {/* invalid year */}
              {invalidYear && <div className="mb-3 text-danger fw-bolder">
                Invalid Year!!
              </div>}
              <Stack direction="row" spacing={2}>
                <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} style={{ width: '50%', height: '60px' }} className='bg-dark' variant="contained">CALCULATE</Button>
                <Button onClick={handleReset} style={{ width: '50%', height: '60px' }} className='border border-dark text-dark' variant="outlined">RESET</Button>
              </Stack>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default App

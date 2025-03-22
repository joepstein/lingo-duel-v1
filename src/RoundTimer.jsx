import { useEffect, useRef, useState } from 'react'

export function RoundTimer( {seconds} ){

  const [time, setTime] = useState(parseInt(seconds))
  const [iteration, setIteration] = useState(0)

  // useEffect(() => {

  //   setInterval(() => {
  //     if( iteration < secondsRef.current ){
  //       setIteration(prevIteration => prevIteration + 1)
  //       console.log(iteration)
  //       secondsRef.current = (parseInt(seconds) - iteration)        
  //     }
  //   }, 1000)
  // }, [])

  useEffect(() => {

    const timerInterval = setInterval(() => {
      if( iteration < time ){
        setIteration(prevIteration => prevIteration + 1)
        setTime(prevTime => prevTime - iteration)  
        console.log(iteration)      
        console.log(time)      
      }
    }, 1000);

    return () => clearInterval(timerInterval)
  }, [])

  return (

    <>
      <div class='round-timer'>
        <p>{time}</p>
      </div>
    </>

    )
}
import React, { useEffect } from "react";

import './Timer.css'

const Timer = function () {

    const [seconds, setSeconds] = React.useState(0)

    const [isRunning, setIsRunning] = React.useState(false)

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                // eslint-disable-next-line no-shadow
                setSeconds(seconds => seconds+1);
            }, 1000);
            return () => {clearInterval(id)}
        }
    }, [isRunning])

    const hours = Math.floor(seconds / 60 / 60)
    const minutes = Math.floor(seconds / 60) - (hours * 60)
    const sec = seconds % 60

    return (
        <div className='timer'>
            {[
                hours.toString().padStart(2, '0'),
                minutes.toString().padStart(2, '0'),
                sec.toString().padStart(2, '0')
            ].join(':')}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            {isRunning ? <button className='button' type='button' onClick={() => {setIsRunning(false)}}><i className='icon icon-pause' /></button> : <button type='button' className='button' onClick={() => {setIsRunning(true)}}><i className='icon icon-play' /></button>}
        </div>
    )
}

export default Timer
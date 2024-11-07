
'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ( {amount} : { amount : number}) => {
  return (
    <div>
        <CountUp className='w-full' 
            duration={2.75}
            decimal=","
            decimals={2}
            prefix="$"
            end={amount}
            />
    </div>
  )
}

export default AnimatedCounter
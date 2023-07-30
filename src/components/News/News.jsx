import { useCallback, useState } from 'react'
import classes from './News.module.css'


const News = () => {

    const useCounter = (initialValue = 0) => {
        let [count, setCount] = useState(initialValue);

        const increment = useCallback(() => { setCount(currentCount => currentCount + 1) }, [])
        const decrement = useCallback(() => { setCount(currentCount => currentCount - 1) }, [])

        return { count, increment, decrement }
    }

    let { count, increment, decrement } = useCounter(7);


    
    return (
        <div className={classes.main__news}>
            <h1>counter</h1>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default News;
import { useCallback, useState } from 'react'
import classes from './News.module.css'


const News = () => {

    const usePaginator = (initialValue = 1) => {
        let [currentPage, setCount] = useState(initialValue);

        const increment = useCallback(() => { setCount(currentCount => currentCount + 1) }, [])
        const decrement = useCallback(() => { setCount(currentCount => currentCount - 1) }, [])

        return { currentPage, increment, decrement,setCount}
    }

    let { count, increment, decrement } = usePaginator(7);


    
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
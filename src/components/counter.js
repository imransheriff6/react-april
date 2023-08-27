import { useDispatch, useSelector } from "react-redux"
import { dynamicAdd, decrement, increment, selectCount } from "../Redux/counterReducer"
function Counter(){
    const dispatch = useDispatch();
    const data = useSelector(selectCount)
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}> - </button>
            <p>{data}</p>
            <button onClick={()=>dispatch(increment())}> + </button>
            <button onClick={()=>dispatch(dynamicAdd(5))}> Add 5 </button>
            <button onClick={()=>dispatch(dynamicAdd(10))}> Add 10 </button>
            <button onClick={()=>dispatch(dynamicAdd(20))}> Add 20 </button>
        </div>
    )
}
export default Counter
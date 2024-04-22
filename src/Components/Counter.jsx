import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/features/counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state)=> state.counter)
    const dispatch = useDispatch()
    // console.log(count)
    return (
        <div>
            <button className="w-28 h-10 rounded-lg bg-red-600 text-white" onClick={()=>dispatch(increment())}>increment</button>
            <div className="w-24 text-2xl text-center">
                <h1 >{count}</h1>
            </div>
            <button  className="w-28 h-10 rounded-lg bg-green-600 text-white" onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;
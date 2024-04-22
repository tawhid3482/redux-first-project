import { useSelector } from "react-redux";

const Counter = () => {
    const {} = useSelector((state)=> state.counter)
    return (
        <div>
            <button>increment</button>
            <div className="">
                <h1>0</h1>
            </div>
            <button>decrement</button>
        </div>
    );
};

export default Counter;
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {

    const dispatch = useDispatch();
    const count = useSelector<any>(state => state.count);   // 型を書くなら useSelector<ReturnType<typeof reducer>>(state => state.count)
    
    const increase = () => {
        dispatch({
             type: "INCREASE_COUNT"
        });
    };

    return (
        <>
            <button onClick={increase}>count is {count}</button>
        </>
    );
}

export default Counter;

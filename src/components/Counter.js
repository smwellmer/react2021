import {useState} from 'react'

function Counter(){

    let [count, setCount] = useState(0)

    console.log("on this render the count is:", count)
    return <div>
        <div style={{
            fontSize: '2em',
            margin: "auto",
            textAlign: "center"
        }}>{count}</div>
        <div style={{
            margin: "auto",
            textAlign: "center"
        }}>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
        </div>
    </div>
}
export default Counter
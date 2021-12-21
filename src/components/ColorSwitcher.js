import {useState} from "react"

function ColorSwitcher(){

    let [color, setColor] = useState("green")

    console.log("On this render, the color is:", color)

    return <div>
        <div style={{
            width: "200px",
            height: "200px",
            border: "3px solid black",
            margin: "auto",
            backgroundColor: color
        }}></div>

        <div style={{
            textAlign: "center",
            margin: "20px"
        }}>
        <button onClick={() => {
            setColor("orange")
            console.log(color)
        }}>Orange</button>
        <button onClick={() => {
            setColor("red")
            console.log(color)}}>Red</button>
        <button onClick={() => {
            setColor("blue")
            console.log(color)}}>Blue</button>
        </div>
        
    </div>
}
export default ColorSwitcher
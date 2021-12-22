import {Loop} from 'merced-react-hooks'

function Iterate(){

    const dogs = ["Sparky", "Spot", "Rover"]

    // const dogJsx = []

    // for (let dog of dogs){
    //     dogJsx.push(<h1>{dog}</h1>)
    // }

    // iterate using map 
    // return <div>{dogs.map((dog, index) => {
    //     return <h1 key={dog}>{dog}</h1>
    // })}</div>

    //ternary operators with Merced Loop
    const ifTrue = <h1>True</h1>
    const ifFalse = <h1>False</h1>

    return <div>
        <Loop
        withthis={dogs}
        dothat={(dog, index) => <h1>{dog}</h1>}
        />
        {false ? ifTrue : ifFalse}
    
    </div>
}
export default Iterate
import { useEffect, useState } from "react"

function StateExample(){
    let [text,setText] = useState({
        fname:"sam",
        age:24
    });
    function change(){
        let copy = {...text};
        copy.age +=1;
        // text = copy;
        setText(copy)
    }
    useEffect(function(){
        console.log("From useeffect")
    },[])
    return (
       <div>
            <p>{text.fname}</p>
            <h5>{text.age}</h5>
            <button onClick={change}>Change</button>
       </div>
    )
}
export default StateExample
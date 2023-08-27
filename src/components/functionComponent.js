import { useState } from "react"

function FunctionExample(p){
    const [data,setData] = useState("Hello");
    const [data1,setData1] = useState("welcome");
    function changeHandler(){
        setData('welcome')
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setLoading(false)
            setData(res.data);
        })
        .catch(()=>{
            setData([]);
        })
    },[])
    return <>
    <h1>Welcome - {data}</h1>
    <button onClick={changeHandler}>Change</button>
    </>
}
export default FunctionExample
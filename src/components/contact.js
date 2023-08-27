import { useParams } from "react-router-dom"

function Contact(){
    const {id} = useParams()
    return <h1>Welcome to Contact page - {id}</h1>
}
export default Contact
import { Link } from "react-router"

function Home(){
    return (
    <div>
        <h1>Home</h1>
        <Link to='/login'>login</Link>
    </div>
        
    )
}

export default Home
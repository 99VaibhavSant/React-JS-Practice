
import Vaibhav from "../assets/Vaibhav.jpg"
export default function Card(){
    return(
        <div className="border max-w-100 m-auto text-center text-red-500" >
            <img src={Vaibhav} title="Vaibhav" className="w-4/5 mx-auto " />
          <h1>My name is Vaibhav</h1>
            <h2>I Am 26 years old</h2>
            <h2>I Am Front End Developer</h2>
            <h3>Look for job</h3>
        </div>
    )
}
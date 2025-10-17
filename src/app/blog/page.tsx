import Link from "next/link";

export default function Blog(){
    return(
        <>
        <h1>Blog Page</h1>
        <Link href="/" style={{fontSize:"30px",fontWeight:"bold" , color:"green", textDecoration:"none"}}>Home Page</Link>
        </> )
}
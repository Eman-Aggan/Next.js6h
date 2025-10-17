import Link from "next/link"
export default function Home(){
    return ( <>

    <h1 style= {{padding:"50px"  , margin:"50px" , fontSize:"70px"}}>Welcome Home!</h1>
       <h1> <Link href = "/blog">Blog</Link>  </h1>
       <h1> <Link href = "/products">products</Link>  </h1>
    </>)
}
import Link from "next/link"
export default function Home(){
    return ( 
    <>

    <h1 style= {{padding:"50px"  , margin:"50px" , fontSize:"70px"}}>Welcome Home!</h1>
    <Link href = "/blog" style={{margin:"20px" , fontSize:"25px"}}>Blog</Link>  
    <Link href = "/products" style={{margin:"20px" , fontSize:"25px"}}>products</Link>  
    <Link href= "/articles/breaking-news-123?lang=en" style={{margin:"20px" , fontSize:"25px"}}>Read in English </Link>
    <Link href= "/articles/breaking-news-123?lang=fr" style={{margin:"20px" , fontSize:"25px"}}>Read in French </Link>
    <Link href= "/articles/breaking-news-123?lang=sp" style={{margin:"20px" , fontSize:"25px"}}>Read in Spanish </Link>

    </>)
}
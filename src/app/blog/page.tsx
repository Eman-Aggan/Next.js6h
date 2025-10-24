// import Link from "next/link";

// export default function Blog(){
//     return(
//         <>
//         <h1>Blog Page</h1>
//         <Link href="/" style={{fontSize:"30px",fontWeight:"bold" , color:"green", textDecoration:"none"}}>Home Page</Link>
//         </> )
// }

// whenloading 
import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute:"Blog",

    },
};
export default async function Blog(){
    await new Promise ((resolve)=>{
     setTimeout(()=>{
        resolve("intentional  Delay")
     },2000)
    })
    return <h1>My Blog</h1>
}
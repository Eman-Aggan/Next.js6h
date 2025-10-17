import Link from "next/link" 
export default function Products (){
    const productId = 100;
    return (
    <>
    <h1>Product List</h1>
    <li style={{fontSize:"20px"}}><Link  href="/products/1">Product1</Link ></li> 
    <li style={{fontSize:"20px"}}><Link  href="/products/2">Product2</Link ></li> 
    <li style={{fontSize:"20px"}}><Link  href="/products/3">Product3</Link ></li> 
    <li style={{fontSize:"20px"}}><Link  href="/products/4">Product4</Link ></li> 
    <li style={{fontSize:"20px"}}><Link  href={`/products/${productId}`}>Product100</Link ></li> 
    <li style={{fontSize:"20px"}}><Link  href={`/products/3`} replace>Product3</Link></li> 
</>

)

}
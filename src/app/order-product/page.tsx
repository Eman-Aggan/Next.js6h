"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct(){
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing Your Order");
        router.push("/");
        // router.replace("/"); for replacing in history not more

    };
    return(
        <>
        <h1>Order product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
}
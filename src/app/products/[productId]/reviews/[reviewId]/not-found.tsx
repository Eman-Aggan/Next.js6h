"use client"
import { usePathname } from "next/navigation";
export default function NotFound (){
    const Pathname = usePathname();
    const productId = Pathname.split("/")[2];
    const reviewId = Pathname.split("/")[4];
    

    return (
        <div>
            <h2>Review &nbsp;{reviewId}&nbsp;&nbsp;not found  for product&nbsp; {productId}</h2>

        </div>
    );
}





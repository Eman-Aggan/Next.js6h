import Link from "next/link";
import placesImages from "./places" 
import Image from "next/image";

export default function Home() {
return (
<main className="container mx-auto">
<h1 className="text-center text-3xl font-bold my-4">
Beautiful Places of the World
</h1>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{placesImages.map(({ id , src , name }) => (
<Link key={id} href={`/photo-feed/${id}`}>
<Image
alt={name}
src={src}
className="w-full object-cover aspect-square"
style={{  width:"500px" , height:"500px"}}
/>
</Link>
))}
</div>
</main>
)}
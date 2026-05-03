import Image from "next/image";
import { enTofa } from "../utils/priceUtils";

export default function ProductBox({ product }) {  
    return (
        <div className="flex flex-col border border-gray-400 rounded-2xl w-60 items-center">
            <Image 
                src={product.image} 
                alt={product.title} 
                width={235} 
                height={200}  
                className="rounded-t-2xl object-cover"
            />
            <div className="flex flex-col p-2 gap-2">
                <span className="truncate w-48">{product.title}</span>
                <div className="flex justify-between flex-col items-center mt-2">
                <span className="text-green-600 font-bold">
                        {enTofa(product.originalPrice)} تومان
                    </span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        افزودن به سبد خرید
                    </button>
                   
                </div>
            </div>
        </div>
    )
}
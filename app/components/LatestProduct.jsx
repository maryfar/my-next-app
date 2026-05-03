import ProductList from "./ProductList";

  
  export const salesData = [
    {
      id: 1,
      title: "لپ‌تاپ ایسوس Zenbook 14",
      originalPrice: 59900000,
      discountPrice: 45900000,
      image: "/images.jpeg",
      discountPercent: 23
    },
    {
      id: 2,
      title: "هدفون بی سیم سونی WH-1000XM5",
      originalPrice: 24900000,
      discountPrice: 18900000,
      image: "/images.jpeg",
      discountPercent: 24
    },
    {
      id: 3,
      title: "ساعت هوشمند اپل واچ سری 9",
      originalPrice: 39900000,
      discountPrice: 32500000,
      image: "/images.jpeg",
      discountPercent: 18
    },
    {
      id: 4,
      title: "کیبورد گیمینگ ریزر BlackWidow",
      originalPrice: 15900000,
      discountPrice: 12500000,
      image: "/images.jpeg",
      discountPercent: 21
    },
    {
      id: 5,
      title: "مانیتور سامسونگ 27 اینچ منحنی",
      originalPrice: 35900000,
      discountPrice: 28900000,
      image: "/images.jpeg",
      discountPercent: 19
    }
  ];

export default function LatestProduct(){
    return (
        <div className="flex flex-col gap-4 p-8">
            <h1 className="font-bold text-2xl">محصولات پرفروش</h1>
            <ProductList products={salesData}/>
        </div>

    )
}
import ProductList from "./ProductList";

  
  export const salesData = [
    {
      id: 1,
      title: "لپ‌تاپ ایسوس Zenbook 14",
      originalPrice: 59900000,
      discountPrice: 45900000,
      image: "/images.jpeg",
      discountPercent: 23,
      description: " لپ تاپ کاستوم به معنی ارتقا فنی بعضی قطعات لپ تاپ نو (آکبند) و بر اساس استاندارد شرکت تولیدکننده است، لطفا برای اطلاعات بیشتر در این مورد، به سوالات متداول مراجعه فرمایید."
    },
    {
      id: 2,
      title: "هدفون بی سیم سونی WH-1000XM5",
      originalPrice: 24900000,
      discountPrice: 18900000,
      image: "/images.jpeg",
      discountPercent: 24,
      description: " لپ تاپ کاستوم به معنی ارتقا فنی بعضی قطعات لپ تاپ نو (آکبند) و بر اساس استاندارد شرکت تولیدکننده است، لطفا برای اطلاعات بیشتر در این مورد، به سوالات متداول مراجعه فرمایید."

    },
    {
      id: 3,
      title: "ساعت هوشمند اپل واچ سری 9",
      originalPrice: 39900000,
      discountPrice: 32500000,
      image: "/images.jpeg",
      discountPercent: 18,
      description: " لپ تاپ کاستوم به معنی ارتقا فنی بعضی قطعات لپ تاپ نو (آکبند) و بر اساس استاندارد شرکت تولیدکننده است، لطفا برای اطلاعات بیشتر در این مورد، به سوالات متداول مراجعه فرمایید."

    },
    {
      id: 4,
      title: "کیبورد گیمینگ ریزر BlackWidow",
      originalPrice: 15900000,
      discountPrice: 12500000,
      image: "/images.jpeg",
      discountPercent: 21,
      description: " لپ تاپ کاستوم به معنی ارتقا فنی بعضی قطعات لپ تاپ نو (آکبند) و بر اساس استاندارد شرکت تولیدکننده است، لطفا برای اطلاعات بیشتر در این مورد، به سوالات متداول مراجعه فرمایید."

    },
    {
      id: 5,
      title: "مانیتور سامسونگ 27 اینچ منحنی",
      originalPrice: 35900000,
      discountPrice: 28900000,
      image: "/images.jpeg",
      discountPercent: 19,
      description: " لپ تاپ کاستوم به معنی ارتقا فنی بعضی قطعات لپ تاپ نو (آکبند) و بر اساس استاندارد شرکت تولیدکننده است، لطفا برای اطلاعات بیشتر در این مورد، به سوالات متداول مراجعه فرمایید."

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
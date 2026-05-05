import Image from "next/image";
import { enTofa } from "../../utils/priceUtils";

export default function Cart() {
  const Products = [
    {
      id: 1,
      title: "لپ‌تاپ ایسوس Zenbook 14",
      originalPrice: 59900000,
      image: "/images.jpeg",
    },
    {
      id: 2,
      title: "هدفون بی سیم سونی WH-1000XM5",
      originalPrice: 24900000,
      image: "/images.jpeg",
    },
    {
      id: 4,
      title: "کیبورد گیمینگ ریزر BlackWidow",
      originalPrice: 15900000,
      image: "/images.jpeg",
    },
    {
      id: 5,
      title: "مانیتور سامسونگ 27 اینچ منحنی",
      originalPrice: 35900000,
      image: "/images.jpeg",
    }
  ];

  let totalPrice = 0;
  Products.forEach((product)=>totalPrice += Number(product.originalPrice))

  return (
    <div className="flex justify-between gap-6 p-4 w-full m-4">
      <div className="flex flex-col rounded-2xl shadow-xl border border-gray-100 w-2/3  p-4 gap-4">
        <h2 className="text-xl font-bold">سبد خرید</h2>

        {Products.length === 0 && <div>سبد خرید خالی‌ست</div>}
        
        {Products.length > 0 && (
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="p-3 text-right">کالا</th>
                <th className="p-3 text-left">قیمت به تومان</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      width={80} 
                      height={80}
                      className="rounded-md"
                    />
                    <span>{product.title}</span>
                  </td>
                  <td className="p-3">
                    {enTofa(product.originalPrice)} تومان
                  </td>
                </tr>
              ))}
              <tr>
                <td>مجموع:</td>
                <td>{enTofa(totalPrice)} تومان</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {Products.length >0 && (
        <div className="flex flex-col rounded-2xl shadow-xl border border-gray-100  w-1/3  p-4 gap-4">
            <h2 className="text-xl font-bold">اطلاعات شما</h2>
            <form action="" className="flex flex-col gap-3">
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="نام" />
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="ایمیل" />
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="شهر" />
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="کشور" />
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="آدرس" />
                <input type="text" className="p-2 border border-gray-100 rounded-xl" placeholder="کدپستی" />
                <button className="bg-black text-white px-3 py-2 rounded-lg mt-4">پرداخت آنلاین</button>

            </form>

        </div>
      )}
    </div>
  );
}
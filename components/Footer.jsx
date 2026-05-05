

export default function Footer() {
    return(
        <footer>
            <div className="bg-blue-400 ">
                <div className="flex items-start justify-between px-10 py-4 w-2/3">
                    <div className="flex flex-col gap-2 " >
                        <span className="text-white font-bold">راهنمای خرید</span>
                        <ul className="text-white font-extralight pr-2">
                            <li>نحوه ثبت سفارش</li>
                            <li>نحوه ارسال سفارش</li>
                            <li>شیوه‌های پرداخت</li>
                          
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 " >
                        <span className="text-white font-bold">خدمات مشتریان</span>
                        <ul className="text-white font-extralight pr-2">
                            <li>شرایط استفاده</li>
                            <li>حریم خصوصی</li>
                            <li>مرجوعی کالا</li>
                            <li>پرسشهای متداول</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 " >
                        <span className="text-white font-bold">ارتباط با ما</span>
                        <ul className="text-white font-extralight pr-2">
                            <li>اینستاگرام</li>
                            <li>واتساپ</li>
                            <li>تلگرام</li>
                            <li>توییتر</li>
                        </ul>
                    </div>


                </div>
          
            </div>
        </footer>
    )
}
import ProductBox from "./ProductBox"

export default function ProductList({ products = [] }) {  
    if (!products || products.length === 0) {
        return <div>هیچ محصولی یافت نشد</div>
    }
    
    return (
        <div className="flex gap-4 flex-wrap ">
            {products.map((product) => (
                <ProductBox product={product} key={product.id} />
            ))}
        </div>
    )
}
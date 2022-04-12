import React from "react";
import Image from "next/image";

const Product: React.FC<any> = ({ product }: any) => {

    console.log('prodcut comp: ', product);

    return (
        <div className="card">
            <Image src={product.image} height={200} />
            <div>
                <h5 className='text-2xl'>{product.name}</h5>
                <h4 className='text-green-600 text-3xl'>{product.price}</h4>
            </div>
        </div>
    )
}

export default Product
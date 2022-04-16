import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Product: React.FC<any> = ({ product }: any) => {

    const router = useRouter();

    return (
        <Link href={{
            pathname: '/products/[product]',
            query: {product: product.id}
        }}>
            <a className="card">
                {/* height={150} width={150} layout="fixed" */}
                <img src={product.image} />
                <div>
                    <h5 className='text-xl'>{product.title}</h5>
                    <h4 className='text-green-600 text-2xl'>{product.price} EGP</h4>
                </div>
            </a>
        </Link>
    )
}

export default Product
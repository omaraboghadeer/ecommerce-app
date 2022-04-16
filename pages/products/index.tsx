import { GetServerSideProps, NextPage } from "next"
import Head from 'next/head'
import Product from '../../components/Product'

const Products: NextPage = ({products}: any) => {
    console.log(products);

    return (
        <div>
            <Head>
                <title>E-Commerce App - Products of Category Name</title>
                <meta name="description" content="E-Commerce app all products of category name page" />
                <meta name="robots" content="index, archive" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto py-4">
                
                    <h1 className="text-3xl">All Products page</h1>

                    <div className="grid grid-cols-4 gap-4">
                        {
                            products.map((product: any, index: number) => (
                                <Product key={index} product={product} />
                            ))
                        }
                    </div>

            </main>
        </div>
    )
}

export default Products

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
    const data = await response.json();

    return {
        props: {
            products: data
        }
    }

}
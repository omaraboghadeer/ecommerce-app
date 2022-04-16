import { GetServerSideProps, NextPage } from "next"
import Head from 'next/head'

const SignleProduct: NextPage = ({product}: any) => {
    console.log('single product ==== ', product);
    return (
        <>
            <Head>
                <title>E-Commerce App - {product.title}</title>
                <meta name="description" content={product.description} />
                <meta name="robots" content="index, archive" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="pb-6">
                <div className="p-4 bg-emerald-700 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-2xl">{product.title}</h1>
                        <p className="text-base">{product.category}</p>
                    </div>
                </div>

                <br />

                <div className="container mx-auto py-4">
                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="md:w-1/4">
                            <img src={product.image} alt={product.description} />
                        </div>
                        <div className="md:w-3/4 pl-6">
                            <h2 className="text-3xl text-emerald-600 font-bold capitalize">price: {product.price} EGP</h2>
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default SignleProduct



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const {product}: any = params;

    const response = await fetch(`https://fakestoreapi.com/products/${product}`);
    const data = await response.json();

    return {
        props: {
            product: data
        }
    }
}

import { NextPage } from "next"
import Head from 'next/head'

const Help: NextPage = () => {
    return (
        <div>
            <Head>
                <title>E-Commerce App - Help Page</title>
                <meta name="description" content="E-Commerce app help page" />
                <meta name="robots" content="index, archive" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="http://localhost:3000/help" />
            </Head>

            <main>
                <h1>Help page</h1>
            </main>
        </div>
    )
}

export default Help
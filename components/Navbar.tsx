import Link from "next/link";
import Image from 'next/image'
import logo from "../public/vercel.svg"
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <nav className="bg-gray-200">
                <div className="container mx-auto py-3 flex items-center justify-between">
                    <Link href={'/'}>
                        <a>
                            <Image src={logo} alt="E-commerce logo" width={72} height={16} />
                        </a>
                    </Link>

                    <ul className="flex">

                        <li>
                            <Link href='/'>
                                <a className={`text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3 ${router.pathname == "/" ? "bg-emerald-700 text-slate-300" : ""} `}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/products'>
                                <a className={`text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3 ${router.pathname == "/products" ? "bg-emerald-700 text-slate-300" : ""} `}>Products</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/help'>
                                <a className={`text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3 ${router.pathname == "/help" ? "bg-emerald-700 text-slate-300" : ""} `}
                                >Help</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
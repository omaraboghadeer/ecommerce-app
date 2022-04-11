import Link from "next/link";
import Image from 'next/image'
import logo from "../public/vercel.svg"

export default function Navbar() {
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
                            <Link href={'/'}>
                                <a className="text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3">link 1</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <a className="text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3">link 2</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <a className="text-base text-gray-800 hover:bg-emerald-700 hover:text-slate-300 transition-all p-2 mx-3">link 3</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
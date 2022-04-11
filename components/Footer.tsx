import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-6">
                <div className="container mx-auto">
                    <div className="grid grid-rows-1 md:grid-cols-4 gap-4 grid-cols-2">
                        <div>
                            <h5 className="text-2xl mb-4">Title</h5>
                            <ul className="pl-4">
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-2xl mb-4">Title</h5>
                            <ul className="pl-4">
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-2xl mb-4">Title</h5>
                            <ul className="pl-4">
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-2xl mb-4">Title</h5>
                            <ul className="pl-4">
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href={'/'}>
                                        <a className="hover:text-green-500 hover:underline transition duration-150 ease-out ">Link</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
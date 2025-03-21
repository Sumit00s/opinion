import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-black bg-opacity-80 text-white w-full border-b z-50 p-5 backdrop-blur-md">
            <Link href='/'>
                <h1 className="font-bold text-2xl mx-auto text-center">Anonymous Opinions</h1>
            </Link>
        </nav>
    );
}

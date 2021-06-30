import Link from 'next/link'

export default function Header() {

    return (
        <header className="flex justify-between py-1 px-4 bg-gray-900 w-full text-gray-50 font-bold text-3xl">

        <p  className="m-8">
            Magic Eight Ball
        </p>
        <nav  className="m-8">
            <Link
               href=""
            >
                About
            </Link>
        </nav>
    </header>)
}
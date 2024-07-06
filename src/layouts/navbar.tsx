import cn from "@/utils/class-names"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <div className="flex flex-row mt-3 gap-4">
            <Link href={'/'}>
                <span
                    className={cn(
                        'inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-xl font-normal leading-5 text-gray-800 p-4 mr-2 rounded-xl text-center',
                        {
                            'hover:bg-gray-300 transition-all duration-300 ease-out': pathname !== '/',
                            'bg-gray-700 text-white transition-all duration-300 ease-in': pathname === '/',
                        }
                    )}
                >
                    Home
                </span>
            </Link>
            <Link href={'/contact'}>
                <span
                    className={cn(
                        'inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-xl font-normal leading-5 text-gray-800 p-4 mr-2 rounded-xl text-center',
                        {
                            'hover:bg-gray-300 transition-all duration-300 ease-out': pathname !== '/contact',
                            'bg-gray-700 text-white transition-all duration-300 ease-in': pathname === '/contact',
                        }
                    )}
                >
                    Contact
                </span>
            </Link>
        </div>
    )
}

export default Navbar
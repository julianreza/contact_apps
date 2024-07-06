import cn from "@/utils/class-names"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <>
            <Link href={'/'}>
                <span
                    className={cn(
                        'inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-xl font-normal leading-5 text-gray-900 transition-all duration-200',
                        {
                            'group-hover:text-gray-900': pathname !== '/',
                            'text-blue-500': pathname === '/',
                        }
                    )}
                >
                    Home
                </span>
            </Link>
            <Link href={'/contact'}>
                <span
                    className={cn(
                        'inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-xl font-normal leading-5 text-gray-900 transition-all duration-200',
                        {
                            'group-hover:text-gray-900': pathname !== '/contact',
                            'text-blue-500': pathname === '/contact',
                        }
                    )}
                >
                    Contact
                </span>
            </Link>
        </>
    )
}

export default Navbar
'use client';
import Logo from "@/components/atoms/logo";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import cn from "@/utils/class-names";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import { Popover } from "@/components/atoms/popover";
import { Avatar } from "@/components/atoms/avatar";
import Button from "@/components/atoms/button";
import { Text, Title } from "rizzui";
import { useIsMounted } from "@/hooks/use-is-mounted";

const Header = () => {
    const isMounted = useIsMounted();
    const windowScroll = useWindowScroll();

    return (
        <header
            className={cn(
                'sticky flex items-center justify-between bg-gray-0/80 px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 2xl:py-5 2xl:pl-6 3xl:px-8',
                ((isMounted && windowScroll.y) as number) > 2 ? 'card-shadow' : ''
            )}
        >
            <div className="hidden items-center gap-3 xl:flex flex-row justify-center">
                <Link
                    aria-label="Site Logo"
                    href={'/'}
                    className="hidden w-[130px] shrink-0 text-gray-900 xl:block"
                >
                    <Logo className="max-w-[155px]" />
                </Link>
                <Navbar />
            </div>
            <div className="flex w-full items-center gap-5 xl:w-auto 3xl:gap-6 mr-4 z-50">
                <Popover
                    enableOverlay
                    placement="bottom-end"
                    showArrow={false}
                >
                    <Popover.Trigger>
                        <button
                            className={cn(
                                'w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10'
                            )}
                        >
                            <Avatar
                                src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp"
                                name="John Doe"
                                color="warning"
                                className={cn('!h-9 w-9 sm:!h-10 sm:w-10')}
                            />
                        </button>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white z-50 rounded-3xl">
                        <div className="w-64 text-left rtl:text-right">
                            <div className="flex items-center px-6 pb-5 pt-6">
                                <div className="ms-3">
                                    <Title as="h6" className="font-semibold">
                                        Albert Flores
                                    </Title>
                                    <Text className="text-gray-600">flores@doe.io</Text>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="border-t border-gray-300 px-6 pb-6 pt-5">
                            <Button
                                className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
                            >
                                Sign Out
                            </Button>
                        </div>
                    </Popover.Content>
                </Popover>
            </div>
        </header>
    )
}

export default Header
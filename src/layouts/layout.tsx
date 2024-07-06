import Header from "./header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-grow bg-white">
            <div className="flex w-full flex-col">
                <Header/>
                <div className="flex flex-grow flex-col mx-10 mb-4">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout
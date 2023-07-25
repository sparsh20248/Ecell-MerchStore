import Link from "next/link";
import { useState } from "react";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import router from "next/router";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            router.push(`/results?title=${search}`);
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="w-full flex flex-row justify-between py-10">
                    <div></div>
                    <div className="space-x-10">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/about">Contact</Link>
                    </div>
                    <div className="flex flex-row space-x-7">
                        <div className="flex flex-row justify-center text-center">
                            <input
                                className="h-[22px] w-[200px] rounded-md mx-[10px] text-center text-slate-900"
                                placeholder="Find A Product"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                onKeyDown={handleKeyDown}
                            />
                            <Link href={`/results?title=${search}`} passHref>
                                <SearchIcon className="w-[21.62px] h-[21.62px]" />
                            </Link>
                        </div>
                        <Link href="/cart" passHref>
                            <ShoppingCartIcon className="w-[21.62px] h-[21.62px]" />
                        </Link>
                        <button className="connectBtn uppercase font-bold">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .connectBtn {
                    backdrop-filter: blur(94.4184px);
                    border: 3.15px solid;
                    border-image-source: linear-gradient(
                        145.77deg,
                        #b859d6 0%,
                        #2163ab 105.76%
                    );
                }
            `}</style>
        </>
    );
};

export default Navbar;

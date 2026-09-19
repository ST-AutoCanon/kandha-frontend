import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });

        setIsOpen(false);
    }, [location.pathname]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Solutions", path: "/solutions" },
        { name: "Homologation", path: "/homologation" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

            {/* =====================================================
                MAIN NAVBAR
            ===================================================== */}
            <div
                className="
                    mx-auto
                    flex
                    h-[68px]
                    w-full
                    max-w-[1440px]
                    items-center
                    justify-between
                    px-4

                    sm:h-[72px]
                    sm:px-6

                    lg:h-[76px]
                    lg:px-10

                    xl:px-12
                "
            >

                {/* =================================================
                    LOGO + BRAND
                ================================================= */}
                <Link
                    to="/"
                    className="
                        flex
                        min-w-0
                        shrink-0
                        items-center
                    "
                >
                    <div
                        className="
                            flex
                            h-[62px]
                            w-auto
                            items-center

                            sm:h-[68px]

                            lg:h-[70px]
                            lg:w-[250px]
                        "
                    >

                        {/* KANDHA LOGO */}
                        <div
                            className="
                                flex
                                h-[62px]
                                w-[58px]
                                shrink-0
                                items-center
                                justify-center

                                sm:h-[66px]
                                sm:w-[65px]

                                lg:h-[76px]
                                lg:w-[90px]
                                lg:mr-10
                            "
                        >
                            <img
                                src="/Kandhalogo.png"
                                alt="Kandha Logo"
                                className="
                                    h-[54px]
                                    w-[58px]
                                    object-contain

                                    sm:h-[60px]
                                    sm:w-[65px]

                                    lg:h-[72px]
                                    lg:w-[85px]
                                    lg:translate-x-8
                                "
                            />
                        </div>

                        {/* BRAND TEXT */}
                        <div
                            className="
                                flex
                                min-w-0
                                flex-col
                                justify-center

                                lg:translate-x-9
                            "
                        >

                            {/* KANDHA */}
                            <span
                                className="
                                    text-center
                                    text-[19px]
                                    font-bold
                                    leading-none
                                    tracking-[0.04em]
                                    text-[#0A2D63]

                                    sm:text-[22px]

                                    lg:text-[25px]
                                "
                            >
                                KANDHA
                            </span>

                            {/* ENGINEERING TECH SOLUTIONS */}
                            <span
                                className="
                                    whitespace-nowrap
                                    text-[6px]
                                    font-semibold
                                    tracking-[0.12em]
                                    text-[#E5A719]

                                    sm:text-[7px]
                                    sm:tracking-[0.14em]

                                    lg:text-[9px]
                                    lg:tracking-[0.16em]
                                "
                            >
                                ENGINEERING TECH SOLUTIONS
                            </span>

                            {/* TAGLINE */}
                            <span
                                className="
                                    mt-[2px]
                                    whitespace-nowrap
                                    text-[5px]
                                    font-medium
                                    tracking-[0.08em]
                                    text-[#0A2D63]

                                    sm:text-[6px]
                                    sm:tracking-[0.1em]

                                    lg:text-[8px]
                                    lg:tracking-[0.12em]
                                "
                            >
                                ____ ONCE YOU TEST YOU KNOW ____
                            </span>

                        </div>

                    </div>
                </Link>


                {/* =====================================================
                    DESKTOP NAVIGATION
                ===================================================== */}
                <nav
                    className="
                        hidden
                        items-center
                        gap-7

                        lg:flex
                        xl:gap-8
                    "
                >
                    {navItems.map((item) => {
                        const active = isActive(item.path);

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`
                                    relative
                                    py-7
                                    text-[15px]
                                    font-medium
                                    transition-colors
                                    duration-200

                                    ${active
                                        ? "text-[#111827]"
                                        : "text-[#003B70] hover:text-[#E5A719]"
                                    }
                                `}
                            >
                                {item.name}

                                {/* ACTIVE UNDERLINE */}
                                <span
                                    className={`
                                        absolute
                                        -bottom-[1px]
                                        left-0
                                        right-0
                                        h-[3px]
                                        rounded-full
                                        bg-[#E5A719]
                                        transition-all
                                        duration-200

                                        ${active
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0"
                                        }
                                    `}
                                />
                            </Link>
                        );
                    })}
                </nav>


                {/* =====================================================
                    LOGIN - DESKTOP
                ===================================================== */}
                <div
                    className="
                        hidden
                        lg:block
                        lg:-translate-x-6
                    "
                >
                    <button
                        type="button"
                        className="
    flex
    h-[42px]
    min-w-[125px]
    items-center
    justify-center
    gap-3
    rounded-full
    bg-[#E9A91F]
    px-6
    text-[13px]
    font-semibold
    text-white
    shadow-sm
    transition-all
    duration-200

    hover:bg-[#D9960F]
    hover:shadow-md
  "
                    >
                        <span>Login</span>
                    </button>
                </div>


                {/* =====================================================
                    MOBILE MENU BUTTON
                ===================================================== */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        text-[#0A2D63]

                        sm:h-11
                        sm:w-11

                        lg:hidden
                    "
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X
                            size={27}
                            strokeWidth={2}
                        />
                    ) : (
                        <Menu
                            size={27}
                            strokeWidth={2}
                        />
                    )}
                </button>

            </div>


            {/* =====================================================
                MOBILE NAVIGATION
            ===================================================== */}
            {isOpen && (
                <div
                    className="
                        border-t
                        border-gray-100
                        bg-white
                        px-4
                        py-4
                        shadow-md

                        sm:px-6
                        sm:py-5

                        lg:hidden
                    "
                >
                    <nav className="flex flex-col">

                        {navItems.map((item) => {
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => {
                                        setIsOpen(false);
                                        window.scrollTo(0, 0);
                                    }}

                                    className={`
                                        flex
                                        min-h-[44px]
                                        items-center
                                        justify-between
                                        border-b
                                        border-gray-100
                                        py-3
                                        text-[14px]
                                        font-medium

                                        ${active
                                            ? "text-[#E5A719]"
                                            : "text-[#003B70]"
                                        }
                                    `}
                                >
                                    <span>{item.name}</span>

                                    {/* MOBILE ACTIVE INDICATOR */}
                                    {active && (
                                        <span className="h-2 w-2 rounded-full bg-[#E5A719]" />
                                    )}
                                </Link>
                            );
                        })}


                        {/* =================================================
                            MOBILE GET IN TOUCH
                        ================================================= */}
                        <button
                            type="button"
                            className="
    flex
    h-[42px]
    min-w-[125px]
    items-center
    justify-center
    gap-3
    rounded-full
    bg-[#E9A91F]
    px-6
    text-[13px]
    font-semibold
    text-white
    shadow-sm
    transition-all
    duration-200

    hover:bg-[#D9960F]
    hover:shadow-md
  "
                        >
                            <span>Login</span>
                        </button>

                    </nav>
                </div>
            )}

        </header>
    );
};

export default Navbar;
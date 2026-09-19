import React from "react";

const LinkedinIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
    >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46Z" />
    </svg>
);

const XIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
    >
        <path d="M18.24 2H21.8l-7.77 8.88L23.17 22h-7.5l-5.87-7.67L3.1 22H-.47l8.32-9.51L-.83 2h7.69l5.31 7.03L18.24 2Zm-1.25 17.82h1.97L5.15 4.08H3.03L16.99 19.82Z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
    >
        <path d="M23.5 6.19a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.01 3.01 0 0 0 .5 6.19 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.81 3.01 3.01 0 0 0 2.12 2.13c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.01 3.01 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.81ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
);

const Footer = () => {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Solutions", href: "/solutions" },
        { label: "Homologation", href: "/homologation" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <footer className="w-full bg-[#063968] text-white">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

                {/* =====================================================
                    MAIN FOOTER
                ====================================================== */}
                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        py-8

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >

                    {/* =================================================
                        LOGO + BRAND
                    ================================================= */}
                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-center

                            lg:justify-start
                        "
                    >
                        <a
                            href="/"
                            className="flex items-center"
                        >
                            <div className="flex items-center">

                                {/* Kandha Logo */}
                                <div
                                    className="
                                        flex
                                        h-[76px]
                                        w-[85px]
                                        shrink-0
                                        items-center
                                        justify-center

                                        sm:h-[76px]
                                        sm:w-[85px]
                                    "
                                >
                                    <img
                                        src="logo1.png"
                                        alt="Kandha Logo"
                                        className="
                                            h-[68px]
                                            w-[80px]
                                            object-contain
                                            translate-x-0

                                            sm:translate-x-4
                                        "
                                    />
                                </div>

                                {/* Brand Text */}
                                <div
                                    className="
                                        flex
                                        flex-col
                                        justify-center
                                        translate-x-2

                                        sm:translate-x-6
                                    "
                                >
                                    {/* KANDHA */}
                                    <span
                                        className="
                                            text-center
                                            text-[22px]
                                            font-bold
                                            leading-none
                                            tracking-[0.04em]
                                            text-white

                                            sm:text-[25px]
                                        "
                                    >
                                        KANDHA
                                    </span>

                                    {/* Electronic Tech solutions */}
                                    <span
                                        className="
                                            mt-1
                                            whitespace-nowrap
                                            text-[8px]
                                            font-semibold
                                            tracking-[0.12em]
                                            text-[#E5A719]

                                            sm:text-[9px]
                                            sm:tracking-[0.14em]
                                        "
                                    >
                                        ENGINEERING TECH SOLUTIONS
                                    </span>

                                    {/* Tagline */}
                                    <span
                                        className="
                                            mt-[3px]
                                            whitespace-nowrap
                                            text-[7px]
                                            font-medium
                                            tracking-[0.08em]
                                            text-white/80

                                            sm:text-[8px]
                                            sm:tracking-[0.1em]
                                        "
                                    >
                                        ____ ONCE YOU TEST YOU KNOW ____
                                    </span>
                                </div>

                            </div>
                        </a>
                    </div>


                    {/* =================================================
                        NAVIGATION + SOCIAL AREA
                    ================================================= */}
                    <div className="flex flex-1 flex-col">

                        {/* =================================================
                            NAVIGATION + SOCIAL
                        ================================================= */}
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-6

                                lg:flex-row
                                lg:items-center
                                lg:justify-between
                                lg:gap-0
                            "
                        >

                            {/* =================================================
                                NAVIGATION
                            ================================================= */}
                            <nav
                                className="
                                    grid
                                    w-full
                                    grid-cols-2
                                    gap-x-6
                                    gap-y-4
                                    text-center

                                    sm:grid-cols-4
                                    sm:gap-x-8

                                    lg:flex
                                    lg:w-auto
                                    lg:flex-wrap
                                    lg:items-center
                                    lg:justify-center
                                    lg:gap-x-8
                                    lg:gap-y-4
                                    lg:justify-end
                                    lg:translate-x-[105px]
                                "
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="
                                            text-[12px]
                                            font-medium
                                            text-white

                                            sm:text-[13px]

                                            lg:transition-colors
                                            lg:duration-200
                                            lg:hover:text-[#E9A91F]
                                        "
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>


                            {/* =================================================
                                SOCIAL ICONS
                            ================================================= */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-5
                                    translate-x-0

                                    lg:translate-x-[-35px]
                                "
                            >
                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-md
                                        border
                                        border-white/60
                                        text-white

                                        lg:transition-all
                                        lg:duration-200
                                        lg:hover:border-[#E9A91F]
                                        lg:hover:text-[#E9A91F]
                                    "
                                >
                                    <LinkedinIcon />
                                </a>

                                {/* X */}
                                <a
                                    href="#"
                                    aria-label="X"
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-md
                                        border
                                        border-white/60
                                        text-white

                                        lg:transition-all
                                        lg:duration-200
                                        lg:hover:border-[#E9A91F]
                                        lg:hover:text-[#E9A91F]
                                    "
                                >
                                    <XIcon />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-md
                                        border
                                        border-white/60
                                        text-white

                                        lg:transition-all
                                        lg:duration-200
                                        lg:hover:border-[#E9A91F]
                                        lg:hover:text-[#E9A91F]
                                    "
                                >
                                    <YoutubeIcon />
                                </a>
                            </div>

                        </div>


                        {/* =================================================
    DIVIDER
================================================= */}
<div
    className="
        relative top-6
        h-px
        w-full
        bg-white/30

        lg:w-[calc(100%-20px)]
    "
/>

{/* SPACE BETWEEN DIVIDER AND COPYRIGHT */}
<div className="h-8 w-full" />
                    </div>
                </div>


               
              
{/* =====================================================
    BOTTOM FOOTER
====================================================== */}
<div
    className="
        flex
        flex-col
        items-center
        gap-4
        py-4
        text-[10px]
        text-white/90

        sm:text-[11px]

        md:flex-row
        md:items-center
        md:justify-between
    "
>
    {/* COPYRIGHT */}
    <p
        className="
            w-full
            text-center
            translate-x-0

            md:w-auto
            md:text-left

            lg:translate-x-[400px]
        "
    >
        © 2025 Kandha Engineering Tech Solutions.
        <span className="hidden sm:inline"> </span>
        <span className="sm:hidden">
            <br />
        </span>
        All Rights Reserved.
    </p>

    {/* BOTTOM LINKS */}
    <div
        className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-2

            md:justify-end

            lg:gap-4
            lg:translate-x-[-20px]
        "
    >
        <a
            href="/privacy-policy"
            className="
                text-[10px]
                sm:text-[11px]
                lg:transition-colors
                lg:hover:text-[#E9A91F]
            "
        >
            Privacy Policy
        </a>

        <span className="text-white/40">|</span>

        <a
            href="/terms-of-use"
            className="
                text-[10px]
                sm:text-[11px]
                lg:transition-colors
                lg:hover:text-[#E9A91F]
            "
        >
            Terms of Use
        </a>

        <span className="text-white/40">|</span>

        <a
            href="/sitemap"
            className="
                text-[10px]
                sm:text-[11px]
                lg:transition-colors
                lg:hover:text-[#E9A91F]
            "
        >
            Sitemap
        </a>
    </div>
</div>


                {/* Bottom gap */}
                <div className="h-4 w-full sm:h-6" />

            </div>
        </footer>
    );
};

export default Footer;
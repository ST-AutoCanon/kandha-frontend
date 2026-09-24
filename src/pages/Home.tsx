import heroImage from "../assets/hero-right-image.png";
import herorightimage from "../assets/herorightImage.png";
import expertise from "../assets/expertise-right-image.png";
import automotive from "../assets/automotive.png";
import aerospace from "../assets/aerospace.png";
import defence from "../assets/defence-homeland-security.png";
import energy from "../assets/energy-renewables.png";
import industrial from "../assets/industrial-products.png";
import consumer from "../assets/consumer-goods.png";
import ctaImage from "../assets/cta.png";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";

import {

    Settings,
    ChartNoAxesCombined,
    Box,
    BadgeCheck,
    Megaphone,
    Wrench,
    SearchCheck,
    ArrowRight,
    Lightbulb,
    Handshake,
    Globe2,
    ClipboardList,
    ChevronRight,
    FileCheck2,
    Headphones,
} from "lucide-react";

const Home = () => {
    return (
        <main className="w-full overflow-x-hidden bg-white">


            {/* =========================================================
    HERO SECTION
========================================================= */}
            <section
                className="
        relative
        w-full
        overflow-hidden
        bg-white

        h-[600px]

        sm:h-[560px]

        md:h-[420px]

        lg:h-[450px]
    "
            >
                {/* =====================================================
        DESKTOP HERO IMAGE
        Desktop remains the same diagonal layout
    ===================================================== */}
                <div
                    className="
            absolute
            inset-y-0
            right-0
            z-0
            hidden

            md:block
            md:w-[62.5%]
        "
                    style={{
                        clipPath:
                            "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <img
                        src={heroImage}
                        alt="Kandha Engineering Test Equipment"
                        className="
                h-full
                w-full
                object-cover
                object-center
            "
                    />
                </div>


                {/* =====================================================
        MOBILE HERO IMAGE
        Image starts BELOW the blue content area
    ===================================================== */}
                <div
                    className="
            absolute
            bottom-0
            left-0
            z-0
            h-[250px]
            w-full

            sm:h-[250px]

            md:hidden
        "
                >
                    <img
                        src={herorightimage}
                        alt="Kandha Engineering Test Equipment"
                        className="
                h-full
                w-full
                object-cover
                object-center
            "
                    />
                </div>


                {/* =====================================================
        DESKTOP BLUE DIAGONAL PANEL
    ===================================================== */}
                <div
                    className="
            absolute
            left-0
            top-0
            z-10
            hidden

            md:block
            md:h-full
            md:w-[50%]
        "
                    style={{
                        backgroundColor: "#063968",
                        clipPath:
                            "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
                    }}
                />


                {/* =====================================================
        MOBILE BLUE TOP PANEL

        Blue content area first,
        image starts after it
    ===================================================== */}
                <div
                    className="
            absolute
            left-0
            top-0
            z-10
            h-[350px]
            w-full
            bg-[#063968]

            sm:h-[310px]

            md:hidden
        "
                />
                {/* =====================================================
        HERO CONTENT
    ===================================================== */}
                <div
                    className="
        relative
        z-20
        mx-auto
        h-full
        max-w-[1440px]
    "
                >
                    <div
                        className="
            absolute
            left-[20px]
            top-[60px]
            z-20
            w-[calc(100%-40px)]

            sm:left-[32px]
            sm:top-[55px]
            sm:w-[calc(100%-64px)]

            md:left-[50px]
            md:top-1/2
            md:w-[40%]
            md:-translate-y-1/2
            md:px-0
            md:pt-0

            lg:left-[40px]
        "
                    >

                        {/* TOP LABEL */}
                        <p
                            className="
                mb-3
                text-[9px]
                font-bold
                tracking-[0.10em]
                text-[#E9A91F]

                sm:text-[10px]

                md:text-[12px]
                md:tracking-[0.12em]

                lg:text-[12px]
            "
                        >
                            TRUSTED PARTNER&nbsp;&nbsp; | &nbsp;&nbsp;
                            INNOVATION&nbsp;&nbsp; | &nbsp;&nbsp;
                            EXCELLENCE
                        </p>

                        {/* HEADING */}
                        <h1
                            className="
                text-[28px]
                font-bold
                leading-[1.08]
                text-white

                sm:text-[34px]

                md:text-[44px]

                lg:text-[50px]
                -translate-x-[6px]
            "
                        >
                            Turning Ideas into

                            <span className="block text-[#E9A91F]">
                                Engineering Excellence
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p
                            className="
                mt-3
                max-w-[500px]
                text-[11px]
                leading-[1.4rem]
                text-white/85

                sm:text-[12px]

                md:mt-4
                md:text-[14px]
                md:leading-[1.5rem]
            "
                        >
                            Kandha Engineering Tech Solutions (KETS) offers
                            high-quality, reliable, and sustainable testing
                            solutions for the automotive, aerospace, defence
                            and other industries across the globe.
                        </p>

                        {/* BUTTON */}
                        <div className="relative top-5 mt-5 md:mt-6">
                            <Link
                                to="/solutions"
                                className="
                    inline-flex
                    h-[42px]
                    min-w-[175px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#E9A91F]
                    px-5
                    text-[12px]
                    font-bold
                    text-white
                    transition-all

                    md:h-[46px]
                    md:min-w-[185px]
                    md:px-6
                    md:text-[13px]

                    md:hover:bg-[#D9960F]
                "
                            >
                                Explore Our Solutions

                                <ArrowRight
                                    size={17}
                                    strokeWidth={2.5}
                                />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================================
    SERVICES STRIP
========================================================= */}
            <section
                className="
        w-full
        border-b
        border-[#d7eaf3]
        bg-[#eef9fd]
        py-0
    "
            >
                <div className="w-full">

                    <div
                        className="
                grid
                w-full
                grid-cols-2
                border-t
                border-[#d7eaf3]
                bg-white

                sm:grid-cols-4

                lg:grid-cols-7
            "
                    >

                        {/* =====================================================
                1. DESIGN & ENGINEERING
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <Settings
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Design &amp;
                                <br />
                                Engineering
                            </p>
                        </div>


                        {/* =====================================================
                2. DATA ANALYSIS
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <ChartNoAxesCombined
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Data
                                <br />
                                Analysis
                            </p>
                        </div>


                        {/* =====================================================
                3. PROTOTYPING & BUILD
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <Box
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Prototyping
                                <br />
                                &amp; Build
                            </p>
                        </div>


                        {/* =====================================================
                4. CERTIFICATION & COMPLIANCE
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <BadgeCheck
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Certification &amp;
                                <br />
                                Compliance
                            </p>
                        </div>


                        {/* =====================================================
                5. TESTING & VALIDATION
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <Megaphone
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Testing &amp;
                                <br />
                                Validation
                            </p>
                        </div>


                        {/* =====================================================
                6. AFTER SALES SUPPORT
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center

                    sm:border-b-0
                "
                        >
                            <Wrench
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                After Sales Support
                                <br />
                                &amp; Lifecycle Services
                            </p>
                        </div>


                        {/* =====================================================
                7. MAINTENANCE SERVICES
            ===================================================== */}
                        <div
                            className="
                    flex
                    min-h-[100px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-[#d7eaf3]
                    px-3
                    py-4
                    text-center
                "
                        >
                            <SearchCheck
                                size={32}
                                strokeWidth={1.8}
                                className="mb-2 shrink-0 text-[#063968]"
                            />

                            <p
                                className="
                        text-[11px]
                        font-semibold
                        leading-[1.25]
                        text-[#063968]
                        sm:text-[13px]
                    "
                            >
                                Maintenance
                                <br />
                                Services
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* GAP */}
            <div className="h-[10px] w-full bg-gray-200 sm:h-[15px]" />



            {/* =========================================================
    OUR EXPERTISE
========================================================= */}
            <section className="relative w-full overflow-hidden bg-white">
                <div className=" relative mx-auto w-full  lg:min-h-[330px] " >
                    {/* ===================================================== LEFT CONTENT ===================================================== */}
                    <div
                        className="
    relative
    z-30

    left-[20px]
    w-[calc(100%-40px)]

    pt-10
    pb-14

    sm:left-[32px]
    sm:w-[calc(100%-64px)]
    sm:pt-10
    sm:pb-14

    lg:static
    lg:left-auto
    lg:w-[48%]
    lg:min-h-[330px]
    lg:px-0
    lg:py-8
    lg:pb-8
  "
                    >
                        <div
                            className="
            w-full
            translate-x-0
            pr-2

            sm:translate-x-0
            sm:pr-2

            lg:translate-x-[40px]
            lg:pr-8
        "
                        >
                            {/* ================================================= LABEL ================================================= */}
                            <p className=" text-[12px] font-bold leading-none tracking-[0.12em] text-[#E9A91F] sm:text-[15px] translate-y-2" >
                                OUR EXPERTISE
                            </p>
                            {/* MOBILE / TABLET GAP */}
                            <div className=" h-[12px] sm:h-[14px] lg:hidden " />
                            {/* ================================================= HEADING ================================================= */}
                            <h2 className=" mt-0 text-[25px] font-bold leading-[1.15] text-[#063968] sm:text-[30px] md:text-[36px] lg:translate-y-[12px] lg:text-[40px] " >
                                <span className="block"> Your Engineering &amp; Technology </span>
                                <span className="mt-2 block"> Consulting Partner </span>
                            </h2>
                            {/* ================================================= DESCRIPTION ================================================= */}
                            <p className=" mt-6 max-w-[500px] text-[11px] leading-[1.5rem] text-[#17466f] sm:mt-6 sm:text-[12px] md:text-[13px] lg:translate-y-[20px] lg:mt-6 " >
                                Kandha Engineering Tech Solutions (KETS) offers end-to-end solutions in engineering, testing and validation,
                                with deep domain expertise across the automotive, aerospace, defence and industrial sectors. We help you innovate,
                                optimize and achieve compliance with global standards, delivering reliable and future-ready solutions.
                            </p> {/* ================================================= LEARN MORE ================================================= */}
                            <div className=" mt-7 sm:mt-8 lg:mt-7 lg:translate-y-[30px] " >
                                <Link to="/about" className=" inline-flex h-[42px] w-[145px] items-center justify-center gap-1 rounded-full border-2 border-[#E9A91F] text-[12px] font-bold leading-none whitespace-nowrap text-[#063968] transition-all duration-200 md:h-[44px] md:w-[155px] md:text-[13px] lg:hover:bg-[#E9A91F] lg:hover:text-white " >
                                    <span>Learn More</span>
                                    <ArrowRight size={17}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* =====================================================
            DESKTOP RIGHT IMAGE
        ===================================================== */}
                    <div
                        className="
                absolute
                right-0
                top-0
                z-20
                hidden
                h-[300px]
                w-[52%]

                lg:block
            "
                    >
                        <img
                            src={expertise}
                            alt="Engineering and Technology Expertise"
                            className="
                    h-full
                    w-full
                    object-cover
                    object-center
                "
                        />
                    </div>


                    {/* =====================================================
            MOBILE IMAGE
        ===================================================== */}
                    <div
                        className="
                relative
                top-5
                h-[210px]
                w-full
                overflow-hidden

                sm:h-[240px]

                lg:hidden
            "
                    >
                        <img
                            src={expertise}
                            alt="Engineering and Technology Expertise"
                            className="
                    h-full
                    w-full
                    object-cover
                    object-center
                "
                        />
                    </div>

                </div>
            </section>



            {/* =========================================================
                HOMOLOGATION SUPPORT
            ========================================================= */}
            <section className="relative w-full overflow-hidden bg-[#FFF5E8]">

                {/* Background */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('/assets/homologation-bg.png')",
                        }}
                    />
                </div>


                <div
                    className="
    relative
    z-10

    left-[20px]
    w-[calc(100%-40px)]

    py-7

    sm:left-[32px]
    sm:w-[calc(100%-64px)]
    sm:py-8

    lg:static
    lg:left-auto
    lg:w-auto
    lg:max-w-[1440px]
    lg:min-h-[330px]
    lg:px-[50px]
  "
                >



                    {/* NEW SERVICE */}
                    <div
                        className="
        relative
        left-0
        top-2

        sm:top-2

        lg:left-[36px]
        lg:top-3
    "
                    >
                        <span
                            className="
        relative
        top-[6px]
        inline-flex
        h-[28px]
        min-w-[120px]
        items-center
        justify-center
        rounded-full
        bg-[#E9A91F]
        px-5
        text-[10px]
        font-bold
        uppercase
        tracking-[0.08em]
        leading-none
        text-white

        lg:top-0
        lg:h-[30px]
        lg:min-w-[125px]
        lg:text-[11px]
    "
                        >
                            NEW SERVICE
                        </span>
                    </div>

                    <div className="h-[20px] lg:h-[25px]" />


                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-8

                            lg:grid-cols-[1.05fr_0.75fr_1.6fr]
                            lg:gap-0
                        "
                    >

                        {/* =================================================
                            LEFT - HOMOLOGATION SUPPORT
                        ================================================= */}
                        <div
                            className="
                                relative
                                left-0
                                pr-0

                                lg:left-[36px]
                                lg:pr-10
                            "
                        >

                            <h2
                                className="
                                    text-[26px]
                                    font-bold
                                    leading-[1.1]
                                    text-[#063968]

                                    sm:text-[30px]

                                    md:text-[32px]
                                    lg:text-[34px]
                                "
                            >
                                Homologation Support
                            </h2>

                            <div className="h-[5px]" />

                            <h3
                                className="
                                    text-[15px]
                                    font-bold
                                    leading-[1.2]
                                    text-[#063968]

                                    sm:text-[17px]
                                "
                            >
                                From Compliance to Global Market Access
                            </h3>

                            <div className="h-[15px] lg:h-[18px]" />

                            <p
                                className="
                                    max-w-[430px]
                                    text-[11px]
                                    leading-[1.5rem]
                                    text-[#17466f]

                                    sm:text-[12px]

                                    md:text-[13px]
                                "
                            >
                                <span className="font-bold text-[#063968]">
                                    Homologation
                                </span>{" "}
                                is the process of certifying a product to meet
                                regulatory and safety standards required for it
                                to be legally sold and used in specific markets.
                                We support you through the complete homologation
                                process, ensuring your products meet global
                                standards and reach new markets with confidence.
                            </p>

                            <div className="h-[8px]" />


                            <div
                                className="
        mt-2
        lg:relative
        lg:top-2
    "
                            >
                                <Link
                                    to="/homologation"
                                    className="
            inline-flex
            h-[36px]
            w-[125px]
            items-center
            justify-center
            rounded-full
            border-2
            border-[#E9A91F]
            text-[11px]
            font-bold
            text-[#063968]
            transition-all
            duration-200

            md:hover:bg-[#E9A91F]
            md:hover:text-white
        "
                                >
                                    <span>Learn More</span>

                                    <ArrowRight
                                        size={15}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>



                        </div>


                        {/* =================================================
                            MIDDLE - WHAT IS HOMOLOGATION
                        ================================================= */}
                        <div
                            className="
    ml-[20px]
    h-auto
    min-h-[190px]
    w-full
    max-w-full
    overflow-hidden
    rounded-lg
    border
    border-[#D9D9D9]
    bg-white/40
    px-5
    py-5

    lg:ml-[15px]
    lg:h-[190px]
    lg:max-w-full
    lg:translate-x-[35px]
    lg:px-6
    lg:py-[15px]
  "
                        >
                            <div className="relative left-[10px] w-[calc(100%-10px)] lg:left-[15px] lg:w-full">

                                {/* TITLE */}
                                <div className="flex w-full items-center gap-3 translate-y-2">

                                    <div
                                        className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#063968]

                    lg:h-[46px]
                    lg:w-[46px]
                "
                                    >
                                        <Globe2
                                            size={25}
                                            strokeWidth={1.8}
                                            className="text-[#063968]"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3
                                            className="
                        text-[13px]
                        font-bold
                        leading-tight
                        text-[#063968]
                        sm:text-[14px]
                    "
                                        >
                                            What is Homologation?
                                        </h3>

                                        <div className="mt-1 h-[2px] w-[115px] bg-[#E9A91F]" />
                                    </div>

                                </div>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                mt-3
                w-full
                max-w-full
                break-words
                text-[11px]
                leading-[1.45rem]
                text-[#17466f]

                sm:text-[12px]
                translate-y-4
            "
                                >
                                    Homologation is the certification process
                                    that ensures a product complies with the
                                    technical and regulatory requirements of
                                    a country or region.
                                </p>

                            </div>
                        </div>


                        {/* =================================================
                            RIGHT - HOMOLOGATION PROCESS
                        ================================================= */}
                        <div
                            className="
                                translate-x-0
                                pt-0

                                lg:translate-x-[40px]
                                lg:px-7
                                lg:pt-0
                            "
                        >

                            <h3
                                className="
                                    relative
                                    left-0
                                    text-[14px]
                                    font-bold
                                    text-[#063968]

                                    lg:left-5
                                    lg:text-[15px]
                                "
                            >
                                Our Homologation Process
                            </h3>

                            <div
                                className="
                                  relative top-5
                                    mt-5
                                    grid
                                    grid-cols-2
                                    md:grid-cols-4
                                "
                            >

                                {/* STEP 1 */}
                                <div className="relative px-2 text-center">

                                    <div className="flex items-center justify-center">

                                        <div
                                            className="
                                                flex
                                                h-[45px]
                                                w-[45px]
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#063968]

                                                lg:h-[48px]
                                                lg:w-[48px]
                                            "
                                        >
                                            <ClipboardList
                                                size={22}
                                                strokeWidth={1.8}
                                                className="text-white"
                                            />
                                        </div>

                                    </div>

                                    <p className="mt-3 text-[10px] font-bold text-[#063968] lg:text-[11px]">
                                        1. Requirement
                                        <span className="block">
                                            Analysis
                                        </span>
                                    </p>

                                    <p className="mt-2 text-[9px] leading-[1.2rem] text-[#17466f] lg:text-[10px]">
                                        Understand market
                                        regulations &amp;
                                        standards
                                    </p>
                                </div>


                                {/* STEP 2 */}
                                <div
                                    className="
                                        relative
                                        border-l
                                        border-[#D9D9D9]
                                        px-2
                                        text-center
                                    "
                                >

                                    <div className="flex items-center justify-center">

                                        <div
                                            className="
                                                flex
                                                h-[45px]
                                                w-[45px]
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#063968]

                                                lg:h-[48px]
                                                lg:w-[48px]
                                            "
                                        >
                                            <Settings
                                                size={22}
                                                strokeWidth={1.8}
                                                className="text-white"
                                            />
                                        </div>

                                    </div>

                                    <p className="mt-3 text-[10px] font-bold text-[#063968] lg:text-[11px]">
                                        2. Testing &amp;
                                        <span className="block">
                                            Validation
                                        </span>
                                    </p>

                                    <p className="mt-2 text-[9px] leading-[1.2rem] text-[#17466f] lg:text-[10px]">
                                        Conduct required
                                        tests and evaluations
                                    </p>

                                </div>


                                {/* STEP 3 */}
                                <div
                                    className="
                                        relative
                                        border-l
                                        border-[#D9D9D9]
                                        px-2
                                        text-center
                                    "
                                >

                                    <div className="flex items-center justify-center">

                                        <div
                                            className="
                                                flex
                                                h-[45px]
                                                w-[45px]
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#063968]

                                                lg:h-[48px]
                                                lg:w-[48px]
                                            "
                                        >
                                            <FileCheck2
                                                size={22}
                                                strokeWidth={1.8}
                                                className="text-white"
                                            />
                                        </div>



                                    </div>

                                    <p className="mt-3 text-[10px] font-bold text-[#063968] lg:text-[11px]">
                                        3. Certification
                                        <span className="block">
                                            &amp; Approval
                                        </span>
                                    </p>

                                    <p className="mt-2 text-[9px] leading-[1.2rem] text-[#17466f] lg:text-[10px]">
                                        Obtain regulatory
                                        certificates
                                    </p>

                                </div>

                                {/* STEP 4 */}
                                <div
                                    className="
        relative
        border-l
        border-[#D9D9D9]
        px-2
        text-center

        lg:min-w-[125px]
        lg:-translate-x-[12px]
    "
                                >
                                    <div className="flex items-center justify-center">
                                        <div
                                            className="
                flex
                h-[45px]
                w-[45px]
                items-center
                justify-center
                rounded-full
                bg-[#063968]

                lg:h-[48px]
                lg:w-[48px]
            "
                                        >
                                            <Globe2
                                                size={22}
                                                strokeWidth={1.8}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-3 text-[10px] font-bold text-[#063968] lg:text-[11px]">
                                        4. Market
                                        <span className="block">
                                            Access
                                        </span>
                                    </p>

                                    <p className="mt-2 whitespace-nowrap text-[9px] leading-[1.2rem] text-[#17466f] lg:text-[10px]">
                                        Enable product launch
                                        <br />
                                        in target markets
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* GAP */}
            <div className="h-[10px] w-full bg-white sm:h-[15px]" />


            {/* =========================================================
                OUR SOLUTIONS
            ========================================================= */}
            <section className="relative w-full overflow-hidden bg-[#F3FAFE]">

                <div
                    className="
    relative
    z-10

    left-[20px]
    w-[calc(100%-40px)]

    pt-6
    pb-8

    sm:left-[32px]
    sm:w-[calc(100%-64px)]

    lg:static
    lg:left-auto
    lg:w-auto
    lg:max-w-[1440px]
    lg:px-[48px]
  "
                >

                    {/* HEADER */}

                    <div
                        className="
        flex
        flex-col
        items-start
        justify-between

        lg:flex-row
        lg:items-end
    "
                    >
                        <div>

                            {/* OUR SOLUTIONS */}
                            <p
                                className="
                relative
                left-0
                translate-y-2
                text-[13px]
                font-bold
                uppercase
                tracking-[0.06em]
                text-[#E9A91F]

                lg:left-10
                lg:translate-y-0
                lg:text-[15px]
            "
                            >
                                OUR SOLUTIONS
                            </p>

                            {/* MAIN HEADING */}
                            <h2
                                className="
                relative
                left-0
                translate-y-[12px]
                max-w-[700px]
                text-[22px]
                font-bold
                leading-[1.2]
                text-[#063968]

                sm:text-[24px]

                lg:left-10
                lg:translate-y-[10px]
                lg:text-[26px]
            "
                            >
                                Comprehensive Engineering &amp; Technology
                                Solutions
                            </h2>

                        </div>

                        {/* RIGHT TEXT */}
                        <div
                            className="
            hidden
            items-center
            gap-3
            lg:flex
            lg:translate-y-[10px]
        "
                        >



                        </div>
                    </div>

                    {/* SPACE BETWEEN HEADER AND CARDS */}
                    <div className="h-[50px] lg:h-[50px]" />



                    {/* SOLUTION CARDS */}
                    <div
                        className="
                            relative
                            top-2
                            grid
                            grid-cols-1
                            gap-3

                            md:grid-cols-2

                            lg:grid-cols-3
                        "
                    >

                        {/* CARD 1 */}

                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <Settings
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#063968]">
                                    Design &amp; Engineering
                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Custom engineering solutions for
                                    <br />
                                    high-performance systems.
                                </p>

                                <Link
                                    to="/solutions"
                                    className=" 
                mt-0.5 
                inline-flex 
                items-center 
                text-[12px] 
                font-bold 
                text-[#063968] 
            "
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>




                        {/* CARD 2 */}
                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <ChartNoAxesCombined
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#063968]">
                                    Validation
                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Comprehensive validation to
                                    <br />
                                    ensure performance and reliability.
                                </p>

                                <Link
                                    to="/solutions"
                                    className="mt-0.5 inline-flex items-center text-[12px] font-bold text-[#063968]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>


                        {/* CARD 3 */}
                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <Box
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#063968]">
                                    Prototyping
                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Rapid prototyping and build development
                                    <br />
                                    for faster time-to-market.
                                </p>

                                <Link
                                    to="/solutions"
                                    className="mt-0.5 inline-flex items-center text-[12px] font-bold text-[#063968]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>


                        {/* CARD 4 */}
                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <FileCheck2
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#063968]">
                                    Certification
                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Support for product certification to meet
                                    <br />
                                    global standards and regulations.
                                </p>

                                <Link
                                    to="/solutions"
                                    className="mt-0.5 inline-flex items-center text-[12px] font-bold text-[#063968]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>


                        {/* CARD 5 */}
                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <Megaphone
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#063968]">
                                    Testing &amp; Safety
                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Advanced testing and safety
                                    <br />
                                    assessments for complex systems.
                                </p>

                                <Link
                                    to="/solutions"
                                    className="mt-0.5 inline-flex items-center text-[12px] font-bold text-[#063968]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>


                        {/* CARD 6 */}
                        <div
                            className=" 
        relative 
        left-0 
        flex 
        h-[110px] 
        w-full 
        items-center 
        justify-start 
        gap-4 
        rounded-lg 
        border 
        border-[#DCEAF2] 
        bg-white 
        px-5 
        shadow-sm 

        sm:h-[102px] 
        sm:px-6 

        lg:left-10 
        lg:w-[85%] 
        lg:px-8 
    "
                        >
                            <div
                                className=" 
            relative 
            left-0 
            flex 
            h-[45px] 
            w-[45px] 
            shrink-0 
            items-center 
            justify-center 
            rounded-full 
            border-2 
            border-[#E9A91F] 

            lg:left-2 
            lg:h-[48px] 
            lg:w-[40px] 
        "
                            >
                                <Headphones
                                    size={24}
                                    strokeWidth={1.8}
                                    className="text-[#063968]"
                                />
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-[15px]
                                        font-bold
                                        leading-[1.15]
                                        text-[#063968]
                                    "
                                >
                                    After Sales Support &amp; Higher Services

                                </h3>

                                <p className="mt-1 text-[12px] leading-[1.2rem] text-[#17466f]">
                                    Lifecycle support, maintenance
                                    <br />
                                    and technical assistance.
                                </p>

                                <Link
                                    to="/solutions"
                                    className="mt-0.5 inline-flex items-center text-[12px] font-bold text-[#063968]"
                                >
                                    Learn More
                                    <ArrowRight
                                        size={12}
                                        strokeWidth={2.5}
                                        className="ml-1"
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="h-[10px] sm:h-[20px]" />

                </div>
            </section>


            {/* GAP */}
            <div className="h-[15px] w-full bg-white sm:h-[25px]" />


            {/* =========================================================
                INDUSTRIES WE SERVE
            ========================================================= */}
            <section className="w-full bg-[#063968]">

                <div
                    className="
    relative

    left-[20px]
    w-[calc(100%-40px)]

    py-7

    sm:left-[32px]
    sm:w-[calc(100%-64px)]
    sm:py-8

    lg:static
    lg:left-auto
    lg:w-auto
    lg:max-w-[1440px]
    lg:px-[48px]
  "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            items-center
                            gap-7

                            lg:grid-cols-[300px_1fr]
                            lg:gap-[45px]
                        "
                    >

                        {/* LEFT */}
                        <div
                            className="
                                relative
                                left-0
                                text-white

                                lg:left-10
                            "
                        >

                            <div className="h-[5px] lg:h-[25px]" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#E9A91F]">
                                INDUSTRIES WE SERVE
                            </p>

                            <div className="h-[5px]" />

                            <h2
                                className="
                                    text-[20px]
                                    font-bold
                                    leading-[1.05]
                                    text-white

                                    md:text-[22px]
                                "
                            >
                                Engineering Solutions
                                <br />
                                Across Multiple Industries
                            </h2>

                            <div className="h-[10px]" />

                            <p
                                className="
                                    max-w-[300px]
                                    text-[10px]
                                    leading-[1.45]
                                    text-white
                                "
                            >
                                We deliver tailored solutions for automotive,
                                aerospace, defence and other high-tech
                                industries worldwide.
                            </p>

                            <div className="h-[12px]" />



                        </div>


                        {/* INDUSTRY CARDS */}
                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-2

                                sm:grid-cols-3

                                lg:grid-cols-6
                                lg:pr-[25px]
                            "
                        >

                            {/* AUTOMOTIVE */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={automotive}
                                    alt="Automotive"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[9px] font-bold leading-tight text-white">
                                        Automotive
                                    </p>
                                </div>
                            </div>


                            {/* AEROSPACE */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={aerospace}
                                    alt="Aerospace"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[9px] font-bold leading-tight text-white">
                                        Aerospace
                                    </p>
                                </div>
                            </div>


                            {/* DEFENCE */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={defence}
                                    alt="Defence & Homeland Security"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[8px] font-bold leading-tight text-white">
                                        Defence &amp;
                                        <br />
                                        Homeland Security
                                    </p>
                                </div>
                            </div>


                            {/* ENERGY */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={energy}
                                    alt="Energy & Renewables"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[8px] font-bold leading-tight text-white">
                                        Energy &amp;
                                        <br />
                                        Renewables
                                    </p>
                                </div>
                            </div>


                            {/* INDUSTRIAL */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={industrial}
                                    alt="Industrial Products"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[8px] font-bold leading-tight text-white">
                                        Industrial Products
                                    </p>
                                </div>
                            </div>


                            {/* CONSUMER */}
                            <div
                                className="
                                    group
                                    relative
                                    h-[110px]
                                    overflow-hidden
                                    rounded-md
                                    border
                                    border-white/30

                                    sm:h-[105px]
                                "
                            >
                                <img
                                    src={consumer}
                                    alt="Consumer Goods"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-300

                                        md:group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-[#063968]/75 px-1 py-1.5 text-center">
                                    <p className="text-[8px] font-bold leading-tight text-white">
                                        Consumer Goods
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="h-[5px] lg:h-[10px]" />

                </div>
            </section>


            {/* =========================================================
                WHY CHOOSE US
            ========================================================= */}
            <section className="w-full bg-white">

                <div
                    className="
    relative

    left-[20px]
    w-[calc(100%-40px)]

    py-6

    sm:left-[32px]
    sm:w-[calc(100%-64px)]
    sm:py-4

    lg:static
    lg:left-auto
    lg:w-auto
    lg:max-w-[1440px]
    lg:px-[48px]
  "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            items-center
                            gap-5

                            lg:grid-cols-[280px_1fr]
                            lg:gap-0
                        "
                    >

                        {/* LEFT */}
                        <div
                            className="
        relative
        left-0
        top-[8px]

        lg:left-10
        lg:top-0
    "
                        >
                            <p
                                className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.06em]
            text-[#E9A91F]
            
        "
                            >
                                WHY CHOOSE US
                            </p>

                            <h2
                                className="
            mt-1
            text-[20px]
            font-bold
            leading-[1.05]
            text-[#063968]

            md:text-[22px]
        "
                            >
                                Delivering Value
                                <br />
                                Through Expertise
                            </h2>
                        </div>


                        {/* VALUES */}
                        <div className="grid grid-cols-2 md:grid-cols-5">

                            {/* EXPERIENCED TEAM */}
                            <div
                                className="
                                    flex
                                    min-h-[80px]
                                    flex-col
                                    items-center
                                    justify-center
                                    border-l
                                    border-[#E9A91F]/40
                                    px-2
                                    text-center
                                "
                            >
                                <Lightbulb
                                    size={27}
                                    strokeWidth={1.7}
                                    className="text-[#E9A91F]"
                                />

                                <h3 className="mt-1 text-[9px] font-bold leading-tight text-[#063968]">
                                    Experienced
                                    <br />
                                    Team
                                </h3>
                            </div>


                            {/* INNOVATIVE */}
                            <div
                                className="
                                    flex
                                    min-h-[80px]
                                    flex-col
                                    items-center
                                    justify-center
                                    border-l
                                    border-[#E9A91F]/40
                                    px-2
                                    text-center
                                "
                            >
                                <Lightbulb
                                    size={27}
                                    strokeWidth={1.7}
                                    className="text-[#E9A91F]"
                                />

                                <h3 className="mt-1 text-[9px] font-bold leading-tight text-[#063968]">
                                    Innovative
                                    <br />
                                    Solutions
                                </h3>
                            </div>


                            {/* QUALITY */}
                            <div
                                className="
                                    flex
                                    min-h-[80px]
                                    flex-col
                                    items-center
                                    justify-center
                                    border-l
                                    border-[#E9A91F]/40
                                    px-2
                                    text-center
                                "
                            >
                                <BadgeCheck
                                    size={27}
                                    strokeWidth={1.7}
                                    className="text-[#E9A91F]"
                                />

                                <h3 className="mt-1 text-[9px] font-bold leading-tight text-[#063968]">
                                    Quality &amp;
                                    <br />
                                    Compliance
                                </h3>
                            </div>


                            {/* CUSTOMER */}
                            <div
                                className="
                                    flex
                                    min-h-[80px]
                                    flex-col
                                    items-center
                                    justify-center
                                    border-l
                                    border-[#E9A91F]/40
                                    px-2
                                    text-center
                                "
                            >
                                <Handshake
                                    size={27}
                                    strokeWidth={1.7}
                                    className="text-[#E9A91F]"
                                />

                                <h3 className="mt-1 text-[9px] font-bold leading-tight text-[#063968]">
                                    Customer
                                    <br />
                                    Focused
                                </h3>
                            </div>


                            {/* PARTNERSHIPS */}
                            <div
                                className="
                                    flex
                                    min-h-[80px]
                                    flex-col
                                    items-center
                                    justify-center
                                    border-l
                                    border-[#E9A91F]/40
                                    px-2
                                    text-center
                                "
                            >
                                <ChartNoAxesCombined
                                    size={27}
                                    strokeWidth={1.7}
                                    className="text-[#E9A91F]"
                                />

                                <h3 className="mt-1 text-[9px] font-bold leading-tight text-[#063968]">
                                    Long-Term
                                    <br />
                                    Partnerships
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================================
                CTA
            ========================================================= */}
            <section
                className="
                    relative
                    min-h-[230px]
                    w-full
                    overflow-hidden
                    bg-[#063968]

                    sm:min-h-[200px]

                    md:h-[140px]
                    md:min-h-0
                "
            >

                {/* IMAGE */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                    style={{
                        backgroundImage: `url(${ctaImage})`,
                    }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#063968]/20" />


                {/* CTA CONTENT */}
                <div
                    className="
    relative
    left-[20px]
    w-[calc(100%-40px)]

    sm:left-[32px]
    sm:w-[calc(100%-64px)]
     translate-y-[30px]

    md:static
    md:left-auto
    md:w-auto
    md:px-[48px]
  "
                >

                    <div
                        className="
                            relative
                            left-0
                            flex
                            w-full
                            flex-col
                            items-start
                            gap-5

                            md:left-10
                            md:flex-row
                            md:items-center
                            md:gap-0
                        "
                    >

                        {/* LEFT */}
                        <div
                            className="
                                flex
                                shrink-0
                                items-center
                                gap-3
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-[42px]
                                    w-[42px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-2
                                    border-[#E9A91F]
                                "
                            >
                                <Handshake
                                    size={23}
                                    strokeWidth={1.8}
                                    className="text-[#E9A91F]"
                                />
                            </div>

                            <h2
                                className="
                                    text-[16px]
                                    font-bold
                                    leading-[1.1]
                                    text-white

                                    md:text-[18px]
                                "
                            >
                                <span className="whitespace-nowrap">
                                    Let's Build Something
                                </span>
                                <br />
                                <span className="whitespace-nowrap">
                                    Great Together
                                </span>
                            </h2>

                        </div>


                        {/* DESCRIPTION */}
                        <div
                            className="
                                relative
                                left-0
                                max-w-[500px]

                                md:left-10
                                md:max-w-[430px]
                            "
                        >
                            <p
                                className="
                                    text-[12px]
                                    leading-[1.5]
                                    text-white/90

                                    sm:text-[13px]

                                    md:text-[14px]
                                "
                            >
                                Partner with KETS for reliable, innovative and
                                <br className="hidden sm:block" />
                                compliant engineering tech solutions.
                            </p>
                        </div>


                        {/* BUTTON */}
                        <div
                            className="
                                relative
                                left-0
                                flex
                                w-full
                                shrink-0
                                items-center
                                justify-start
                                pl-0
                                pr-0

                                md:left-25
                                md:w-auto
                                md:justify-center
                                md:pl-8
                                md:pr-6
                            "
                        >
                            <Link
                                to="/contact"
                                className="
                                    inline-flex
                                    h-[38px]
                                    w-[130px]
                                    items-center
                                    justify-center
                                    gap-2
                                    whitespace-nowrap
                                    rounded-full
                                    bg-[#E9A91F]
                                    px-6
                                    text-[12px]
                                    font-semibold
                                    text-white
                                    shadow-md
                                    transition
                                    duration-200

                                    md:h-[35px]
                                    md:w-[120px]
                                    md:px-9
                                    md:text-[13px]
                                    md:hover:bg-[#d99a14]
                                    md:hover:shadow-lg
                                "
                            >
                                Contact Us
                                <ArrowRight
                                    size={16}
                                    strokeWidth={2}
                                />
                            </Link>
                        </div>

                    </div>

                </div>
            </section>


            {/* FOOTER BORDER */}
            <div className="mx-auto w-full border-t border-[#D9E2EA]" />

            <Footer />

        </main>
    );
};

export default Home;
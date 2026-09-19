import { ArrowLeft, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <main className="min-h-screen bg-[#F3FAFE]">

            <section
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    px-4
                    py-12
                    sm:px-6
                    sm:py-16
                    md:py-20
                "
            >

                <div
                    className="
                        flex
                        min-h-[560px]
                        w-full
                        max-w-2xl
                        flex-col
                        items-center
                        justify-center
                        rounded-3xl
                        bg-white
                        px-6
                        py-16
                        text-center
                        shadow-lg
                        sm:min-h-[600px]
                        sm:px-10
                        sm:py-20
                        md:min-h-[640px]
                        md:px-14
                        md:py-24
                    "
                >

                    {/* Icon */}
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9A91F]/15">
                        <Clock3 className="h-10 w-10 text-[#E9A91F]" />
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            text-3xl
                            font-bold
                            leading-tight
                            text-[#063968]
                            sm:text-4xl
                        "
                    >
                        About Us
                    </h1>

                    {/* Main paragraph */}
                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-xl
                            text-base
                            font-medium
                            leading-7
                            text-gray-700
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        This page is currently under progress.
                    </p>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-gray-500
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        We are working on this page and will be adding
                        detailed information about our company soon.
                    </p>

                    {/* Button */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/"
                            className="
                                inline-flex
                                h-12
                                min-w-[170px]
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                bg-[#063968]
                                px-7
                                text-sm
                                font-semibold
                                text-white
                                shadow-md
                                transition
                                duration-200
                                hover:bg-[#052f58]
                                hover:shadow-lg
                            "
                        >
                            <ArrowLeft className="h-4 w-4 shrink-0" />
                            <span>Back to Home</span>
                        </Link>
                    </div>

                </div>

            </section>

        </main>
    );
};

export default AboutUs;
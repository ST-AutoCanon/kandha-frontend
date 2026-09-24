import { useState } from "react";
import Footer from "../Components/footer";
import {
    ArrowLeft,
    CheckCircle,
    Mail,
    MapPin,
    Send,
} from "lucide-react"; import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        let updatedValue = value;

        if (name === "phone") {
            updatedValue = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));
    };

   const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
) => {
    e.preventDefault();
    console.log(
    "Web3Forms Access Key exists:",
    !!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
);

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key:
                        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

                    subject: `New Engineering Enquiry - ${formData.fullName}`,

                    from_name: formData.fullName,

                    email: formData.email,

                    fullName: formData.fullName,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                }),
            }
        );

        const result = await response.json();

        if (result.success) {
            console.log("Engineering enquiry sent successfully");

            setShowSuccess(true);

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
        } else {
            console.error("Web3Forms error:", result);

            alert(
                "Unable to send your enquiry. Please try again."
            );
        }
    } catch (error) {
        console.error("Failed to send enquiry:", error);

        alert(
            "Unable to send your enquiry. Please try again."
        );
    }
};
    return (
        <>
        <main
            className="min-h-screen w-full bg-[#F4F8FB]"
            style={{
                padding: "40px 20px 70px",
            }}
        >
            {/* MAIN PAGE WRAPPER */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "850px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                {/* BACK BUTTON */}
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginBottom: "32px",
                    }}
                >
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="
              inline-flex
              items-center
              gap-2
              text-base
              font-medium
              text-[#063968]
              transition-colors
              duration-200
              hover:text-[#E9A91F]
            "
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back</span>
                    </button>
                </div>

                {/* WHITE CARD */}
                <div
                    className="
            w-full
            rounded-[28px]
            bg-white
            shadow-[0_8px_35px_rgba(6,57,104,0.10)]
          "
                    style={{
                        padding: "55px 70px 70px",
                        minHeight: "900px",
                    }}
                >
                    {/* CENTERED CONTENT */}
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "1000px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        {/* PAGE TITLE */}
                        <div
                            style={{
                                width: "100%",
                                marginBottom: "48px",
                            }}
                        >
                            <h1
                                className="
                  font-bold
                  leading-tight
                  text-[#063968]
                "
                                style={{
                                    fontSize: "46px",
                                    margin: 0,
                                }}
                            >
                                Engineering Technology{" "}
                                <span className="text-[#E9A91F]">
                                    Solutions
                                </span>
                            </h1>

                            {/* ORANGE LINE */}
                            <div
                                className="rounded-full bg-[#E9A91F]"
                                style={{
                                    width: "78px",
                                    height: "4px",
                                    marginTop: "16px",
                                }}
                            />

                            {/* DESCRIPTION */}
                            <p
                                className="text-gray-600"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "28px",
                                    marginTop: "20px",
                                    maxWidth: "760px",
                                }}
                            >
                                Tell us about your engineering, testing, validation or
                                homologation requirement. Our team will get in touch with you
                                to understand your requirement and provide the right
                                technical solution.
                            </p>
                        </div>

                        {/* CONTACT INFORMATION */}
                        <div className="-mt-5 mb-12 flex flex-col gap-5">

                            {/* EMAIL */}
                            <div className="flex w-full items-start gap-3 sm:gap-4">
                                <div
                                    className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#E9A91F]/10
        "
                                >
                                    <Mail className="h-5 w-5 text-[#E9A91F]" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:techassociate@kandhaenggtechsolutions.com"
                                        className="
                mt-1
                block
                max-w-full
                break-all
                text-sm
                font-semibold
                leading-6
                text-[#063968]
                transition-colors
                duration-200
                hover:text-[#E9A91F]
                sm:text-[14px]
            "
                                    >
                                        techassociate@kandhaenggtechsolutions.com
                                    </a>
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E9A91F]/10
            "
                                >
                                    <MapPin className="h-5 w-5 text-[#E9A91F]" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">
                                        Address
                                    </p>

                                    <p className="mt-1 text-sm font-semibold leading-6 text-[#063968]">
                                        Chennai, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "28px",
                                marginTop: "40px"
                            }}
                        >
                            {/* FULL NAME */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <label
                                    htmlFor="fullName"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Full Name
                                    <span className="ml-1 text-red-500">*</span>
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    style={{
                                        width: "100%",
                                        height: "58px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        boxSizing: "border-box",
                                    }}
                                    className="
    rounded-[15px]
    border
    border-gray-300
    bg-white
    text-left
    text-base
    text-gray-800
    outline-none
    transition-all
    duration-200
    placeholder:text-gray-400
    focus:border-[#E9A91F]
    focus:ring-2
    focus:ring-[#E9A91F]/20
  "
                                />
                            </div>

                            {/* EMAIL */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <label
                                    htmlFor="email"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Email Address
                                    <span className="ml-1 text-red-500">*</span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email "
                                    style={{
                                        width: "100%",
                                        height: "58px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        boxSizing: "border-box",
                                    }}
                                    className="
    rounded-[15px]
    border
    border-gray-300
    bg-white
    text-left
    text-base
    text-gray-800
    outline-none
    transition-all
    duration-200
    placeholder:text-gray-400
    focus:border-[#E9A91F]
    focus:ring-2
    focus:ring-[#E9A91F]/20
  "
                                />
                            </div>

                            {/* PHONE */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <label
                                    htmlFor="phone"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Phone Number
                                    <span className="ml-1 text-red-500">*</span>
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    style={{
                                        width: "100%",
                                        height: "58px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        boxSizing: "border-box",
                                    }}
                                    placeholder="Enter your 10-digit phone number"
                                    className="
                    box-border
                    h-[58px]
                    w-full
                    rounded-[15px]
                    border
                    border-gray-300
                    bg-white
                    px-6
                    text-base
                    text-gray-800
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-gray-400
                    focus:border-[#E9A91F]
                    focus:ring-2
                    focus:ring-[#E9A91F]/20
                  "
                                />
                            </div>

                            {/* COMPANY */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <label
                                    htmlFor="company"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Company / Organization
                                    <span className="ml-1 text-red-500">*</span>
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: "100%",
                                        height: "58px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        boxSizing: "border-box",
                                    }}
                                    placeholder="Enter your company or organization"
                                    className="
                    box-border
                    h-[58px]
                    w-full
                    rounded-[15px]
                    border
                    border-gray-300
                    bg-white
                    px-6
                    text-base
                    text-gray-800
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-gray-400
                    focus:border-[#E9A91F]
                    focus:ring-2
                    focus:ring-[#E9A91F]/20
                  "
                                />
                            </div>


                            {/* ENGINEERING REQUIREMENT */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <label
                                    htmlFor="message"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Engineering Requirement
                                    <span className="ml-1 text-red-500">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={7}
                                    style={{
                                        width: "100%",
                                        height: "58px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        boxSizing: "border-box",
                                    }}
                                    placeholder="Please describe your engineering, testing, validation or homologation requirement..."
                                    className="
                    box-border
                    min-h-[200px]
                    w-full
                    resize-none
                    rounded-[15px]
                    border
                    border-gray-300
                    bg-white
                    px-6
                    py-4
                    text-base
                    leading-7
                    text-gray-800
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-gray-400
                    focus:border-[#E9A91F]
                    focus:ring-2
                    focus:ring-[#E9A91F]/20
                  "
                                />
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingTop: "12px",
                                }}
                            >
                                <button
                                    type="submit"
                                    className="
                    inline-flex
                    h-[54px]
                    min-w-[210px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#063968]
                    px-8
                    text-base
                    font-semibold
                    text-white
                    shadow-md
                    transition-all
                    duration-200
                    hover:bg-[#E9A91F]
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                                >
                                    <span>Submit Enquiry</span>
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* SUCCESS POPUP */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-[2px]">
                    <div
                        className="
              w-full
              max-w-[450px]
              rounded-[28px]
              bg-white
              text-center
              shadow-2xl
            "
                        style={{
                            padding: "40px",
                        }}
                    >
                        {/* SUCCESS ICON */}
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E9A91F]/10">
                            <CheckCircle className="h-11 w-11 text-[#E9A91F]" />
                        </div>

                        {/* TITLE */}
                        <h2
                            className="font-bold text-[#063968]"
                            style={{
                                fontSize: "30px",
                                marginTop: "24px",
                            }}
                        >
                            Enquiry Submitted
                        </h2>

                        {/* MESSAGE */}
                        <p
                            className="text-gray-600"
                            style={{
                                fontSize: "16px",
                                lineHeight: "28px",
                                marginTop: "16px",
                            }}
                        >
                            Thank you for contacting us.
                            <br />
                            We have received your engineering enquiry.
                            <br />
                            Our technical team will get back to you shortly.
                        </p>

                        {/* OK BUTTON */}
                        <button
                            type="button"
                            onClick={() => setShowSuccess(false)}
                            className="
                inline-flex
                h-[48px]
                min-w-[120px]
                items-center
                justify-center
                rounded-full
                bg-[#E9A91F]
                px-8
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#063968]
              "
                            style={{
                                marginTop: "28px",
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </main>
        <Footer/>
        </>
    );
};

export default Contact;
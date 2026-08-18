"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTW5CndtgVpJ78AVM0VjSPmurPqihz8-2hS4M7pj-PnPvygw/formResponse";

export default function ApplyPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        startupName: "",
        alternateEmail: "",
        describe: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const googleFormData = new URLSearchParams();

            googleFormData.append("emailAddress", formData.email);
            googleFormData.append("entry.300749602", formData.name);
            googleFormData.append("entry.708642801", formData.startupName);
            googleFormData.append("entry.381024055", formData.alternateEmail);
            googleFormData.append("entry.1139577184", formData.describe);

            await fetch(GOOGLE_FORM_ACTION, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: googleFormData.toString(),
            });

            setSubmitted(true);
        } catch (error) {
            console.error("Google Form submission error:", error);

            alert(
                "Something went wrong while submitting the application. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    /*
     * SUCCESS SCREEN
     */
    if (submitted) {
        return (
            <main className="min-h-screen bg-[#FBF7F0] px-5 text-[#121212]">

                {/* TOP BAR */}
                <motion.header
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto flex h-[72px] max-w-6xl items-center justify-between border-b border-[#E4E4E0]"
                >
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="AIC-JKLU"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="group flex items-center gap-2 font-robotoMono text-xs font-semibold uppercase tracking-[0.12em] text-[#52525B] transition-all duration-300 hover:text-[#EB5725]"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>
                        Back to Home
                    </Link>
                </motion.header>

                <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl items-center justify-center py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-lg rounded-[24px] border border-[#E4E4E0] bg-[#FFFFFF] p-8 sm:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                    >
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EB5725] text-2xl text-white shadow-md shadow-[#EB5725]/20">
                            ✓
                        </div>

                        <p className="mb-3 font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-[#52525B]">
                            AIC — JKLU
                        </p>

                        <h1 className="font-marcellus text-4xl sm:text-5xl leading-[1.05] tracking-[-0.03em] text-[#121212]">
                            Application
                            <br />
                            <em className="font-normal italic">
                                received.
                            </em>
                        </h1>

                        <p className="mx-auto mt-4 max-w-md font-inter text-[15px] leading-relaxed text-[#52525B]">
                            Thank you for applying to AIC-JKLU. Your application has been
                            received and will be reviewed by our team.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                    email: "",
                                    name: "",
                                    startupName: "",
                                    alternateEmail: "",
                                    describe: "",
                                });
                            }}
                            className="mt-8 rounded-full bg-[#EB5725] px-8 py-3.5 font-robotoMono text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.1em] text-white shadow-md shadow-[#EB5725]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C84214] hover:shadow-lg hover:shadow-[#EB5725]/25"
                        >
                            Submit Another Application
                        </button>
                    </motion.div>
                </div>
            </main>
        );
    }

    /*
     * MAIN APPLY PAGE
     */
    return (
        <main className="min-h-screen bg-[#FBF7F0] px-4 text-[#121212] sm:px-6 md:px-8">

            {/* =========================================
                TOP NAVIGATION
            ========================================== */}
            <motion.header
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto flex h-[72px] max-w-6xl items-center justify-between border-b border-[#E4E4E0]"
            >
                {/* AIC LOGO */}
                <Link
                    href="/"
                    className="flex items-center"
                >
                    <img
                        src="/logo.svg"
                        alt="AIC-JKLU"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* BACK BUTTON */}
                <Link
                    href="/"
                    className="group flex items-center gap-2 font-robotoMono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-[#52525B] transition-all duration-300 hover:text-[#EB5725]"
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to Home
                </Link>
            </motion.header>

            {/* =========================================
                COMPACT HERO
            ========================================== */}
            <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-4xl px-2 pb-7 pt-10 text-center sm:pt-14"
            >
                <p className="mb-3 font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-[#52525B]">
                    Apply Now
                </p>

                <h1 className="font-marcellus text-[42px] leading-[0.95] tracking-[-0.04em] sm:text-[52px] md:text-[60px] text-[#121212]">
                    Ready to
                    <br />

                </h1>
                <h1>
                    <em className="font-marcellus not-italic text-[#EB5725] text-6xl">
                        Innovate ?
                    </em>
                </h1>

                <p className="mx-auto mt-4 max-w-lg font-inter text-[15px] leading-relaxed text-[#52525B]">
                    Tell us about yourself and what you are building.
                </p>
            </motion.section>

            {/* =========================================
                FORM
            ========================================== */}
            <motion.section
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto w-full max-w-[620px] pb-16"
            >
                <div className="w-full rounded-[24px] border border-[#E4E4E0] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 md:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* EMAIL */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block font-inter text-[15px] font-medium text-[#121212]"
                            >
                                Email
                                <span className="ml-1 text-[#EB5725]">*</span>
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                className="w-full rounded-xl border border-[#E4E4E0] bg-[#FBF7F0]/60 px-4 py-3.5 text-[16px] text-[#121212] placeholder:text-[#52525B]/40 outline-none transition-all duration-200 focus:border-[#EB5725] focus:bg-[#FFFFFF] focus:ring-4 focus:ring-[#EB5725]/10"
                            />
                        </div>

                        {/* NAME */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block font-inter text-[15px] font-medium text-[#121212]"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                autoComplete="name"
                                className="w-full rounded-xl border border-[#E4E4E0] bg-[#FBF7F0]/60 px-4 py-3.5 text-[16px] text-[#121212] placeholder:text-[#52525B]/40 outline-none transition-all duration-200 focus:border-[#EB5725] focus:bg-[#FFFFFF] focus:ring-4 focus:ring-[#EB5725]/10"
                            />
                        </div>

                        {/* STARTUP NAME */}
                        <div>
                            <label
                                htmlFor="startupName"
                                className="mb-2 block font-inter text-[15px] font-medium text-[#121212]"
                            >
                                Startup Name
                            </label>

                            <input
                                id="startupName"
                                name="startupName"
                                type="text"
                                value={formData.startupName}
                                onChange={handleChange}
                                placeholder="Enter your startup name"
                                className="w-full rounded-xl border border-[#E4E4E0] bg-[#FBF7F0]/60 px-4 py-3.5 text-[16px] text-[#121212] placeholder:text-[#52525B]/40 outline-none transition-all duration-200 focus:border-[#EB5725] focus:bg-[#FFFFFF] focus:ring-4 focus:ring-[#EB5725]/10"
                            />
                        </div>

                        {/* SECOND EMAIL */}
                        <div>
                            <label
                                htmlFor="alternateEmail"
                                className="mb-2 block font-inter text-[15px] font-medium text-[#121212]"
                            >
                                Alternate E-mail
                            </label>

                            <input
                                id="alternateEmail"
                                name="alternateEmail"
                                type="email"
                                value={formData.alternateEmail}
                                onChange={handleChange}
                                placeholder="Additional email address"
                                autoComplete="email"
                                className="w-full rounded-xl border border-[#E4E4E0] bg-[#FBF7F0]/60 px-4 py-3.5 text-[16px] text-[#121212] placeholder:text-[#52525B]/40 outline-none transition-all duration-200 focus:border-[#EB5725] focus:bg-[#FFFFFF] focus:ring-4 focus:ring-[#EB5725]/10"
                            />
                        </div>

                        {/* DESCRIBE */}
                        <div>
                            <label
                                htmlFor="describe"
                                className="mb-2 block font-inter text-[15px] font-medium text-[#121212]"
                            >
                                Describe
                            </label>

                            <textarea
                                id="describe"
                                name="describe"
                                value={formData.describe}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Tell us about your startup, idea, or what you are building..."
                                className="w-full resize-none rounded-xl border border-[#E4E4E0] bg-[#FBF7F0]/60 px-4 py-3.5 text-[16px] leading-relaxed text-[#121212] placeholder:text-[#52525B]/40 outline-none transition-all duration-200 focus:border-[#EB5725] focus:bg-[#FFFFFF] focus:ring-4 focus:ring-[#EB5725]/10"
                            />
                        </div>

                        {/* SUBMIT */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#EB5725] px-8 py-4 font-robotoMono text-[15px] font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-[#EB5725]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C84214] hover:shadow-lg hover:shadow-[#EB5725]/25 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <span>
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Submit Application"}
                                </span>

                                {!isSubmitting && (
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                )}
                            </button>
                        </div>

                        <p className="pt-1 text-center font-inter text-[14px] leading-relaxed text-[#52525B]">
                            By submitting this application, you confirm that the information
                            provided is accurate.
                        </p>
                    </form>
                </div>
            </motion.section>
        </main>
    );
}

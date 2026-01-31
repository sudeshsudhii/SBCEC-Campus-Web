export default function SecretaryPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-4xl font-bold mb-2">Secretary&apos;s Message</h1>
                        <p className="text-red-100">A.C. Ravi</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Image Section */}
                            <div className="md:col-span-1">
                                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-[3/4] relative">
                                        <img
                                            src="/assets/live/secretary.png"
                                            alt="Secretary - A.C. Ravi"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div className="md:col-span-2">
                                <div className="prose max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Greetings from our Secretary</h2>

                                    <div className="text-6xl text-[#b30202] mb-4 leading-none">&ldquo;</div>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Creditably Sri Balaji Chockalingam Engineering College galvanize high impact academic
                                        education which is universally recognized and easily viable for enrollment in the various
                                        programmes of interest and optimum career opportunities.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Leveraging the capabilities and competitions extended across disciplines and organizational
                                        boundaries, a large percentage of our students have since turned out to be successful
                                        entrepreneurs and captains of industries across our nation, befitting the voice of
                                        Thirukkural.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        The main focus of our college is to empower students with sound knowledge, wisdom,
                                        experience and training both in the academic level of Engineering and in the highly
                                        competitive global industrial market.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        The infrastructure facilities and state-of-the-art equipments contribute to an enjoyable
                                        and an easy learning experience. The research and part-time courses enable all the
                                        aspirants to acquire higher academic qualifications.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        We wish the best for all our students, and the members of the college who reiterate their
                                        aims at providing the best in academic and extra-curricular fields on excellent lines.
                                    </p>

                                    <div className="text-6xl text-[#b30202] text-right leading-none">&rdquo;</div>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 font-medium">Warm Regards,</p>
                                    <p className="text-xl font-bold text-[#b30202] mt-2">A.C. Ravi</p>
                                    <p className="text-gray-500">Secretary</p>
                                    <p className="text-gray-500">Sri Balaji Chockalingam Engineering College</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Our Focus Areas</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-4xl mb-3">🎓</div>
                                    <p className="font-semibold text-gray-800 mb-2">Academic Excellence</p>
                                    <p className="text-gray-600 text-sm">High-impact education universally recognized</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-4xl mb-3">🏭</div>
                                    <p className="font-semibold text-gray-800 mb-2">Industry Ready</p>
                                    <p className="text-gray-600 text-sm">Training for global industrial market</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-4xl mb-3">🔬</div>
                                    <p className="font-semibold text-gray-800 mb-2">State-of-the-Art</p>
                                    <p className="text-gray-600 text-sm">Modern infrastructure and equipment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

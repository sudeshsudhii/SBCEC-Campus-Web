export default function PresidentPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-4xl font-bold mb-2">President&apos;s Message</h1>
                        <p className="text-red-100">A.C.S. Arunkumar</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Image Section */}
                            <div className="md:col-span-1">
                                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-[3/4] relative">
                                        <img
                                            src="/assets/live/president.png"
                                            alt="President - A.C.S. Arunkumar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div className="md:col-span-2">
                                <div className="prose max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Greetings from our President</h2>

                                    <div className="text-6xl text-[#b30202] mb-4 leading-none">&ldquo;</div>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Education is presently undergoing a welcoming seismic change. In tune with the changing
                                        time Sri Balaji Chockalingam Engineering College aims to help students to excel in the
                                        various fields of study of their choice.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Being in the field of education for past 20 years, Sri Balaji Chockalingam Engineering
                                        College is looking at engaging the students in overall developmental processes. With the
                                        experience and wisdom gained during the last 20 years we have designed co-curricular and
                                        extra-curricular activities for the students to be involved in actively.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        The dedicated staff is devoted to the task of incorporating latest teaching methods with
                                        modern equipments and electronic gadgets for the benefit of the students. These proactive
                                        teaching methodologies have resulted in higher performance in examinations and academic
                                        activities.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Adequate care is taken to give every student an enjoyable, well-rounded and secure
                                        educational environment. Help and care is always at hand for the students. We wish the
                                        best for all our students, and the members of the college who reiterate their aims at
                                        providing the best in academic and extra-curricular fields on excellent lines.
                                    </p>

                                    <div className="text-6xl text-[#b30202] text-right leading-none">&rdquo;</div>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 font-medium">Best Wishes,</p>
                                    <p className="text-xl font-bold text-[#b30202] mt-2">A.C.S. Arunkumar</p>
                                    <p className="text-gray-500">President</p>
                                    <p className="text-gray-500">Sri Balaji Chockalingam Engineering College</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Our Commitment</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#b30202] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">20</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Years of Excellence</p>
                                        <p className="text-gray-600 text-sm">Two decades of quality education</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#b30202] rounded-full flex items-center justify-center text-white">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Modern Teaching Methods</p>
                                        <p className="text-gray-600 text-sm">Latest equipments and gadgets</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#b30202] rounded-full flex items-center justify-center text-white">
                                        ★
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Holistic Development</p>
                                        <p className="text-gray-600 text-sm">Co-curricular & extra-curricular activities</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#b30202] rounded-full flex items-center justify-center text-white">
                                        ♥
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Student Care</p>
                                        <p className="text-gray-600 text-sm">Secure and supportive environment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

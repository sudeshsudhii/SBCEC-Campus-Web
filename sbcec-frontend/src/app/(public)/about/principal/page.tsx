export default function PrincipalPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-4xl font-bold mb-2">Principal&apos;s Message</h1>
                        <p className="text-red-100">Dr. R. Rajavel</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Image Section */}
                            <div className="md:col-span-1">
                                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-[3/4] relative">
                                        <img
                                            src="/assets/live/principal.png"
                                            alt="Principal - Dr. R. Rajavel"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div className="md:col-span-2">
                                <div className="prose max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Greetings from our Principal</h2>

                                    <div className="text-6xl text-[#b30202] mb-4 leading-none">&ldquo;</div>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        I extend my warm greetings to all students, faculty members, parents, and well-wishers
                                        of Sri Balaji Chockalingam Engineering College. It is an honour to serve as the Principal
                                        of this esteemed institution, and I am committed to upholding the values, vision, and
                                        academic excellence for which our college stands.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        At SBC Engineering College, we believe that true education goes beyond classrooms—it
                                        shapes character, inspires innovation, and prepares students to face real-world challenges
                                        with confidence and competence. Our focus is on creating an environment that encourages
                                        critical thinking, hands-on learning, and holistic development.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        With the support of our dedicated faculty, modern infrastructure, and industry-oriented
                                        approach, we strive to equip every student with the knowledge, skills, and values needed
                                        to succeed in an increasingly competitive world. We also promote research, entrepreneurship,
                                        and community responsibility as key components of engineering education.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        I encourage all students to make the best use of the opportunities provided, uphold
                                        discipline, and pursue excellence in all their endeavors. Together, let us work towards
                                        building a vibrant academic community that stands for integrity, innovation, and inclusive
                                        growth.
                                    </p>

                                    <div className="text-6xl text-[#b30202] text-right leading-none">&rdquo;</div>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 font-medium">With Best Wishes,</p>
                                    <p className="text-xl font-bold text-[#b30202] mt-2">Dr. R. Rajavel</p>
                                    <p className="text-gray-500">Principal</p>
                                    <p className="text-gray-500">Sri Balaji Chockalingam Engineering College</p>
                                </div>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Our Core Pillars</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-[#b30202]">
                                    <div className="text-3xl mb-3">💡</div>
                                    <p className="font-bold text-[#b30202]">Innovation</p>
                                    <p className="text-sm text-gray-600 mt-2">Inspiring creative thinking</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-[#b30202]">
                                    <div className="text-3xl mb-3">🔬</div>
                                    <p className="font-bold text-[#b30202]">Research</p>
                                    <p className="text-sm text-gray-600 mt-2">Advancing knowledge</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-[#b30202]">
                                    <div className="text-3xl mb-3">🚀</div>
                                    <p className="font-bold text-[#b30202]">Entrepreneurship</p>
                                    <p className="text-sm text-gray-600 mt-2">Building future leaders</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-[#b30202]">
                                    <div className="text-3xl mb-3">🤝</div>
                                    <p className="font-bold text-[#b30202]">Community</p>
                                    <p className="text-sm text-gray-600 mt-2">Social responsibility</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-[#b30202] to-[#a00000] rounded-lg text-white text-center">
                            <p className="text-lg font-medium mb-2">Building a Vibrant Academic Community</p>
                            <p className="text-red-100">Integrity • Innovation • Inclusive Growth</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

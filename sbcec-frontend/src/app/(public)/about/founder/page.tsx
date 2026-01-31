export default function FounderPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-4xl font-bold mb-2">Founder&apos;s Message</h1>
                        <p className="text-red-100">Sri Balaji Chockalingam Engineering College</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Image Section */}
                            <div className="md:col-span-1">
                                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-[3/4] relative">
                                        <img
                                            src="/assets/live/founder.png"
                                            alt="Founder"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div className="md:col-span-2">
                                <div className="prose max-w-none">
                                    <div className="text-6xl text-[#b30202] mb-4 leading-none">&ldquo;</div>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        With immense happiness, I say that Students drawn from all parts of India and abroad,
                                        join our college and provide for a potential social, cultural diversity and experience
                                        unto themselves.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Our institution stands as a beacon of knowledge, fostering an environment where young
                                        minds from diverse backgrounds come together to learn, grow, and excel. We take pride
                                        in nurturing not just technically competent engineers, but well-rounded individuals who
                                        contribute significantly to society.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        The multicultural fabric of our student body enriches the learning experience, preparing
                                        our graduates to thrive in an increasingly interconnected global landscape. We remain
                                        committed to providing world-class education that combines academic rigor with practical
                                        application, ethical values, and social responsibility.
                                    </p>
                                    <div className="text-6xl text-[#b30202] text-right leading-none">&rdquo;</div>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 font-medium">Warm Regards,</p>
                                    <p className="text-xl font-bold text-[#b30202] mt-2">Founder</p>
                                    <p className="text-gray-500">Sri Balaji Chockalingam Engineering College</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#b30202] mb-2">29+</div>
                                    <p className="text-gray-600">Years of Excellence</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#b30202] mb-2">Global</div>
                                    <p className="text-gray-600">Student Diversity</p>
                                </div>
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-3xl font-bold text-[#b30202] mb-2">Quality</div>
                                    <p className="text-gray-600">Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

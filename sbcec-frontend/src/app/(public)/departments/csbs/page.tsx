import { PublicLayout } from "@/components/layout/PublicLayout";

export default function CSBSPage() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Computer Science and Business Systems</h1>
                        <p className="text-red-100">Department of CSBS</p>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="md:col-span-2 space-y-6">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">About the Department</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The B.Tech. Computer Science and Business Systems (CSBS) program is designed to address the
                                        growing need for engineering talent with skills in technology, innovation, and business management.
                                        The curriculum is often developed in collaboration with industry partners to ensure relevance.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Students learn core computer science subjects along with humanities, management sciences, and human
                                        values. The aim is to create future-ready professionals who can drive digital transformation in businesses.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">Vision & Mission</h2>
                                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-[#b30202] mb-4">
                                        <h3 className="font-bold text-[#b30202] mb-2">Vision</h3>
                                        <p className="text-gray-700">
                                            To produce industry-ready professionals with a unique blend of technology and business acumen.
                                        </p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-[#b30202]">
                                        <h3 className="font-bold text-[#b30202] mb-2">Mission</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>To impart knowledge in cutting-edge technologies and business principles.</li>
                                            <li>To foster innovation and strategic thinking.</li>
                                            <li>To develop professionals with strong ethical values and global perspective.</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#b30202] mb-4">Course Details</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Degree:</span>
                                            <span className="text-gray-600">B.Tech.</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Duration:</span>
                                            <span className="text-gray-600">4 Years</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Established:</span>
                                            <span className="text-gray-600">Recent</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-medium">Intake:</span>
                                            <span className="text-gray-600">60 Seats</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#b30202] text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-2">Contact HOD</h3>
                                    <p className="mb-4 text-red-100">For inquiries regarding the department</p>
                                    <button className="w-full bg-white text-[#b30202] font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}

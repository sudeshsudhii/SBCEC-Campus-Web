import { PublicLayout } from "@/components/layout/PublicLayout";

export default function ScienceHumanitiesPage() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Science and Humanities</h1>
                        <p className="text-red-100">Department of S & H</p>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="md:col-span-2 space-y-6">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">About the Department</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The Department of Science and Humanities lays the foundation for all engineering disciplines.
                                        It comprises Mathematics, Physics, Chemistry, and English. The department plays a crucial role
                                        in shaping the first-year students and preparing them for their core engineering subjects.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        We focus on developing analytical, scientific, and communication skills. Our laboratories
                                        enable students to understand the practical applications of scientific principles.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">Vision & Mission</h2>
                                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-[#b30202] mb-4">
                                        <h3 className="font-bold text-[#b30202] mb-2">Vision</h3>
                                        <p className="text-gray-700">
                                            To impart high-quality education in basic sciences and humanities to build a strong foundation for engineering education.
                                        </p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-[#b30202]">
                                        <h3 className="font-bold text-[#b30202] mb-2">Mission</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>To foster logical thinking and analytical skills.</li>
                                            <li>To enhance communication skills for professional success.</li>
                                            <li>To mold students into disciplined and ethical individuals.</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#b30202] mb-4">Subjects</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">1.</span>
                                            <span className="text-gray-600">Engineering Mathematics</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">2.</span>
                                            <span className="text-gray-600">Engineering Physics</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">3.</span>
                                            <span className="text-gray-600">Engineering Chemistry</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-medium">4.</span>
                                            <span className="text-gray-600">Technical English</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#b30202] text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-2">Contact HOD</h3>
                                    <p className="mb-4 text-red-100">For inquiries regarding S&H</p>
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

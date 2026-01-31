import { PublicLayout } from "@/components/layout/PublicLayout";

export default function PlacementPage() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-[#b30202] to-[#a00000] text-white p-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Training and Placement Cell</h1>
                        <p className="text-red-100">Career Guidance & Placement</p>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="md:col-span-2 space-y-6">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">About Placement Cell</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The Training and Placement Cell of SBCEC plays a vital role in career counseling and job placement
                                        for students. It functions with the primary aim of placing students in top-notch companies even
                                        before they complete their graduation.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        We organize pre-placement training programs, mock interviews, and soft skills workshops to
                                        enhance the employability of our students. We have signed MOUs with various industries for
                                        internships and training.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#b30202] mb-4 border-b pb-2">Key Activities</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="font-bold text-gray-800 mb-2">Campus Drives</h3>
                                            <p className="text-sm text-gray-600">Organizing on-campus and off-campus recruitment drives.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="font-bold text-gray-800 mb-2">Training</h3>
                                            <p className="text-sm text-gray-600">Aptitude, technical, and soft skills training.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="font-bold text-gray-800 mb-2">Internships</h3>
                                            <p className="text-sm text-gray-600">Facilitating industrial training and internships.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="font-bold text-gray-800 mb-2">Guidance</h3>
                                            <p className="text-sm text-gray-600">Career counseling and higher education guidance.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#b30202] mb-4">Placement Statistics 2024</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Students Placed:</span>
                                            <span className="text-green-600 font-bold">250+</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Companies Visited:</span>
                                            <span className="text-blue-600 font-bold">40+</span>
                                        </li>
                                        <li className="flex justify-between border-b pb-2">
                                            <span className="font-medium">Highest Package:</span>
                                            <span className="text-gray-600">8 LPA</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-medium">Average Package:</span>
                                            <span className="text-gray-600">3.5 LPA</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#b30202] text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-2">Placement Officer</h3>
                                    <p className="mb-4 text-red-100">Contact for recruitment inquiries</p>
                                    <button className="w-full bg-white text-[#b30202] font-bold py-2 rounded hover:bg-gray-100 transition-colors">
                                        Email TPO
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

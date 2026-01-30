"use client";

export function DepartmentGrid() {
    const ugCourses = [
        "B.E. - Computer Science and Engineering",
        "B.E. - Electronics and Communication Engineering",
        "B.E. - Mechanical Engineering",
        "B.E. - Electrical and Electronics Engineering",
        "B.Tech. - Information Technology",
        "B.Tech. - Artificial Intelligence & Data Science"
    ];

    const pgCourses = [
        "M.E. - Computer Science and Engineering",
        "M.E. - Applied Electronics",
        "Master of Computer Applications (MCA)"
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-[#002147] mb-8 border-l-4 border-red-700 pl-4 uppercase">
                    Academics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* UG Degree Table */}
                    <div className="bg-white rounded shadow-sm border overflow-hidden">
                        <div className="bg-[#002147] text-white p-4">
                            <h3 className="text-xl font-bold">Under Graduate Degree</h3>
                        </div>
                        <div className="p-0">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-100 border-b">
                                    <tr>
                                        <th className="px-6 py-3">Course</th>
                                        <th className="px-6 py-3">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {ugCourses.map((course, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium text-slate-800">{course}</td>
                                            {idx === 0 && (
                                                <td rowSpan={ugCourses.length} className="px-6 py-4 text-slate-500 border-l align-middle">
                                                    Four Academic Years Comprising 8 Semesters
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PG Degree Table */}
                    <div className="bg-white rounded shadow-sm border overflow-hidden">
                        <div className="bg-[#800000] text-white p-4">
                            <h3 className="text-xl font-bold">Post Graduate Degree</h3>
                        </div>
                        <div className="p-0">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-100 border-b">
                                    <tr>
                                        <th className="px-6 py-3">Course</th>
                                        <th className="px-6 py-3">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {pgCourses.map((course, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium text-slate-800">{course}</td>
                                            <td className="px-6 py-4 text-slate-500 border-l">
                                                Two Academic Years (4 Semesters)
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

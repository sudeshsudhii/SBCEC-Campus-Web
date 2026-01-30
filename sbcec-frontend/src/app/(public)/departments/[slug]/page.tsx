import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, BookOpen, Trophy } from "lucide-react";

// This would ideally come from an API based on the slug
const getDepartmentData = (slug: string) => {
    const departments: Record<string, any> = {
        cse: {
            name: "Computer Science & Engineering",
            code: "CSE",
            about: "The Department of Computer Science and Engineering was established with a vision to create technically competent computer professionals. We offer a comprehensive curriculum that covers both fundamental concepts and emerging technologies.",
            vision: "To become a center of excellence in Computer Science and Engineering by imparting high-quality education and promoting research.",
            mission: [
                "To provide strong theoretical and practical knowledge.",
                "To encourage innovation and research activities.",
                "To collaborate with industries for better exposure."
            ],
            hod: "Dr. A. Name Placeholder",
            hodMessage: "Welcome to the CSE Department. We strive to provide the best learning environment...",
        },
        // ... we can add others or handle default/not-found
    };

    // For now, return a generic template if specific data isn't hardcoded, 
    // to allow testing the dynamic route structure.
    return departments[slug] || {
        name: slug.toUpperCase() + " Department",
        code: slug.toUpperCase(),
        about: `Welcome to the Department of ${slug.toUpperCase()}. We are dedicated to excellence in education and research.`,
        vision: "To be a leader in technical education.",
        mission: ["Quality Education", "Research & Innovation", "Industry Interaction"],
        hod: "Head of Department",
        hodMessage: "Welcome to our department.",
    };
};

export default function DepartmentDetailPage({ params }: { params: { slug: string } }) {
    const dept = getDepartmentData(params.slug);

    if (!dept) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                        {dept.code}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter">{dept.name}</h1>
                </div>
                <div className="flex bg-muted p-1 rounded-lg">
                    <Link href={`/departments/${params.slug}`}><Button variant="secondary" size="sm">Overview</Button></Link>
                    <Link href={`/departments/${params.slug}/faculty`}><Button variant="ghost" size="sm">Faculty</Button></Link>
                    <Link href={`/departments/${params.slug}/courses`}><Button variant="ghost" size="sm">Courses</Button></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">About the Department</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {dept.about}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
                        <Card className="mb-6">
                            <CardHeader><CardTitle className="text-lg text-blue-600">Vision</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">{dept.vision}</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="text-lg text-green-600">Mission</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    {dept.mission.map((m: string, i: number) => <li key={i}>{m}</li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Head of Department</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="h-24 w-24 rounded-full bg-muted mx-auto flex items-center justify-center text-xs text-muted-foreground">
                                HOD Photo
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-lg">{dept.hod}</p>
                                <p className="text-sm text-muted-foreground">Professor & Head</p>
                            </div>
                            <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                                "{dept.hodMessage}"
                            </blockquote>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 gap-4">
                        <Link href={`/departments/${params.slug}/faculty`}>
                            <Card className="hover:bg-accent transition-colors cursor-pointer">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full"><Users className="h-5 w-5" /></div>
                                    <div>
                                        <p className="font-semibold">Faculty Members</p>
                                        <p className="text-xs text-muted-foreground">View Profiles</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href={`/departments/${params.slug}/courses`}>
                            <Card className="hover:bg-accent transition-colors cursor-pointer">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-full"><BookOpen className="h-5 w-5" /></div>
                                    <div>
                                        <p className="font-semibold">Courses Offered</p>
                                        <p className="text-xs text-muted-foreground">UG & PG Programs</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href={`/departments/${params.slug}/achievements`}>
                            <Card className="hover:bg-accent transition-colors cursor-pointer">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <div className="p-2 bg-yellow-100 text-yellow-600 rounded-full"><Trophy className="h-5 w-5" /></div>
                                    <div>
                                        <p className="font-semibold">Achievements</p>
                                        <p className="text-xs text-muted-foreground">Awards & Recognition</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const departments = [
    {
        name: "Computer Science & Engineering",
        code: "CSE",
        slug: "cse",
        description: "Equipping students with cutting-edge skills in AI, Machine Learning, and Software Development.",
        icon: "💻",
    },
    {
        name: "Electronics & Communication Engineering",
        code: "ECE",
        slug: "ece",
        description: "Focusing on modern communication systems, VLSI design, and embedded systems.",
        icon: "📡",
    },
    {
        name: "Mechanical Engineering",
        code: "MECH",
        slug: "mech",
        description: "Providing strong foundations in design, manufacturing, thermodynamics, and robotics.",
        icon: "⚙️",
    },
    {
        name: "Electrical & Electronics Engineering",
        code: "EEE",
        slug: "eee",
        description: "Exploring power systems, control engineering, and renewable energy technologies.",
        icon: "⚡",
    },
    {
        name: "Information Technology",
        code: "IT",
        slug: "it",
        description: "Specializing in network security, web technologies, and information management.",
        icon: "🖥️",
    },
    {
        name: "Science & Humanities",
        code: "S&H",
        slug: "sh",
        description: "Laying the scientific and mathematical foundation for engineering excellence.",
        icon: "📚",
    },
    {
        name: "Master of Computer Applications",
        code: "MCA",
        slug: "mca",
        description: "Advanced postgraduate program in computer applications and software engineering.",
        icon: "🎓",
    },
];

export default function DepartmentsPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-bold tracking-tighter">Academic Departments</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Explore our wide range of engineering disciplines, each offering state-of-the-art facilities and expert faculty guidance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((dept) => (
                    <Card key={dept.code} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="text-4xl mb-4">{dept.icon}</div>
                            <div className="space-y-1">
                                <CardTitle className="text-xl">{dept.name}</CardTitle>
                                <CardDescription className="text-sm font-semibold text-primary">{dept.code}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                {dept.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/departments/${dept.slug}`} className="w-full">
                                <Button variant="outline" className="w-full group">
                                    View Department
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

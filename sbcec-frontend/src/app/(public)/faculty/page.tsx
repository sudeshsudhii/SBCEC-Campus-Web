import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";

// Mock data
const facultyMembers = [
    { id: 1, name: "Dr. A. Sharma", designation: "Professor & Head", dept: "CSE", img: null },
    { id: 2, name: "Dr. B. Verma", designation: "Associate Professor", dept: "ECE", img: null },
    { id: 3, name: "Mr. C. Kumar", designation: "Assistant Professor", dept: "MECH", img: null },
    { id: 4, name: "Mrs. D. Singh", designation: "Assistant Professor", dept: "CSE", img: null },
    { id: 5, name: "Dr. E. Wilson", designation: "Professor", dept: "EEE", img: null },
    { id: 6, name: "Ms. F. Ali", designation: "Assistant Professor", dept: "IT", img: null },
];

export default function FacultyPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">Our Faculty</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Meet the dedicated professionals who mentor and guide our students towards excellence.
                    </p>
                </div>
                <div className="flex w-full md:w-auto items-center space-x-2">
                    <Input type="text" placeholder="Search faculty..." className="w-full md:w-[300px]" />
                    <Button size="icon"><Search className="h-4 w-4" /></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facultyMembers.map((faculty) => (
                    <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                            {faculty.img ? <img src={faculty.img} alt={faculty.name} /> : "Photo"}
                        </div>
                        <CardContent className="p-6 text-center">
                            <h3 className="font-bold text-lg">{faculty.name}</h3>
                            <p className="text-sm text-primary font-medium mb-1">{faculty.designation}</p>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                {faculty.dept}
                            </div>
                            <div className="mt-4">
                                <Link href={`/faculty/${faculty.id}`}>
                                    <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

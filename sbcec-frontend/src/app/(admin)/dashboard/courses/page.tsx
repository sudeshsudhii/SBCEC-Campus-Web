import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Search, Loader2 } from "lucide-react";
import { CourseService, Course } from "@/services/course.service";

export default function CoursesListPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const response = await CourseService.getAll();
            setCourses(response.data || []);
        } catch (error) {
            console.error("Failed to load courses", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this?")) return;
        try {
            await CourseService.delete(id);
            loadCourses();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
                    <p className="text-muted-foreground">Manage offered programs and intakes.</p>
                </div>
                <Link href="/dashboard/courses/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Course
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {courses.map((course) => (
                    <Card key={course._id}>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-lg">{course.name}</h3>
                                <div className="text-sm text-muted-foreground flex gap-4">
                                    <span className="font-mono bg-muted px-1 rounded">{course.code}</span>
                                    <span>{course.degree}</span>
                                    <span>{course.level}</span>
                                    <span>Intake: {course.intake}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={`/dashboard/courses/${course._id}/edit`}>
                                    <Button variant="outline" size="sm"><Pencil className="h-4 w-4" /></Button>
                                </Link>
                                <Button variant="destructive" size="sm" onClick={() => course._id && handleDelete(course._id)}><Trash2 className="h-4 w-4" /></Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

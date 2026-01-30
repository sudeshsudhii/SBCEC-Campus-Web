import { CourseForm } from "@/components/forms/CourseForm";

export default function CreateCoursePage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Course</h2>
                <p className="text-muted-foreground">Create a new academic program.</p>
            </div>
            <CourseForm />
        </div>
    );
}

import { CourseForm } from "@/components/forms/CourseForm";

export default function EditCoursePage({ params }: { params: { id: string } }) {
    // Mock data
    const course = {
        name: "Computer Science & Engineering",
        code: "BE-CSE",
        department: "CSE",
        level: "UG",
        degree: "B.E.",
        duration: 4,
        intake: 120,
        eligibility: "HSC"
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Course</h2>
                <p className="text-muted-foreground">Update course details.</p>
            </div>
            <CourseForm initialData={course} isEditing />
        </div>
    );
}

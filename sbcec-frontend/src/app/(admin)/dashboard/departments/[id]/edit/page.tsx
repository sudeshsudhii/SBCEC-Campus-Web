import { DepartmentForm } from "@/components/forms/DepartmentForm";

// Mock fetcher
const getDepartment = (id: string) => {
    return {
        name: "Computer Science & Engineering",
        code: "CSE",
        description: "Leading department...",
        vision: "Vision statement...",
        mission: "Mission 1\nMission 2",
        hodName: "Dr. A. Sharma"
    };
}

export default function EditDepartmentPage({ params }: { params: { id: string } }) {
    const department = getDepartment(params.id);

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Department</h2>
                <p className="text-muted-foreground">Update details for {department.name}</p>
            </div>

            <DepartmentForm initialData={department} isEditing />
        </div>
    );
}

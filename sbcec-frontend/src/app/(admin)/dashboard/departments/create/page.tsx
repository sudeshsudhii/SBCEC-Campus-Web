import { DepartmentForm } from "@/components/forms/DepartmentForm";

export default function CreateDepartmentPage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Create Department</h2>
                <p className="text-muted-foreground">Add a new academic department to the system.</p>
            </div>

            <DepartmentForm />
        </div>
    );
}

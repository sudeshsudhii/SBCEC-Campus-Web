import { FacultyForm } from "@/components/forms/FacultyForm";

export default function CreateFacultyPage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add Faculty</h2>
                <p className="text-muted-foreground">Create a new faculty profile.</p>
            </div>

            <FacultyForm />
        </div>
    );
}

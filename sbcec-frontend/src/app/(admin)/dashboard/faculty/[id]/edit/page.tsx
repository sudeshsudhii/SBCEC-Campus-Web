import { FacultyForm } from "@/components/forms/FacultyForm";

// Mock fetcher
const getFaculty = (id: string) => {
    return {
        name: "Dr. A. Sharma",
        designation: "Professor & Head",
        department: "CSE",
        qualification: "Ph.D",
        experience: 15,
        email: "hod.cse@sbcec.edu.in",
        phone: "+91 9876543210",
        bio: "Experienced Academician with..."
    };
}

export default function EditFacultyPage({ params }: { params: { id: string } }) {
    const faculty = getFaculty(params.id);

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Profile</h2>
                <p className="text-muted-foreground">Update details for {faculty.name}</p>
            </div>

            <FacultyForm initialData={faculty} isEditing />
        </div>
    );
}

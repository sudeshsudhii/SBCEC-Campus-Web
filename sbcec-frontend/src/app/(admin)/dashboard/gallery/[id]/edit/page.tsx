import { GalleryForm } from "@/components/forms/GalleryForm";

export default function EditGalleryPage({ params }: { params: { id: string } }) {
    // Mock data
    const gallery = {
        title: "Graduation Day 2025",
        category: "Events",
        eventDate: "2025-05-20",
        description: "Photos from the 25th Graduation Day ceremony.",
        images: [{ url: "u1", caption: "Stage" }, { url: "u2", caption: "Audience" }]
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Album</h2>
                <p className="text-muted-foreground">Manage photos in this collection.</p>
            </div>
            <GalleryForm initialData={gallery} isEditing />
        </div>
    );
}

import { GalleryForm } from "@/components/forms/GalleryForm";

export default function CreateGalleryPage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Create Album</h2>
                <p className="text-muted-foreground">Add a new photo collection.</p>
            </div>
            <GalleryForm />
        </div>
    );
}

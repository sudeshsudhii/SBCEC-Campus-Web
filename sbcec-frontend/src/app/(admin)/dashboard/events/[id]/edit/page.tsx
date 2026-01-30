import { EventForm } from "@/components/forms/EventForm";

export default function EditEventPage({ params }: { params: { id: string } }) {
    // Mock data
    const event = {
        title: "National Conference on AI",
        category: "Conference",
        eventDate: "2026-03-15T09:00",
        venue: "Auditorium",
        organizer: "CSE Dept",
        description: "Sample description",
        status: "published"
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Event</h2>
                <p className="text-muted-foreground">Update event details.</p>
            </div>
            <EventForm initialData={event} isEditing />
        </div>
    );
}

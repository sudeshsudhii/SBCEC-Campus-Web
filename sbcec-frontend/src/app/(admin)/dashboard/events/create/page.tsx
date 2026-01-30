import { EventForm } from "@/components/forms/EventForm";

export default function CreateEventPage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Create Event</h2>
                <p className="text-muted-foreground">Publish a new event or activity.</p>
            </div>
            <EventForm />
        </div>
    );
}

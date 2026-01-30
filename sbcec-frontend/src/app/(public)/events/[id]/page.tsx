import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";

// Mock data fetcher
const getEvent = (id: string) => {
    // In a real app, fetch from API
    if (id === '1') return {
        id: 1,
        title: "National Conference on AI",
        date: "2026-03-15",
        time: "09:00 AM - 04:00 PM",
        venue: "Main Auditorium, SBCEC",
        category: "Conference",
        description: "A premier gathering of researchers and practitioners to discuss the latest advancements in Artificial Intelligence.",
        organizer: "Dept. of CSE",
        content: "<p>Detailed description of the event...</p>"
    };
    return null;
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
    const event = getEvent(params.id);

    if (!event) {
        // For demo purposes, show the mock 1 if not found, or 404
        // return notFound(); 
        // Fallback for UI visualization
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold">Event not found (Demo ID: 1)</h1>
                <Link href="/events"><Button className="mt-4">Back to Events</Button></Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="mb-8">
                <Link href="/events" className="text-primary hover:underline text-sm mb-4 inline-block">
                    &larr; Back to Events
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">{event.title}</h1>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                        {event.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                        Organized by {event.organizer}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                        Event Cover Image
                    </div>

                    <div className="prose max-w-none dark:prose-invert">
                        <h3 className="text-2xl font-bold mb-4">About the Event</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">{event.description}</p>
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                            <p className="italic">More detailed content would go here...</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="p-6 border rounded-lg shadow-sm space-y-6">
                        <h3 className="font-bold text-xl border-b pb-2">Event Details</h3>

                        <div className="flex items-start">
                            <Calendar className="mr-3 h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-medium">Date</p>
                                <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Clock className="mr-3 h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-medium">Time</p>
                                <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <MapPin className="mr-3 h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <p className="font-medium">Venue</p>
                                <p className="text-sm text-muted-foreground">{event.venue}</p>
                            </div>
                        </div>

                        <Button className="w-full">Register Now</Button>
                    </div>

                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4">Share this event</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
                            {/* Social icons placeholders */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

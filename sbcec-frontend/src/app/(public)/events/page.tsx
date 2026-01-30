import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Calendar, MapPin } from "lucide-react";

// Mock Data
const events = [
    { id: 1, title: "National Conference on AI", date: "2026-03-15", time: "09:00 AM", venue: "Auditorium", category: "Conference", image: null },
    { id: 2, title: "Cultural Fest 'Srishti 26'", date: "2026-04-02", time: "10:00 AM", venue: "Open Air Theatre", category: "Cultural", image: null },
    { id: 3, title: "Workshop on IoT", date: "2026-02-28", time: "09:30 AM", venue: "Seminar Hall 1", category: "Workshop", image: null },
    { id: 4, title: "Sports Day", date: "2026-03-20", time: "08:00 AM", venue: "College Ground", category: "Sports", image: null },
];

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Events & Activities</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Stay updated with the latest happenings, workshops, conferences, and cultural events at SBCEC.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <Card key={event.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-all">
                        <div className="h-48 bg-muted w-full flex items-center justify-center text-muted-foreground">
                            {event.image || "Event Image"}
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary">
                                    {event.category}
                                </div>
                            </div>
                            <CardTitle className="text-xl mt-2 line-clamp-2">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-3">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />
                                {new Date(event.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-2 h-4 w-4" />
                                {event.venue}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/events/${event.id}`} className="w-full">
                                <Button className="w-full">View Details</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Calendar, MapPin, Loader2 } from "lucide-react";
import { EventService, Event } from "@/services/event.service";

export default function EventsListPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            const response = await EventService.getAll();
            setEvents(response.data || []);
        } catch (error) {
            console.error("Failed to load events", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this event?")) return;
        try {
            await EventService.delete(id);
            loadEvents();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Events</h2>
                    <p className="text-muted-foreground">Manage college events and activities.</p>
                </div>
                <Link href="/dashboard/events/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Event
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {events.map((event) => (
                    <Card key={event._id}>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-lg">{event.title}</h3>
                                    <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${event.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground flex gap-4">
                                    <span className="flex items-center"><Calendar className="mr-1 h-3 w-3" /> {new Date(event.eventDate).toLocaleDateString()}</span>
                                    <span className="flex items-center"><MapPin className="mr-1 h-3 w-3" /> {event.venue}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={`/dashboard/events/${event._id}/edit`}>
                                    <Button variant="outline" size="sm"><Pencil className="h-4 w-4" /></Button>
                                </Link>
                                <Button variant="destructive" size="sm" onClick={() => event._id && handleDelete(event._id)}><Trash2 className="h-4 w-4" /></Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

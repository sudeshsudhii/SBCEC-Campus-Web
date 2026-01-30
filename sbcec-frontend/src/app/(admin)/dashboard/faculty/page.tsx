"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Search, Filter, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FacultyService, Faculty } from "@/services/faculty.service";

export default function FacultyListPage() {
    const [facultyMembers, setFacultyMembers] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFaculty();
    }, []);

    const loadFaculty = async () => {
        try {
            const response = await FacultyService.getAll();
            setFacultyMembers(response.data || []);
        } catch (error) {
            console.error("Failed to load faculty", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this faculty member?")) return;
        try {
            await FacultyService.delete(id);
            loadFaculty();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Faculty Directory</h2>
                    <p className="text-muted-foreground">Manage faculty profiles and details.</p>
                </div>
                <Link href="/dashboard/faculty/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Faculty
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Input placeholder="Search faculty..." className="w-full sm:w-[300px]" />
                    <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" /> Filter by Dept
                </Button>
            </div>

            <div className="grid gap-6">
                {facultyMembers.map((faculty) => (
                    <Card key={faculty._id}>
                        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-1rem font-bold">
                                    {(faculty.name || "U").charAt(0)}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-lg">{faculty.name}</h3>
                                        {/* For real data, display dept name if available, or just code */}
                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                                            Dept
                                        </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground flex items-center gap-3">
                                        <span>{faculty.designation}</span>
                                        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                                        <span>{faculty.qualification}</span>
                                        <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                                        <span>{faculty.experience} Yrs Exp</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                <Link href={`/dashboard/faculty/${faculty._id}/edit`}>
                                    <Button variant="outline" size="sm">
                                        <Pencil className="mr-2 h-3 w-3" /> Edit
                                    </Button>
                                </Link>
                                <Button variant="destructive" size="sm" onClick={() => faculty._id && handleDelete(faculty._id)}>
                                    <Trash2 className="mr-2 h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

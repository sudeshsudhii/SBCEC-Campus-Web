"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { DepartmentService, Department } from "@/services/department.service";

export default function DepartmentsListPage() {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDepartments();
    }, []);

    const loadDepartments = async () => {
        try {
            const response = await DepartmentService.getAll();
            // Adjust based on actual API response structure (e.g., response.data.departments or just response)
            setDepartments(response.data || []);
        } catch (error) {
            console.error("Failed to load departments", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this department?")) return;
        try {
            await DepartmentService.delete(id);
            loadDepartments();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Departments</h2>
                    <p className="text-muted-foreground">Manage academic departments and their details.</p>
                </div>
                <Link href="/dashboard/departments/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Department
                    </Button>
                </Link>
            </div>

            <div className="flex items-center gap-2 max-w-sm">
                <Input placeholder="Search departments..." />
                <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
            </div>

            <div className="grid gap-6">
                {departments.map((dept) => (
                    <Card key={dept._id}>
                        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-lg">{dept.name}</h3>
                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">{dept.code}</span>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-4">
                                    <span>HOD: {dept.hodName || 'Not Assigned'}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link href={`/dashboard/departments/${dept._id}/edit`}>
                                    <Button variant="outline" size="sm">
                                        <Pencil className="mr-2 h-3 w-3" /> Edit
                                    </Button>
                                </Link>
                                <Button variant="destructive" size="sm" onClick={() => dept._id && handleDelete(dept._id)}>
                                    <Trash2 className="mr-2 h-3 w-3" /> Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

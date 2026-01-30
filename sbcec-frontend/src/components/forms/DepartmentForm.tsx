"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2 } from "lucide-react";
import { DepartmentService } from "@/services/department.service";

interface DepartmentFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function DepartmentForm({ initialData, isEditing = false }: DepartmentFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        code: initialData?.code || "",
        description: initialData?.description || "",
        vision: initialData?.vision || "",
        mission: initialData?.mission || "",
        hodName: initialData?.hodName || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditing && initialData._id) {
                await DepartmentService.update(initialData._id, formData);
            } else {
                await DepartmentService.create(formData);
            }
            router.push("/dashboard/departments");
            router.refresh();
        } catch (error) {
            console.error(error);
            // Add toast notification here
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardContent className="pt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Department Name</label>
                            <Input
                                name="name"
                                placeholder="Computer Science and Engineering"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Department Code</label>
                            <Input
                                name="code"
                                placeholder="CSE"
                                value={formData.code}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            name="description"
                            placeholder="Brief overview of the department..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Vision</label>
                        <Textarea
                            name="vision"
                            placeholder="Department vision statement..."
                            value={formData.vision}
                            onChange={handleChange}
                            rows={2}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Mission</label>
                        <Textarea
                            name="mission"
                            placeholder="Department mission statements (one per line)..."
                            value={formData.mission}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Head of Department (Name)</label>
                        <Input
                            name="hodName"
                            placeholder="Dr. Name Surname"
                            value={formData.hodName}
                            onChange={handleChange}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={loading}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isEditing ? "Update Department" : "Create Department"}
                </Button>
            </div>
        </form>
    );
}

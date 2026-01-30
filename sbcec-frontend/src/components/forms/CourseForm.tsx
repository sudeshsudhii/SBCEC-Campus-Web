"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2 } from "lucide-react";
import { CourseService } from "@/services/course.service";

interface CourseFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function CourseForm({ initialData, isEditing = false }: CourseFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        code: initialData?.code || "",
        department: initialData?.department || "",
        level: initialData?.level || "UG",
        degree: initialData?.degree || "B.E.",
        duration: initialData?.duration || 4,
        intake: initialData?.intake || 60,
        eligibility: initialData?.eligibility || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditing && initialData._id) {
                await CourseService.update(initialData._id, formData);
            } else {
                await CourseService.create(formData);
            }
            router.push("/dashboard/courses");
            router.refresh();
        } catch (error) {
            console.error(error);
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
                            <label className="text-sm font-medium">Course Name</label>
                            <Input
                                name="name"
                                placeholder="Computer Science and Engineering"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Course Code</label>
                            <Input
                                name="code"
                                placeholder="CS"
                                value={formData.code}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Department</label>
                            <Input
                                name="department"
                                placeholder="CSE"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Degree</label>
                            <Input
                                name="degree"
                                placeholder="B.E."
                                value={formData.degree}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Level</label>
                            <select
                                name="level"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                value={formData.level}
                                onChange={handleChange}
                            >
                                <option value="UG">Undergraduate (UG)</option>
                                <option value="PG">Postgraduate (PG)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Duration (Years)</label>
                            <Input
                                name="duration"
                                type="number"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Intake Capacity</label>
                            <Input
                                name="intake"
                                type="number"
                                value={formData.intake}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Eligibility Criteria</label>
                        <Textarea
                            name="eligibility"
                            placeholder="e.g. Higher Secondary with 50% aggregate..."
                            value={formData.eligibility}
                            onChange={handleChange}
                            rows={3}
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
                    {isEditing ? "Update Course" : "Add Course"}
                </Button>
            </div>
        </form>
    );
}

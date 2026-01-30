"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2 } from "lucide-react";
import { FacultyService } from "@/services/faculty.service";

interface FacultyFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function FacultyForm({ initialData, isEditing = false }: FacultyFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        designation: initialData?.designation || "",
        department: initialData?.department || "",
        qualification: initialData?.qualification || "",
        experience: initialData?.experience || "",
        email: initialData?.email || "",
        phone: initialData?.phone || "",
        bio: initialData?.bio || "",
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
                await FacultyService.update(initialData._id, formData);
            } else {
                await FacultyService.create(formData);
            }
            router.push("/dashboard/faculty");
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
                            <label className="text-sm font-medium">Full Name</label>
                            <Input
                                name="name"
                                placeholder="Dr. John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Designation</label>
                            <Input
                                name="designation"
                                placeholder="Assistant Professor"
                                value={formData.designation}
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
                            <label className="text-sm font-medium">Qualification</label>
                            <Input
                                name="qualification"
                                placeholder="M.E., Ph.D."
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Experience (Years)</label>
                            <Input
                                name="experience"
                                type="number"
                                placeholder="5"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="faculty@sbcec.edu.in"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input
                                name="phone"
                                placeholder="+91 9876543210"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Bio / Research Interests</label>
                        <Textarea
                            name="bio"
                            placeholder="Brief biography and areas of research..."
                            value={formData.bio}
                            onChange={handleChange}
                            rows={4}
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
                    {isEditing ? "Update Faculty" : "Add Faculty"}
                </Button>
            </div>
        </form>
    );
}

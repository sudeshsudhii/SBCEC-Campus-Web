"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2 } from "lucide-react";
import { NoticeService } from "@/services/notice.service";

interface NoticeFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function NoticeForm({ initialData, isEditing = false }: NoticeFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        category: initialData?.category || "General",
        priority: initialData?.priority || "medium",
        expiryDate: initialData?.expiryDate || "",
        content: initialData?.content || "",
        isPinned: initialData?.isPinned || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Handle checkbox separately if needed, but for now assuming just text/select
        // For checkbox:
        if (type === 'checkbox') {
            setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditing && initialData._id) {
                await NoticeService.update(initialData._id, formData);
            } else {
                await NoticeService.create(formData);
            }
            router.push("/dashboard/notices");
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
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Title</label>
                        <Input
                            name="title"
                            placeholder="Announcement Title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <select
                                name="category"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="General">General</option>
                                <option value="Academic">Academic</option>
                                <option value="Exam">Exam</option>
                                <option value="Admission">Admission</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Priority</label>
                            <select
                                name="priority"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Expiry Date</label>
                            <Input
                                name="expiryDate"
                                type="date"
                                value={formData.expiryDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center space-x-2 pt-8">
                            <input
                                type="checkbox"
                                id="isPinned"
                                name="isPinned"
                                checked={formData.isPinned}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="isPinned" className="text-sm font-medium">Pin to Top</label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Content / Details</label>
                        <Textarea
                            name="content"
                            placeholder="Full details of the notice..."
                            value={formData.content}
                            onChange={handleChange}
                            rows={5}
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
                    {isEditing ? "Update Notice" : "Post Notice"}
                </Button>
            </div>
        </form>
    );
}

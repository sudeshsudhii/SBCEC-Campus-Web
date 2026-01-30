"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Loader2, Plus, X, Image as ImageIcon } from "lucide-react";
import { GalleryService } from "@/services/gallery.service";

interface GalleryFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function GalleryForm({ initialData, isEditing = false }: GalleryFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        category: initialData?.category || "campus",
        eventDate: initialData?.eventDate || "",
        images: initialData?.images || [], // Array of { url, caption }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Mock function to simulate adding an image
    const addImage = () => {
        const newImage = { url: "placeholder-image-url", caption: "" };
        setFormData((prev: any) => ({ ...prev, images: [...prev.images, newImage] }));
    };

    const removeImage = (index: number) => {
        setFormData((prev: any) => ({
            ...prev,
            images: prev.images.filter((_: any, i: number) => i !== index),
        }));
    };

    const handleImageCaptionChange = (index: number, caption: string) => {
        const newImages = [...formData.images];
        newImages[index].caption = caption;
        setFormData((prev) => ({ ...prev, images: newImages }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditing && initialData._id) {
                await GalleryService.update(initialData._id, formData);
            } else {
                await GalleryService.create(formData);
            }
            router.push("/dashboard/gallery");
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
                        <label className="text-sm font-medium">Album Title</label>
                        <Input
                            name="title"
                            placeholder="e.g. Graduation Day 2025"
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
                                <option value="campus">Campus Life</option>
                                <option value="events">Events</option>
                                <option value="infrastructure">Infrastructure</option>
                                <option value="achievements">Achievements</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Event Date (Optional)</label>
                            <Input
                                name="eventDate"
                                type="date"
                                value={formData.eventDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            name="description"
                            placeholder="Brief description of this collection..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Images</label>
                            <Button type="button" variant="secondary" size="sm" onClick={addImage}>
                                <Plus className="mr-2 h-4 w-4" /> Add Image
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {formData.images.map((img: any, index: number) => (
                                <div key={index} className="relative group rounded-lg border p-2 space-y-2">
                                    <div className="aspect-square bg-muted flex items-center justify-center rounded overflow-hidden">
                                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <Input
                                        placeholder="Caption"
                                        value={img.caption}
                                        onChange={(e) => handleImageCaptionChange(index, e.target.value)}
                                        className="h-8 text-xs"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                            ))}
                            {formData.images.length === 0 && (
                                <div className="col-span-full py-8 text-center text-muted-foreground border-2 border-dashed rounded-lg">
                                    No images added yet. Click "Add Image" to start.
                                </div>
                            )}
                        </div>
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
                    {isEditing ? "Update Album" : "Create Album"}
                </Button>
            </div>
        </form>
    );
}

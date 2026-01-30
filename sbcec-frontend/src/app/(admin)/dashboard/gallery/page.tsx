import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Image as ImageIcon, Loader2 } from "lucide-react";
import { GalleryService, Gallery } from "@/services/gallery.service";

export default function GalleryListPage() {
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGalleries();
    }, []);

    const loadGalleries = async () => {
        try {
            const response = await GalleryService.getAll();
            setGalleries(response.data || []);
        } catch (error) {
            console.error("Failed to load galleries", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this album?")) return;
        try {
            await GalleryService.delete(id);
            loadGalleries();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
                    <p className="text-muted-foreground">Manage photo albums and collections.</p>
                </div>
                <Link href="/dashboard/gallery/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Create Album
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleries.map((gallery) => (
                    <Card key={gallery._id} className="overflow-hidden">
                        <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground relative">
                            {gallery.images && gallery.images.length > 0 && gallery.images[0].url ? (
                                <img src={gallery.images[0].url} alt={gallery.title} className="object-cover w-full h-full" />
                            ) : (
                                <ImageIcon className="h-10 w-10" />
                            )}
                        </div>
                        <CardContent className="p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold line-clamp-1">{gallery.title}</h3>
                                    <p className="text-xs text-muted-foreground">{gallery.category} • {gallery.images?.length || 0} Photos</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                <Link href={`/dashboard/gallery/${gallery._id}/edit`} className="flex-1">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Pencil className="mr-2 h-3 w-3" /> Edit
                                    </Button>
                                </Link>
                                <Button variant="destructive" size="sm" className="px-3" onClick={() => gallery._id && handleDelete(gallery._id)}>
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

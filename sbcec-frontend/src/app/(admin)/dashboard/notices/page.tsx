import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, Pin, Loader2 } from "lucide-react";
import { NoticeService, Notice } from "@/services/notice.service";

export default function NoticesListPage() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNotices();
    }, []);

    const loadNotices = async () => {
        try {
            const response = await NoticeService.getAll();
            setNotices(response.data || []);
        } catch (error) {
            console.error("Failed to load notices", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this notice?")) return;
        try {
            await NoticeService.delete(id);
            loadNotices();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Notices</h2>
                    <p className="text-muted-foreground">Manage announcements and circulars.</p>
                </div>
                <Link href="/dashboard/notices/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Post Notice
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {notices.map((notice) => (
                    <Card key={notice._id}>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    {notice.isPinned && <Pin className="h-3 w-3 text-primary rotate-45" />}
                                    <h3 className="font-semibold text-lg">{notice.title}</h3>
                                </div>
                                <div className="text-sm text-muted-foreground flex gap-4">
                                    <span className="bg-secondary px-2 py-0.5 rounded text-xs">{notice.category}</span>
                                    <span>{notice.expiryDate ? new Date(notice.expiryDate).toLocaleDateString() : 'No Expiry'}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={`/dashboard/notices/${notice._id}/edit`}>
                                    <Button variant="outline" size="sm"><Pencil className="h-4 w-4" /></Button>
                                </Link>
                                <Button variant="destructive" size="sm" onClick={() => notice._id && handleDelete(notice._id)}><Trash2 className="h-4 w-4" /></Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Pin, FileText, Download } from "lucide-react";

// Mock Data
const notices = [
    { id: 1, title: "Exam Schedule - April/May 2026", date: "2026-03-25", category: "Exam", pinned: true, file: true },
    { id: 2, title: "Applications invited for Scholarship 2026", date: "2026-03-20", category: "General", pinned: true, file: true },
    { id: 3, title: "College Holiday Declaration", date: "2026-03-18", category: "General", pinned: false, file: false },
    { id: 4, title: "Placement Drive - TCS", date: "2026-03-15", category: "Placement", pinned: false, file: true },
    { id: 5, title: "Library Due Date Extension", date: "2026-03-10", category: "Academic", pinned: false, file: false },
];

export default function NoticesPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Announcements & Circulars</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Important updates, circulars, and notifications for students and faculty.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {notices.map((notice) => (
                    <Card key={notice.id} className={`transition-all hover:shadow-md ${notice.pinned ? 'border-primary/50 bg-primary/5' : ''}`}>
                        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center p-6 gap-4">
                            {/* Date Box */}
                            <div className={`flex flex-col items-center justify-center p-3 rounded-lg min-w-[80px] ${notice.pinned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                <span className="text-xs font-medium uppercase">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                                <span className="text-2xl font-bold">{new Date(notice.date).getDate()}</span>
                            </div>

                            <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                    {notice.pinned && <Pin className="h-3 w-3 text-primary rotate-45" />}
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                        {notice.category}
                                    </span>
                                </div>
                                <Link href={`/notices/${notice.id}`}>
                                    <h3 className="font-bold text-lg hover:underline decoration-primary underline-offset-4">
                                        {notice.title}
                                    </h3>
                                </Link>
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                {notice.file && (
                                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                                        <Download className="mr-2 h-3 w-3" /> Download
                                    </Button>
                                )}
                                <Link href={`/notices/${notice.id}`} className="w-full sm:w-auto">
                                    <Button variant="ghost" size="sm" className="w-full">
                                        Read More &rarr;
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

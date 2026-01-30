import { NoticeForm } from "@/components/forms/NoticeForm";

export default function EditNoticePage({ params }: { params: { id: string } }) {
    // Mock data
    const notice = {
        title: "Exam Schedule",
        category: "Exam",
        priority: "high",
        expiryDate: "2026-04-01",
        content: "Schedule details...",
        isPinned: true
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit Notice</h2>
                <p className="text-muted-foreground">Update announcement.</p>
            </div>
            <NoticeForm initialData={notice} isEditing />
        </div>
    );
}

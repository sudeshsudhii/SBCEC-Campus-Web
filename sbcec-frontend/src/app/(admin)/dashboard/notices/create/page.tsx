import { NoticeForm } from "@/components/forms/NoticeForm";

export default function CreateNoticePage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Post Notice</h2>
                <p className="text-muted-foreground">Create a new announcement.</p>
            </div>
            <NoticeForm />
        </div>
    );
}

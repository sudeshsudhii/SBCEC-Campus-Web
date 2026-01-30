import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "lucide-react";

export default function HistoryPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">Our History</h1>
                    <p className="text-lg text-muted-foreground">
                        A journey of over two decades in shaping the future of engineering education.
                    </p>
                </div>

                <div className="relative border-l border-muted-foreground/20 ml-4 md:ml-0 space-y-12 md:space-y-0">

                    {[
                        { year: "1999", title: "Inception", description: "SBCEC was established by the Thirumalai Madhanur Charitable Trust with 3 undergraduate programs." },
                        { year: "2005", title: "Expansion", description: "Added new branches including Electronics & Communication and Mechanical Engineering." },
                        { year: "2010", title: "Postgraduate Programs", description: "Introduced MCA and ME programs to foster advanced learning and research." },
                        { year: "2015", title: "Infrastructure Growth", description: "Inaugurated state-of-the-art library block and advanced computer laboratories." },
                        { year: "2020", title: "Accreditation", description: "Received accreditation for key programs, recognizing academic excellence." },
                        { year: "2024", title: "Silver Jubilee", description: "Celebrated 25 years of empowering students and contributing to society." },
                    ].map((item, index) => (
                        <div key={item.year} className="md:grid md:grid-cols-5 relative group">
                            <div className="hidden md:flex items-center justify-end md:col-span-1 pr-8">
                                <span className="text-xl font-bold text-primary">{item.year}</span>
                            </div>

                            <div className="absolute -left-[5px] md:left-[19.5%] mt-1.5 h-3 w-3 rounded-full border border-primary bg-background group-hover:bg-primary transition-colors" />

                            <div className="ml-8 md:ml-8 md:col-span-4 pb-12 md:pb-0">
                                <div className="md:hidden mb-2">
                                    <span className="text-xl font-bold text-primary">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="space-y-6 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About SBCEC</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                    Sri Balaji Chockalingam Engineering College, established in 1999, is a premier institution dedicated to excellence in technical education.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Legacy of Excellence</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Founded by the Thirumalai Madhanur Charitable Trust, SBCEC has been at the forefront of engineering education in the region for over two decades. Our campus, located in a serene atmosphere in Arni, provides the perfect environment for learning and innovation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        We are approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Anna University, Chennai. Our commitment to quality education is reflected in our consistent academic performance and placement records.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/about/history">
                            <Button>Our History</Button>
                        </Link>
                        <Link href="/about/objectives">
                            <Button variant="outline">Vision & Mission</Button>
                        </Link>
                    </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
                    {/* Placeholder for College Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        College Building Image
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            World-Class Infrastructure
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            State-of-the-art laboratories, modern classrooms, and a well-stocked library to support academic growth.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            Experienced Faculty
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            A team of highly qualified and dedicated professors committed to mentoring the next generation of engineers.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            Holistic Development
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Focus on personality development, soft skills, and extracurricular activities alongside academics.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

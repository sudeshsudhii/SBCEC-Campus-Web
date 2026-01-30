import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Target, Lightbulb, Shield } from "lucide-react";

export default function ObjectivesPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">Vision, Mission & Quality Policy</h1>
                    <p className="text-lg text-muted-foreground">
                        Guiding principles that define our educational philosophy and goals.
                    </p>
                </div>

                <div className="grid gap-8">
                    <Card className="border-l-4 border-l-blue-600">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Lightbulb className="h-8 w-8 text-blue-600" />
                                Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                To serve the society by offering top-notch technical education on par with global standards and to mould the students as socially responsible and technically competent citizens.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-600">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Target className="h-8 w-8 text-green-600" />
                                Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-5">
                                <li>To provide high-quality technical education through effective teaching-learning processes.</li>
                                <li>To enhance the technical skills and personality of students to meet industry requirements.</li>
                                <li>To innate ethical values and leadership qualities in students.</li>
                                <li>To foster research and innovation among faculty and students.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-600">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Shield className="h-8 w-8 text-purple-600" />
                                Quality Policy
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                We at Sri Balaji Chockalingam Engineering College are committed to providing quality technical education and training to students to meet the changing needs of the industry and society through continuous improvement of our infrastructure, facilities, and human resources.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

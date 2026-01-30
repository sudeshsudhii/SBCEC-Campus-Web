import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Building2, Users, GraduationCap, Calendar } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">+4 new this month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,450</div>
                        <p className="text-xs text-muted-foreground">+12% from last year</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Departments</CardTitle>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-muted-foreground">Fully operational</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">Scheduled this month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4 border-b pb-2 last:border-0 last:pb-0">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs ring-2 ring-white">
                                        A
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium leading-none">Admin updated CSE Department</p>
                                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors border flex items-center gap-3">
                            <div className="p-2 bg-green-100 text-green-600 rounded-md"><Calendar className="h-4 w-4" /></div>
                            <span className="font-medium text-sm">Post New Event</span>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors border flex items-center gap-3">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-md"><Users className="h-4 w-4" /></div>
                            <span className="font-medium text-sm">Add New Faculty</span>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors border flex items-center gap-3">
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-md"><GraduationCap className="h-4 w-4" /></div>
                            <span className="font-medium text-sm">Update Courses</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, Calendar, DollarSign, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  // Mock platform-wide data
  const platformStats = {
    totalOrganizers: 127,
    totalEvents: 342,
    platformRevenue: 2450000,
    activeUsers: 15420,
  };

  const pendingApprovals = [
    { id: 1, eventName: "Tech Summit 2024", organizer: "Innovation Hub", status: "pending" },
    { id: 2, eventName: "Jazz Night", organizer: "Music Collective", status: "pending" },
    { id: 3, eventName: "Startup Pitch Night", organizer: "Venture Labs", status: "pending" },
  ];

  const recentPayouts = [
    { id: 1, organizer: "Mark's Events", amount: 45000, status: "completed", date: "Oct 28" },
    { id: 2, organizer: "Art Gallery Kenya", amount: 12000, status: "completed", date: "Oct 27" },
    { id: 3, organizer: "Food Festival Co", amount: 67000, status: "pending", date: "Oct 29" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-card py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Super Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Platform health and management overview</p>
          </div>
        </section>

        {/* Platform KPIs */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Organizers</CardTitle>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{platformStats.totalOrganizers}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">+23</span> this month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{platformStats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">+45</span> this month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES {platformStats.platformRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">+18.7%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Activity className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{platformStats.activeUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Admin Content */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="approvals" className="space-y-6">
              <TabsList>
                <TabsTrigger value="approvals">Event Approvals</TabsTrigger>
                <TabsTrigger value="payouts">Payouts</TabsTrigger>
                <TabsTrigger value="organizers">Organizers</TabsTrigger>
                <TabsTrigger value="platform">Platform Health</TabsTrigger>
              </TabsList>

              <TabsContent value="approvals" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Pending Event Approvals</h2>
                  <Badge variant="secondary">{pendingApprovals.length} pending</Badge>
                </div>
                
                <div className="grid gap-4">
                  {pendingApprovals.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{event.eventName}</CardTitle>
                            <CardDescription>By {event.organizer}</CardDescription>
                          </div>
                          <Badge variant="outline" className="gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Pending Review
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button size="sm" className="gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="destructive">Reject</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payouts" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Payout Management</h2>
                  <Button>Process Pending</Button>
                </div>
                
                <div className="grid gap-4">
                  {recentPayouts.map((payout) => (
                    <Card key={payout.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{payout.organizer}</p>
                            <p className="text-sm text-muted-foreground">{payout.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">KES {payout.amount.toLocaleString()}</p>
                            <Badge variant={payout.status === "completed" ? "default" : "secondary"}>
                              {payout.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="organizers">
                <Card>
                  <CardHeader>
                    <CardTitle>Organizer Management</CardTitle>
                    <CardDescription>Manage organizer accounts and permissions</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Organizer list will appear here</p>
                      <p className="text-sm mt-2">Connect to backend to manage organizers</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="platform">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Health Metrics</CardTitle>
                    <CardDescription>System performance and monitoring</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Activity className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Platform metrics will appear here</p>
                      <p className="text-sm mt-2">Connect to backend for real-time monitoring</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

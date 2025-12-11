import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Users, DollarSign, TrendingUp, Calendar, Bell, Settings } from "lucide-react";

const OrganizerDashboard = () => {
  // Mock data - will be replaced with real API calls
  const stats = {
    totalRevenue: 245000,
    ticketsSold: 1247,
    activeEvents: 3,
    checkIns: 892,
  };

  const upcomingEvents = [
    { id: 1, name: "Afro Fusion Night", date: "Nov 2, 2024", ticketsSold: 450, revenue: 112500 },
    { id: 2, name: "Art Exhibition", date: "Nov 7, 2024", ticketsSold: 120, revenue: 0 },
    { id: 3, name: "Street Food Festival", date: "Nov 9, 2024", ticketsSold: 677, revenue: 132500 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-card py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Organizer Dashboard
                </h1>
                <p className="text-muted-foreground">Welcome back, Mark! Here's your event overview.</p>
              </div>
              <Button className="gap-2">
                <Calendar className="h-5 w-5" />
                Create Event
              </Button>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES {stats.totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">+12.5%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.ticketsSold}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">+8.2%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeEvents}</div>
                  <p className="text-xs text-muted-foreground mt-1">Currently live</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Check-ins</CardTitle>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.checkIns}</div>
                  <p className="text-xs text-muted-foreground mt-1">71.5% attendance rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="events" className="space-y-6">
              <TabsList>
                <TabsTrigger value="events">My Events</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="attendees">Attendees</TabsTrigger>
                <TabsTrigger value="payouts">Payouts</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button variant="outline" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Manage
                  </Button>
                </div>
                
                <div className="grid gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{event.name}</CardTitle>
                            <CardDescription>{event.date}</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm">View Details</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Tickets Sold</p>
                            <p className="text-2xl font-bold">{event.ticketsSold}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Revenue</p>
                            <p className="text-2xl font-bold">KES {event.revenue.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Sales Velocity</p>
                            <p className="text-sm font-medium text-green-500">+15/day</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className="text-sm font-medium text-green-500">On Track</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Analytics</CardTitle>
                    <CardDescription>Track your performance over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Analytics charts will appear here</p>
                      <p className="text-sm mt-2">Connect to backend to see real-time data</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attendees">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendee Management</CardTitle>
                    <CardDescription>View and communicate with your attendees</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Attendee list will appear here</p>
                      <p className="text-sm mt-2">Connect to backend to manage attendees</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payouts">
                <Card>
                  <CardHeader>
                    <CardTitle>Payout History</CardTitle>
                    <CardDescription>Track your earnings and withdrawals</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <DollarSign className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Payout information will appear here</p>
                      <p className="text-sm mt-2">Connect to backend to process payouts</p>
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

export default OrganizerDashboard;

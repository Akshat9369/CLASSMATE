import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Calendar, CheckCircle, Clock, FileText, Info } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            Mid-semester examinations start from April 15th. Check your exam schedule.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82.5%</div>
              <Progress value={82.5} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">Overall attendance across all subjects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-2">Next: Computer Networks at 11:30 AM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assignments</CardTitle>
              <FileText className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-2">Due this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Mess Menu</CardTitle>
              <CardDescription>April 7, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Breakfast</span>
                <span>7:00 AM - 9:30 AM</span>
              </div>
              <p className="text-sm text-muted-foreground">Bread, Butter, Jam, Eggs, Cereal, Milk, Tea, Coffee</p>

              <div className="flex justify-between">
                <span className="font-medium">Lunch</span>
                <span>12:00 PM - 2:30 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Rice, Dal, Paneer Curry, Roti, Salad, Yogurt</p>

              <div className="flex justify-between">
                <span className="font-medium">Snacks</span>
                <span>4:30 PM - 5:30 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Samosa, Tea, Coffee</p>

              <div className="flex justify-between">
                <span className="font-medium">Dinner</span>
                <span>7:00 PM - 9:30 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Rice, Dal, Mixed Vegetable, Chicken Curry, Roti, Ice Cream
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Last 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Class Rescheduled</p>
                  <p className="text-xs text-muted-foreground">Computer Networks class moved to 2:30 PM tomorrow</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Assignment Deadline Extended</p>
                  <p className="text-xs text-muted-foreground">
                    Operating System assignment deadline extended to April 12
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1">
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Holiday Announcement</p>
                  <p className="text-xs text-muted-foreground">
                    University will remain closed on April 14 for Ambedkar Jayanti
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}


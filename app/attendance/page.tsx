import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function AttendancePage() {
  const subjects = [
    {
      id: "daa",
      name: "Design Analysis and Algorithm",
      code: "CS301",
      attendance: 85,
      classes: [
        { date: "Apr 5, 2025", status: "present", time: "10:30 AM - 12:00 PM" },
        { date: "Apr 3, 2025", status: "present", time: "10:30 AM - 12:00 PM" },
        { date: "Apr 1, 2025", status: "present", time: "10:30 AM - 12:00 PM" },
        { date: "Mar 29, 2025", status: "present", time: "10:30 AM - 12:00 PM" },
        { date: "Mar 27, 2025", status: "absent", time: "10:30 AM - 12:00 PM" },
      ],
    },
    {
      id: "cn",
      name: "Computer Network",
      code: "CS302",
      attendance: 72,
      classes: [
        { date: "Apr 6, 2025", status: "present", time: "2:30 PM - 4:00 PM" },
        { date: "Apr 4, 2025", status: "absent", time: "2:30 PM - 4:00 PM" },
        { date: "Apr 2, 2025", status: "present", time: "2:30 PM - 4:00 PM" },
        { date: "Mar 30, 2025", status: "absent", time: "2:30 PM - 4:00 PM" },
        { date: "Mar 28, 2025", status: "present", time: "2:30 PM - 4:00 PM" },
      ],
    },
    {
      id: "os",
      name: "Operating System",
      code: "CS303",
      attendance: 88,
      classes: [
        { date: "Apr 6, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Apr 4, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Apr 2, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Mar 30, 2025", status: "absent", time: "9:00 AM - 10:30 AM" },
        { date: "Mar 28, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
      ],
    },
    {
      id: "dti",
      name: "Design Thinking and Innovation",
      code: "HU301",
      attendance: 90,
      classes: [
        { date: "Apr 5, 2025", status: "present", time: "1:00 PM - 2:30 PM" },
        { date: "Apr 3, 2025", status: "present", time: "1:00 PM - 2:30 PM" },
        { date: "Apr 1, 2025", status: "present", time: "1:00 PM - 2:30 PM" },
        { date: "Mar 29, 2025", status: "present", time: "1:00 PM - 2:30 PM" },
        { date: "Mar 27, 2025", status: "absent", time: "1:00 PM - 2:30 PM" },
      ],
    },
    {
      id: "mp",
      name: "Microprocessor",
      code: "EC301",
      attendance: 78,
      classes: [
        { date: "Apr 7, 2025", status: "present", time: "11:00 AM - 12:30 PM" },
        { date: "Apr 5, 2025", status: "absent", time: "11:00 AM - 12:30 PM" },
        { date: "Apr 3, 2025", status: "present", time: "11:00 AM - 12:30 PM" },
        { date: "Apr 1, 2025", status: "present", time: "11:00 AM - 12:30 PM" },
        { date: "Mar 29, 2025", status: "present", time: "11:00 AM - 12:30 PM" },
      ],
    },
    {
      id: "ethics",
      name: "Ethics",
      code: "HU302",
      attendance: 82,
      classes: [
        { date: "Apr 7, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Apr 5, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Apr 3, 2025", status: "absent", time: "9:00 AM - 10:30 AM" },
        { date: "Apr 1, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
        { date: "Mar 29, 2025", status: "present", time: "9:00 AM - 10:30 AM" },
      ],
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
            <CardDescription>Spring Semester 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">82.5%</div>
            <Progress value={82.5} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-2">Minimum required attendance: 75%</p>
          </CardContent>
        </Card>

        <Tabs defaultValue={subjects[0].id} className="space-y-4">
          <TabsList className="grid grid-cols-3 md:grid-cols-6">
            {subjects.map((subject) => (
              <TabsTrigger key={subject.id} value={subject.id}>
                {subject.code}
              </TabsTrigger>
            ))}
          </TabsList>

          {subjects.map((subject) => (
            <TabsContent key={subject.id} value={subject.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>{subject.code}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Current Attendance</span>
                      <span className={subject.attendance < 75 ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
                        {subject.attendance}%
                      </span>
                    </div>
                    <Progress value={subject.attendance} className="h-2" />
                    {subject.attendance < 75 && (
                      <p className="text-sm text-red-500">Warning: Below minimum required attendance (75%)</p>
                    )}
                  </div>

                  <div className="border rounded-lg">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b font-medium">
                      <div>Date</div>
                      <div>Time</div>
                      <div>Status</div>
                    </div>
                    {subject.classes.map((cls, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b last:border-0">
                        <div>{cls.date}</div>
                        <div>{cls.time}</div>
                        <div>
                          {cls.status === "present" ? (
                            <Badge className="bg-green-500">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Present
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="mr-1 h-3 w-3" />
                              Absent
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function TimetablePage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const timetable = {
    Monday: [
      {
        id: 1,
        subject: "Design Analysis and Algorithm",
        code: "CS301",
        time: "9:00 AM - 10:30 AM",
        location: "Room 201",
        professor: "Dr. Johnson",
      },
      {
        id: 2,
        subject: "Computer Network",
        code: "CS302",
        time: "10:30 AM - 12:00 PM",
        location: "Room 105",
        professor: "Dr. Smith",
      },
      {
        id: 3,
        subject: "Operating System",
        code: "CS303",
        time: "1:00 PM - 2:30 PM",
        location: "Room 302",
        professor: "Dr. Williams",
      },
    ],
    Tuesday: [
      {
        id: 4,
        subject: "Design Thinking and Innovation",
        code: "HU301",
        time: "9:00 AM - 10:30 AM",
        location: "Room 203",
        professor: "Dr. Davis",
      },
      {
        id: 5,
        subject: "Microprocessor",
        code: "EC301",
        time: "10:30 AM - 12:00 PM",
        location: "Room 101",
        professor: "Dr. Wilson",
      },
      {
        id: 6,
        subject: "Ethics",
        code: "HU302",
        time: "2:30 PM - 4:00 PM",
        location: "Room 205",
        professor: "Prof. Anderson",
      },
    ],
    Wednesday: [
      {
        id: 7,
        subject: "Design Analysis and Algorithm",
        code: "CS301",
        time: "9:00 AM - 10:30 AM",
        location: "Room 201",
        professor: "Dr. Johnson",
      },
      {
        id: 8,
        subject: "Computer Network",
        code: "CS302",
        time: "10:30 AM - 12:00 PM",
        location: "Room 105",
        professor: "Dr. Smith",
      },
      {
        id: 9,
        subject: "Operating System",
        code: "CS303",
        time: "1:00 PM - 2:30 PM",
        location: "Room 302",
        professor: "Dr. Williams",
      },
    ],
    Thursday: [
      {
        id: 10,
        subject: "Design Thinking and Innovation",
        code: "HU301",
        time: "9:00 AM - 10:30 AM",
        location: "Room 203",
        professor: "Dr. Davis",
      },
      {
        id: 11,
        subject: "Microprocessor",
        code: "EC301",
        time: "10:30 AM - 12:00 PM",
        location: "Room 101",
        professor: "Dr. Wilson",
      },
      {
        id: 12,
        subject: "Ethics",
        code: "HU302",
        time: "2:30 PM - 4:00 PM",
        location: "Room 205",
        professor: "Prof. Anderson",
      },
    ],
    Friday: [
      {
        id: 13,
        subject: "Design Analysis and Algorithm Lab",
        code: "CS301L",
        time: "9:00 AM - 11:00 AM",
        location: "Lab 101",
        professor: "Dr. Johnson",
      },
      {
        id: 14,
        subject: "Computer Network Lab",
        code: "CS302L",
        time: "11:00 AM - 1:00 PM",
        location: "Lab 102",
        professor: "Dr. Smith",
      },
      {
        id: 15,
        subject: "Operating System Lab",
        code: "CS303L",
        time: "2:00 PM - 4:00 PM",
        location: "Lab 103",
        professor: "Dr. Williams",
      },
    ],
    Saturday: [
      {
        id: 16,
        subject: "Microprocessor Lab",
        code: "EC301L",
        time: "9:00 AM - 11:00 AM",
        location: "Lab 104",
        professor: "Dr. Wilson",
      },
      {
        id: 17,
        subject: "Design Thinking Workshop",
        code: "HU301L",
        time: "11:00 AM - 1:00 PM",
        location: "Lab 105",
        professor: "Dr. Davis",
      },
    ],
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <Tabs defaultValue="Monday" className="space-y-4">
          <TabsList className="grid grid-cols-3 md:grid-cols-6">
            {days.map((day) => (
              <TabsTrigger key={day} value={day}>
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day} value={day} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{day}</CardTitle>
                  <CardDescription>Your schedule for {day}</CardDescription>
                </CardHeader>
                <CardContent>
                  {timetable[day].length > 0 ? (
                    <div className="space-y-4">
                      {timetable[day].map((session) => (
                        <Card key={session.id}>
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h3 className="font-bold">{session.subject}</h3>
                                <Badge variant="outline">{session.code}</Badge>
                              </div>
                              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  {session.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="mr-2 h-4 w-4" />
                                  {session.location}
                                </div>
                                <div>{session.professor}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-8 text-muted-foreground">No classes scheduled for {day}</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  )
}


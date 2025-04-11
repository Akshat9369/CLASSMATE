import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, User } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function CoursesPage() {
  const courses = [
    {
      id: "cs301",
      name: "Database Systems",
      code: "CS301",
      instructor: "Dr. Smith",
      schedule: "Mon, Wed 10:30 AM - 12:00 PM",
      location: "Room 105",
      progress: 65,
      assignments: [
        { id: 1, title: "ER Diagram Design", due: "Apr 15, 2025", status: "pending" },
        { id: 2, title: "SQL Queries", due: "Apr 5, 2025", status: "submitted" },
        { id: 3, title: "Database Normalization", due: "Mar 25, 2025", status: "graded", grade: "A" },
      ],
      materials: [
        { id: 1, title: "Introduction to DBMS", type: "slides" },
        { id: 2, title: "SQL Basics", type: "document" },
        { id: 3, title: "Normalization Tutorial", type: "video" },
      ],
    },
    {
      id: "cs302",
      name: "Computer Networks",
      code: "CS302",
      instructor: "Dr. Davis",
      schedule: "Tue, Thu 9:00 AM - 10:30 AM",
      location: "Room 203",
      progress: 58,
      assignments: [
        { id: 4, title: "Network Topology Design", due: "Apr 18, 2025", status: "pending" },
        { id: 5, title: "TCP/IP Protocol Analysis", due: "Apr 8, 2025", status: "pending" },
        { id: 6, title: "Subnetting Exercise", due: "Mar 28, 2025", status: "graded", grade: "B+" },
      ],
      materials: [
        { id: 4, title: "OSI Model", type: "slides" },
        { id: 5, title: "TCP/IP Protocol Suite", type: "document" },
        { id: 6, title: "Subnetting Tutorial", type: "video" },
      ],
    },
    {
      id: "cs303",
      name: "Software Engineering",
      code: "CS303",
      instructor: "Dr. Johnson",
      schedule: "Mon, Wed 9:00 AM - 10:30 AM",
      location: "Room 201",
      progress: 70,
      assignments: [
        { id: 7, title: "Software Requirements Specification", due: "Apr 20, 2025", status: "pending" },
        { id: 8, title: "UML Diagrams", due: "Apr 10, 2025", status: "submitted" },
        { id: 9, title: "Agile Methodology Report", due: "Mar 30, 2025", status: "graded", grade: "A-" },
      ],
      materials: [
        { id: 7, title: "Software Development Lifecycle", type: "slides" },
        { id: 8, title: "UML Diagrams Guide", type: "document" },
        { id: 9, title: "Agile vs Waterfall", type: "video" },
      ],
    },
    {
      id: "cs304",
      name: "Operating Systems",
      code: "CS304",
      instructor: "Dr. Williams",
      schedule: "Mon, Wed 1:00 PM - 2:30 PM",
      location: "Room 302",
      progress: 62,
      assignments: [
        { id: 10, title: "Process Scheduling Algorithm", due: "Apr 22, 2025", status: "pending" },
        { id: 11, title: "Memory Management Report", due: "Apr 12, 2025", status: "pending" },
        { id: 12, title: "File System Implementation", due: "Apr 2, 2025", status: "graded", grade: "B+" },
      ],
      materials: [
        { id: 10, title: "Process Management", type: "slides" },
        { id: 11, title: "Memory Management", type: "document" },
        { id: 12, title: "File Systems", type: "video" },
      ],
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
      </div>

      <Tabs defaultValue={courses[0].id} className="mt-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          {courses.map((course) => (
            <TabsTrigger key={course.id} value={course.id}>
              {course.code}
            </TabsTrigger>
          ))}
        </TabsList>

        {courses.map((course) => (
          <TabsContent key={course.id} value={course.id} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.code}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Instructor: {course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Schedule: {course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Location: {course.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Course Progress</div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="text-sm text-muted-foreground">{course.progress}% completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>Upcoming and past assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.assignments.map((assignment) => (
                      <div key={assignment.id} className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="font-medium">{assignment.title}</div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            Due: {assignment.due}
                          </div>
                        </div>
                        <div>
                          {assignment.status === "pending" && (
                            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                              Pending
                            </Badge>
                          )}
                          {assignment.status === "submitted" && (
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                              Submitted
                            </Badge>
                          )}
                          {assignment.status === "graded" && (
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                              Graded: {assignment.grade}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Materials</CardTitle>
                  <CardDescription>Lecture notes and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.materials.map((material) => (
                      <div key={material.id} className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="font-medium">{material.title}</div>
                        </div>
                        <div>
                          {material.type === "slides" && (
                            <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                              Slides
                            </Badge>
                          )}
                          {material.type === "document" && (
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                              Document
                            </Badge>
                          )}
                          {material.type === "video" && (
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                              Video
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardLayout>
  )
}


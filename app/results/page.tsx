import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "@/components/dashboard-layout"

export default function ResultsPage() {
  const semesters = ["Spring 2025", "Fall 2024", "Spring 2024", "Fall 2023"]

  const results = {
    "Spring 2025": {
      gpa: 3.7,
      credits: 18,
      courses: [
        { code: "CS301", name: "Database Systems", grade: "A", credits: 3, gp: 4.0 },
        { code: "CS302", name: "Computer Networks", grade: "B+", credits: 3, gp: 3.5 },
        { code: "CS303", name: "Software Engineering", grade: "A-", credits: 3, gp: 3.7 },
        { code: "CS304", name: "Operating Systems", grade: "B+", credits: 3, gp: 3.5 },
        { code: "CS305", name: "Data Structures", grade: "A", credits: 3, gp: 4.0 },
        { code: "EN201", name: "Technical Writing", grade: "A-", credits: 3, gp: 3.7 },
      ],
    },
    "Fall 2024": {
      gpa: 3.5,
      credits: 18,
      courses: [
        { code: "CS201", name: "Algorithms", grade: "B+", credits: 3, gp: 3.5 },
        { code: "CS202", name: "Computer Architecture", grade: "A-", credits: 3, gp: 3.7 },
        { code: "CS203", name: "Object-Oriented Programming", grade: "A", credits: 3, gp: 4.0 },
        { code: "CS204", name: "Web Development", grade: "B", credits: 3, gp: 3.0 },
        { code: "MA201", name: "Discrete Mathematics", grade: "B+", credits: 3, gp: 3.5 },
        { code: "HU201", name: "Ethics in Computing", grade: "A-", credits: 3, gp: 3.7 },
      ],
    },
    "Spring 2024": {
      gpa: 3.8,
      credits: 18,
      courses: [
        { code: "CS101", name: "Introduction to Programming", grade: "A", credits: 3, gp: 4.0 },
        { code: "CS102", name: "Data Structures Basics", grade: "A", credits: 3, gp: 4.0 },
        { code: "CS103", name: "Digital Logic Design", grade: "A-", credits: 3, gp: 3.7 },
        { code: "MA101", name: "Calculus I", grade: "B+", credits: 3, gp: 3.5 },
        { code: "PH101", name: "Physics I", grade: "A", credits: 3, gp: 4.0 },
        { code: "EN101", name: "English Composition", grade: "A-", credits: 3, gp: 3.7 },
      ],
    },
    "Fall 2023": {
      gpa: 3.6,
      credits: 18,
      courses: [
        { code: "CS001", name: "Computer Fundamentals", grade: "A", credits: 3, gp: 4.0 },
        { code: "CS002", name: "Introduction to Computing", grade: "A-", credits: 3, gp: 3.7 },
        { code: "MA001", name: "Pre-Calculus", grade: "B+", credits: 3, gp: 3.5 },
        { code: "PH001", name: "Basic Physics", grade: "B+", credits: 3, gp: 3.5 },
        { code: "EN001", name: "Communication Skills", grade: "A", credits: 3, gp: 4.0 },
        { code: "HU001", name: "Introduction to Humanities", grade: "A-", credits: 3, gp: 3.7 },
      ],
    },
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Academic Results</h1>
      </div>

      <Tabs defaultValue={semesters[0]} className="mt-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          {semesters.map((semester) => (
            <TabsTrigger key={semester} value={semester}>
              {semester}
            </TabsTrigger>
          ))}
        </TabsList>

        {semesters.map((semester) => (
          <TabsContent key={semester} value={semester} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{semester}</CardTitle>
                <CardDescription>Semester Results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-muted-foreground">GPA</div>
                        <div className="text-3xl font-bold">{results[semester].gpa.toFixed(1)}</div>
                        <div className="text-xs text-muted-foreground">out of 4.0</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-muted-foreground">Credits</div>
                        <div className="text-3xl font-bold">{results[semester].credits}</div>
                        <div className="text-xs text-muted-foreground">earned this semester</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-muted-foreground">Courses</div>
                        <div className="text-3xl font-bold">{results[semester].courses.length}</div>
                        <div className="text-xs text-muted-foreground">completed</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Grades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg">
                      <div className="grid grid-cols-12 gap-4 p-4 border-b font-medium">
                        <div className="col-span-2">Code</div>
                        <div className="col-span-5">Course</div>
                        <div className="col-span-2">Credits</div>
                        <div className="col-span-1">Grade</div>
                        <div className="col-span-2">Grade Points</div>
                      </div>
                      {results[semester].courses.map((course, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0">
                          <div className="col-span-2">{course.code}</div>
                          <div className="col-span-5">{course.name}</div>
                          <div className="col-span-2">{course.credits}</div>
                          <div className="col-span-1">
                            <Badge
                              className={cn(
                                course.grade.startsWith("A") && "bg-green-500",
                                course.grade.startsWith("B") && "bg-blue-500",
                                course.grade.startsWith("C") && "bg-yellow-500",
                                course.grade.startsWith("D") && "bg-orange-500",
                                course.grade.startsWith("F") && "bg-red-500",
                              )}
                            >
                              {course.grade}
                            </Badge>
                          </div>
                          <div className="col-span-2">{course.gp.toFixed(1)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Grade Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["A", "B", "C", "D", "F"].map((grade) => {
                        const count = results[semester].courses.filter((c) => c.grade.startsWith(grade)).length
                        const percentage = (count / results[semester].courses.length) * 100

                        return (
                          <div key={grade} className="space-y-1">
                            <div className="flex justify-between">
                              <span className="font-medium">Grade {grade}</span>
                              <span>
                                {count} courses ({percentage.toFixed(0)}%)
                              </span>
                            </div>
                            <Progress value={percentage} className="h-2" />
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardLayout>
  )
}


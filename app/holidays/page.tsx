import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function HolidaysPage() {
  const holidays = [
    { date: "January 1, 2025", name: "New Year's Day", type: "National Holiday" },
    { date: "January 26, 2025", name: "Republic Day", type: "National Holiday" },
    { date: "March 7, 2025", name: "Holi", type: "National Holiday" },
    { date: "April 14, 2025", name: "Dr. Ambedkar Jayanti", type: "National Holiday" },
    { date: "April 18, 2025", name: "Good Friday", type: "National Holiday" },
    { date: "May 1, 2025", name: "Labour Day", type: "National Holiday" },
    { date: "August 15, 2025", name: "Independence Day", type: "National Holiday" },
    { date: "August 19, 2025", name: "Janmashtami", type: "National Holiday" },
    { date: "October 2, 2025", name: "Gandhi Jayanti", type: "National Holiday" },
    { date: "October 24, 2025", name: "Dussehra", type: "National Holiday" },
    { date: "November 12, 2025", name: "Diwali", type: "National Holiday" },
    { date: "November 13, 2025", name: "Govardhan Puja", type: "National Holiday" },
    { date: "November 14, 2025", name: "Bhai Dooj", type: "National Holiday" },
    { date: "December 25, 2025", name: "Christmas", type: "National Holiday" },

    // University Specific Holidays
    { date: "February 10-14, 2025", name: "Mid-Semester Break", type: "University Holiday" },
    { date: "May 15 - July 15, 2025", name: "Summer Vacation", type: "University Holiday" },
    { date: "September 5, 2025", name: "Teachers' Day", type: "University Holiday" },
    { date: "December 20, 2025 - January 5, 2026", name: "Winter Break", type: "University Holiday" },
  ]

  // Group holidays by month
  const holidaysByMonth = holidays.reduce(
    (acc, holiday) => {
      const month = holiday.date.split(" ")[0]
      if (!acc[month]) {
        acc[month] = []
      }
      acc[month].push(holiday)
      return acc
    },
    {} as Record<string, typeof holidays>,
  )

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Academic Calendar 2025</CardTitle>
            <CardDescription>National and University Holidays</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {months.map((month) => (
                <div key={month}>
                  <h3 className="text-lg font-semibold flex items-center mb-4">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {month} 2025
                  </h3>

                  {holidaysByMonth[month] ? (
                    <div className="space-y-3">
                      {holidaysByMonth[month].map((holiday, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <p className="font-medium">{holiday.name}</p>
                            <p className="text-sm text-muted-foreground">{holiday.date}</p>
                          </div>
                          <Badge className={holiday.type === "National Holiday" ? "bg-red-500" : "bg-blue-500"}>
                            {holiday.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">No holidays in {month}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}


"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, FileText, Plus } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import MainLayout from "@/components/main-layout"

export default function OutpassPage() {
  const [date, setDate] = useState<Date>()
  const [outpassType, setOutpassType] = useState("leave")

  const outpasses = [
    {
      id: 1,
      type: "leave",
      date: "Apr 10, 2025",
      time: "9:00 AM - 6:00 PM",
      reason: "Family visit",
      status: "approved",
      approvedBy: "Dr. Johnson",
      approvedOn: "Apr 8, 2025",
    },
    {
      id: 2,
      type: "gate-pass",
      date: "Mar 25, 2025",
      time: "10:00 AM - 8:00 PM",
      reason: "Medical appointment",
      status: "approved",
      approvedBy: "Dr. Smith",
      approvedOn: "Mar 23, 2025",
    },
    {
      id: 3,
      type: "leave",
      date: "Mar 15, 2025",
      time: "9:00 AM - 5:00 PM",
      reason: "Personal work",
      status: "rejected",
      rejectedBy: "Dr. Williams",
      rejectedOn: "Mar 14, 2025",
      rejectionReason: "Insufficient details provided",
    },
    {
      id: 4,
      type: "gate-pass",
      date: "Apr 15, 2025",
      time: "1:00 PM - 6:00 PM",
      reason: "Bank work",
      status: "pending",
      submittedOn: "Apr 12, 2025",
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <Tabs defaultValue="history" className="space-y-4">
          <TabsList>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="new">New Request</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Outpass History</CardTitle>
                <CardDescription>View all your leave and gate pass requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {outpasses.map((outpass) => (
                    <Card key={outpass.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold">{outpass.date}</h3>
                              <Badge
                                className={cn(
                                  outpass.status === "approved" && "bg-green-500",
                                  outpass.status === "rejected" && "bg-red-500",
                                  outpass.status === "pending" && "bg-yellow-500",
                                )}
                              >
                                {outpass.status.charAt(0).toUpperCase() + outpass.status.slice(1)}
                              </Badge>
                              <Badge variant="outline">{outpass.type === "leave" ? "Leave" : "Gate Pass"}</Badge>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-2 h-4 w-4" />
                              {outpass.time}
                            </div>
                            <div className="flex items-center text-sm">
                              <FileText className="mr-2 h-4 w-4" />
                              {outpass.reason}
                            </div>
                          </div>

                          <div className="text-sm">
                            {outpass.status === "approved" && (
                              <div className="space-y-1">
                                <div className="text-green-600 font-medium">Approved by {outpass.approvedBy}</div>
                                <div className="text-muted-foreground">on {outpass.approvedOn}</div>
                              </div>
                            )}

                            {outpass.status === "rejected" && (
                              <div className="space-y-1">
                                <div className="text-red-600 font-medium">Rejected by {outpass.rejectedBy}</div>
                                <div className="text-muted-foreground">on {outpass.rejectedOn}</div>
                                <div className="text-red-600">Reason: {outpass.rejectionReason}</div>
                              </div>
                            )}

                            {outpass.status === "pending" && (
                              <div className="space-y-1">
                                <div className="text-yellow-600 font-medium">Pending Approval</div>
                                <div className="text-muted-foreground">Submitted on {outpass.submittedOn}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>New Outpass Request</CardTitle>
                <CardDescription>Submit a new leave or gate pass request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="outpass-type">Request Type</Label>
                  <Select value={outpassType} onValueChange={setOutpassType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leave">Leave (Multiple Days)</SelectItem>
                      <SelectItem value="gate-pass">Gate Pass (Same Day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {outpassType === "gate-pass" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-time">From Time</Label>
                        <Input id="from-time" type="time" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="to-time">To Time</Label>
                        <Input id="to-time" type="time" />
                      </div>
                    </div>
                  )}

                  {outpassType === "leave" && (
                    <div className="space-y-2">
                      <Label htmlFor="return-date">Return Date</Label>
                      <Input id="return-date" type="date" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason</Label>
                  <Textarea id="reason" placeholder="Enter the reason for your request" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Enter your destination" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Emergency Contact</Label>
                  <Input id="contact" placeholder="Enter emergency contact number" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}


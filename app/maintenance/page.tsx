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
import { Clock, FileText, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import MainLayout from "@/components/main-layout"

export default function MaintenancePage() {
  const [category, setCategory] = useState("")

  const requests = [
    {
      id: 1,
      category: "Plumbing",
      description: "Leaking tap in bathroom",
      location: "Room 203, Block A",
      status: "in-progress",
      submittedOn: "Apr 3, 2025",
      assignedTo: "Maintenance Team",
      expectedCompletion: "Apr 10, 2025",
    },
    {
      id: 2,
      category: "Electrical",
      description: "Light fixture not working",
      location: "Room 203, Block A",
      status: "completed",
      submittedOn: "Mar 25, 2025",
      completedOn: "Mar 27, 2025",
      resolvedBy: "Electrical Team",
    },
    {
      id: 3,
      category: "Furniture",
      description: "Broken chair",
      location: "Room 203, Block A",
      status: "pending",
      submittedOn: "Apr 5, 2025",
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
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>View all your maintenance requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requests.map((request) => (
                    <Card key={request.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold">{request.category}</h3>
                              <Badge
                                className={cn(
                                  request.status === "completed" && "bg-green-500",
                                  request.status === "in-progress" && "bg-blue-500",
                                  request.status === "pending" && "bg-yellow-500",
                                )}
                              >
                                {request.status === "in-progress"
                                  ? "In Progress"
                                  : request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm">
                              <FileText className="mr-2 h-4 w-4" />
                              {request.description}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-2 h-4 w-4" />
                              Submitted on {request.submittedOn}
                            </div>
                            <div className="text-sm text-muted-foreground">Location: {request.location}</div>
                          </div>

                          <div className="text-sm">
                            {request.status === "completed" && (
                              <div className="space-y-1">
                                <div className="text-green-600 font-medium">Completed</div>
                                <div className="text-muted-foreground">on {request.completedOn}</div>
                                <div className="text-muted-foreground">by {request.resolvedBy}</div>
                              </div>
                            )}

                            {request.status === "in-progress" && (
                              <div className="space-y-1">
                                <div className="text-blue-600 font-medium">In Progress</div>
                                <div className="text-muted-foreground">Assigned to {request.assignedTo}</div>
                                <div className="text-muted-foreground">
                                  Expected completion: {request.expectedCompletion}
                                </div>
                              </div>
                            )}

                            {request.status === "pending" && (
                              <div className="space-y-1">
                                <div className="text-yellow-600 font-medium">Pending Assignment</div>
                                <div className="text-muted-foreground">Will be assigned soon</div>
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
                <CardTitle>New Maintenance Request</CardTitle>
                <CardDescription>Submit a new maintenance request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="ac">Air Conditioning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the issue in detail" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Room number, block, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Preferred Time for Inspection</Label>
                  <Input id="availability" placeholder="E.g., Weekdays after 4 PM" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input id="contact" placeholder="Your contact number" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">
                  <Wrench className="mr-2 h-4 w-4" />
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


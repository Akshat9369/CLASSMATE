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
import { Camera, Clock, HelpCircle, Image, MessageSquare, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import MainLayout from "@/components/main-layout"

export default function DoubtsPage() {
  const [subject, setSubject] = useState("")
  const [showCamera, setShowCamera] = useState(false)

  const doubts = [
    {
      id: 1,
      subject: "Design Analysis and Algorithm",
      topic: "Dynamic Programming",
      question:
        "I'm having trouble understanding the optimal substructure property in dynamic programming. Can you explain with an example?",
      status: "answered",
      submittedOn: "Apr 3, 2025",
      answeredBy: "Dr. Johnson",
      answeredOn: "Apr 4, 2025",
      answer:
        "The optimal substructure property means that the optimal solution to a problem can be constructed from optimal solutions to its subproblems. For example, in the Fibonacci sequence, F(n) = F(n-1) + F(n-2), where F(n-1) and F(n-2) are optimal solutions to smaller subproblems.",
    },
    {
      id: 2,
      subject: "Computer Network",
      topic: "TCP/IP Protocol",
      question: "What is the difference between TCP and UDP protocols?",
      status: "answered",
      submittedOn: "Mar 25, 2025",
      answeredBy: "Dr. Smith",
      answeredOn: "Mar 26, 2025",
      answer:
        "TCP (Transmission Control Protocol) is connection-oriented, reliable, and ensures ordered delivery of data. UDP (User Datagram Protocol) is connectionless, unreliable, and doesn't guarantee ordered delivery, but it's faster with less overhead.",
    },
    {
      id: 3,
      subject: "Operating System",
      topic: "Process Scheduling",
      question: "Can you explain the Round Robin scheduling algorithm?",
      status: "pending",
      submittedOn: "Apr 5, 2025",
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <Tabs defaultValue="history" className="space-y-4">
          <TabsList>
            <TabsTrigger value="history">My Doubts</TabsTrigger>
            <TabsTrigger value="new">Ask a Doubt</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Doubts</CardTitle>
                <CardDescription>View all your submitted doubts and questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doubts.map((doubt) => (
                    <Card key={doubt.id}>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold">{doubt.subject}</h3>
                                <Badge
                                  className={cn(
                                    doubt.status === "answered" && "bg-green-500",
                                    doubt.status === "pending" && "bg-yellow-500",
                                  )}
                                >
                                  {doubt.status.charAt(0).toUpperCase() + doubt.status.slice(1)}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">Topic: {doubt.topic}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <Clock className="inline-block mr-1 h-3 w-3" />
                              {doubt.submittedOn}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Question</p>
                                <p className="text-sm">{doubt.question}</p>
                              </div>
                            </div>

                            {doubt.status === "answered" && (
                              <div className="flex items-start gap-2 mt-4">
                                <MessageSquare className="h-5 w-5 text-green-500 mt-0.5" />
                                <div>
                                  <p className="font-medium">Answer from {doubt.answeredBy}</p>
                                  <p className="text-sm">{doubt.answer}</p>
                                  <p className="text-xs text-muted-foreground mt-1">Answered on {doubt.answeredOn}</p>
                                </div>
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
                <CardTitle>Ask a Doubt</CardTitle>
                <CardDescription>Submit a new question to your professors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daa">Design Analysis and Algorithm</SelectItem>
                      <SelectItem value="cn">Computer Network</SelectItem>
                      <SelectItem value="os">Operating System</SelectItem>
                      <SelectItem value="dti">Design Thinking and Innovation</SelectItem>
                      <SelectItem value="mp">Microprocessor</SelectItem>
                      <SelectItem value="ethics">Ethics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Input id="topic" placeholder="Enter the topic of your doubt" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="question">Your Question</Label>
                  <Textarea id="question" placeholder="Describe your doubt in detail" rows={4} />
                </div>

                <div className="space-y-2">
                  {showCamera ? (
                    <div className="space-y-4">
                      <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Camera preview will appear here</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" onClick={() => setShowCamera(false)}>
                          Cancel
                        </Button>
                        <Button className="flex-1">Capture</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setShowCamera(true)}>
                        <Camera className="mr-2 h-4 w-4" />
                        Take Photo
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Image className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Question
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}


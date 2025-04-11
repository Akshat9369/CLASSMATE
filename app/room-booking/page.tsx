"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, FileText, Plus, Users } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import MainLayout from "@/components/main-layout"

export default function RoomBookingPage() {
  const [date, setDate] = useState<Date>()
  const [room, setRoom] = useState("")
  const [timeSlot, setTimeSlot] = useState("")

  const bookings = [
    {
      id: 1,
      room: "GD Room 101",
      date: "Apr 10, 2025",
      time: "2:00 PM - 4:00 PM",
      purpose: "Project Discussion",
      status: "confirmed",
      participants: 5,
      bookedOn: "Apr 5, 2025",
    },
    {
      id: 2,
      room: "GD Room 102",
      date: "Mar 25, 2025",
      time: "10:00 AM - 12:00 PM",
      purpose: "Group Study",
      status: "completed",
      participants: 4,
      bookedOn: "Mar 20, 2025",
    },
    {
      id: 3,
      room: "GD Room 103",
      date: "Apr 15, 2025",
      time: "3:00 PM - 5:00 PM",
      purpose: "Interview Practice",
      status: "pending",
      participants: 3,
      bookedOn: "Apr 12, 2025",
    },
  ]

  const availableRooms = [
    { id: "gd101", name: "GD Room 101", capacity: 8 },
    { id: "gd102", name: "GD Room 102", capacity: 6 },
    { id: "gd103", name: "GD Room 103", capacity: 10 },
    { id: "gd104", name: "GD Room 104", capacity: 12 },
    { id: "gd105", name: "GD Room 105", capacity: 8 },
  ]

  const timeSlots = [
    { id: "slot1", time: "8:00 AM - 10:00 AM" },
    { id: "slot2", time: "10:00 AM - 12:00 PM" },
    { id: "slot3", time: "12:00 PM - 2:00 PM" },
    { id: "slot4", time: "2:00 PM - 4:00 PM" },
    { id: "slot5", time: "4:00 PM - 6:00 PM" },
    { id: "slot6", time: "6:00 PM - 8:00 PM" },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <Tabs defaultValue="history" className="space-y-4">
          <TabsList>
            <TabsTrigger value="history">My Bookings</TabsTrigger>
            <TabsTrigger value="new">New Booking</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Room Booking History</CardTitle>
                <CardDescription>View all your group discussion room bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold">{booking.room}</h3>
                              <Badge
                                className={cn(
                                  booking.status === "confirmed" && "bg-green-500",
                                  booking.status === "completed" && "bg-blue-500",
                                  booking.status === "pending" && "bg-yellow-500",
                                )}
                              >
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="mr-2 h-4 w-4" />
                              {booking.date}, {booking.time}
                            </div>
                            <div className="flex items-center text-sm">
                              <FileText className="mr-2 h-4 w-4" />
                              Purpose: {booking.purpose}
                            </div>
                            <div className="flex items-center text-sm">
                              <Users className="mr-2 h-4 w-4" />
                              Participants: {booking.participants}
                            </div>
                          </div>

                          <div className="text-sm text-muted-foreground">Booked on {booking.bookedOn}</div>
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
                <CardTitle>Book a Group Discussion Room</CardTitle>
                <CardDescription>Book a room for up to 2 hours for group discussions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="time-slot">Time Slot</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.id} value={slot.id}>
                            {slot.time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room">Room</Label>
                  <Select value={room} onValueChange={setRoom}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableRooms.map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} (Capacity: {room.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Input id="purpose" placeholder="Enter the purpose of booking" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input id="participants" type="number" min="2" max="12" placeholder="Enter number of participants" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional-requirements">Additional Requirements</Label>
                  <Input id="additional-requirements" placeholder="Any special requirements (optional)" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  Book Room
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}


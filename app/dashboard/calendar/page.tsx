"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  { id: 1, title: "Team Meeting", date: "Dec 20, 2024", time: "10:00 AM - 11:00 AM", location: "Conference Room A" },
  { id: 2, title: "Client Presentation", date: "Dec 20, 2024", time: "2:00 PM - 3:30 PM", location: "Virtual" },
  { id: 3, title: "Project Review", date: "Dec 21, 2024", time: "1:00 PM - 2:00 PM", location: "Office" },
  { id: 4, title: "Training Session", date: "Dec 22, 2024", time: "3:00 PM - 4:00 PM", location: "Training Room" },
]

export default function CalendarPage() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
        <p className="text-foreground/60">Manage your events and meetings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Widget */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>December 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-medium text-foreground/60">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className={`py-2 rounded-lg transition-colors ${
                    i + 1 === 20 ? "bg-primary text-primary-foreground font-bold" : "hover:bg-accent/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled meetings and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <p className="font-medium text-foreground">{event.title}</p>
                  <div className="flex flex-col gap-2 mt-3 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

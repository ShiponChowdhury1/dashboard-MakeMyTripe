"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send, Search } from "lucide-react"
import { useState } from "react"

const messages = [
  {
    id: 1,
    sender: "Sarah Anderson",
    avatar: "SA",
    message: "Great work on the latest update!",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Mike Johnson",
    avatar: "MJ",
    message: "Can we schedule a meeting tomorrow?",
    time: "15 min ago",
    unread: true,
  },
  {
    id: 3,
    sender: "Emily Davis",
    avatar: "ED",
    message: "The report looks amazing!",
    time: "1 hour ago",
    unread: false,
  },
  { id: 4, sender: "Alex Chen", avatar: "AC", message: "Thanks for the feedback", time: "3 hours ago", unread: false },
  { id: 5, sender: "Lisa Wong", avatar: "LW", message: "Let's sync up next week", time: "Yesterday", unread: false },
]

export default function Messages() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)

  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-foreground/60">Communicate with your team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 bg-accent rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedMessage === msg.id ? "bg-primary/10" : "hover:bg-accent/50"
                  } ${msg.unread ? "bg-accent/30" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                      {msg.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-foreground ${msg.unread ? "font-bold" : ""}`}>{msg.sender}</p>
                      <p className="text-sm text-foreground/60 truncate">{msg.message}</p>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/40 mt-2">{msg.time}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Detail */}
        <Card className="lg:col-span-2">
          {selectedMessage ? (
            <>
              <CardHeader>
                <CardTitle>{messages.find((m) => m.id === selectedMessage)?.sender}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-96 bg-accent/30 rounded-lg p-4 flex items-center justify-center text-foreground/60">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Conversation history here</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-accent rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-96">
              <p className="text-foreground/60">Select a message to view</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Eye } from "lucide-react"

const reports = [
  { id: 1, name: "Monthly Revenue Report", date: "Dec 1, 2024", size: "2.4 MB", views: 142 },
  { id: 2, name: "Q4 Performance Analysis", date: "Dec 5, 2024", size: "1.8 MB", views: 89 },
  { id: 3, name: "User Growth Report", date: "Dec 10, 2024", size: "3.2 MB", views: 256 },
  { id: 4, name: "Engagement Metrics", date: "Dec 12, 2024", size: "1.5 MB", views: 178 },
  { id: 5, name: "Conversion Analysis", date: "Dec 15, 2024", size: "2.1 MB", views: 312 },
]

export default function Reports() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-foreground/60">Access and download your business reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Download and view detailed reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{report.name}</p>
                    <p className="text-sm text-foreground/60">
                      {report.date} • {report.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-sm text-foreground/60">
                    <Eye className="w-4 h-4" />
                    {report.views}
                  </div>
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

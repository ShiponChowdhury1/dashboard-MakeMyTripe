"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Activity, Zap } from "lucide-react"

const dashboardData = [
  { month: "Jan", revenue: 4000, users: 2400 },
  { month: "Feb", revenue: 3000, users: 1398 },
  { month: "Mar", revenue: 2000, users: 9800 },
  { month: "Apr", revenue: 2780, users: 3908 },
  { month: "May", revenue: 1890, users: 4800 },
  { month: "Jun", revenue: 2390, users: 3800 },
]

const pieData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 20 },
]

const COLORS = ["#5b52ff", "#7c3aed", "#ec4899", "#f59e0b"]

export default function ClientDashboard() {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
          <p className="text-foreground/60">Welcome back! Here&#39;s your performance overview.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, label: "Total Revenue", value: "$12,345", change: "+12.5%" },
            { icon: Users, label: "Active Users", value: "2,847", change: "+8.2%" },
            { icon: Activity, label: "Engagement", value: "68%", change: "+4.1%" },
            { icon: Zap, label: "Performance", value: "98%", change: "+2.3%" },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card key={i} className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-foreground/60">{stat.label}</CardTitle>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change} from last month</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <Card className="col-span-1 lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Revenue Trend</CardTitle>
              <CardDescription className="text-foreground/60">Monthly revenue and user growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dashboardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-foreground)" />
                  <YAxis stroke="var(--color-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      color: "var(--color-foreground)",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} />
                  <Line type="monotone" dataKey="users" stroke="var(--color-accent)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Distribution</CardTitle>
              <CardDescription className="text-foreground/60">Product mix</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={{ fill: "var(--color-foreground)" }}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      color: "var(--color-foreground)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bar Chart */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Performance Metrics</CardTitle>
            <CardDescription className="text-foreground/60">Monthly performance comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-foreground)" />
                <YAxis stroke="var(--color-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    color: "var(--color-foreground)",
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="users" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

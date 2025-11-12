"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertCircle, TrendingDown } from "lucide-react"

const inventoryItems = [
  { id: 1, name: "Product A", sku: "SKU-001", quantity: 1250, status: "In Stock", price: "$45.00" },
  { id: 2, name: "Product B", sku: "SKU-002", quantity: 89, status: "Low Stock", price: "$62.50" },
  { id: 3, name: "Product C", sku: "SKU-003", quantity: 0, status: "Out of Stock", price: "$38.75" },
  { id: 4, name: "Product D", sku: "SKU-004", quantity: 456, status: "In Stock", price: "$71.20" },
  { id: 5, name: "Product E", sku: "SKU-005", quantity: 34, status: "Low Stock", price: "$29.99" },
]

export default function Inventory() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
        <p className="text-foreground/60">Manage your product inventory</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/60">Total Items</CardTitle>
              <Package className="w-5 h-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2,129</div>
            <p className="text-xs text-foreground/60 mt-1">Across all products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/60">Low Stock</CardTitle>
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Items need reorder</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-foreground/60">Out of Stock</CardTitle>
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1</div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Critical items</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Real-time inventory levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-foreground/60">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/60">SKU</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/60">Quantity</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/60">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground/60">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-accent/30 transition-colors">
                    <td className="py-3 px-4 text-foreground">{item.name}</td>
                    <td className="py-3 px-4 text-foreground/60">{item.sku}</td>
                    <td className="py-3 px-4 text-foreground font-medium">{item.quantity}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "In Stock"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : item.status === "Low Stock"
                              ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-foreground">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

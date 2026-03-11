import { useState } from "react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { 
  Download, 
  FileText, 
  TrendingUp, 
  Users, 
  Car, 
  DollarSign,
  Calendar,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Reports() {
  const [dateRange, setDateRange] = useState("7days");
  const [reportType, setReportType] = useState("overview");

  const revenueData = [
    { date: "Feb 27", revenue: 42000, rides: 145 },
    { date: "Feb 28", revenue: 45000, rides: 156 },
    { date: "Mar 1", revenue: 48000, rides: 162 },
    { date: "Mar 2", revenue: 43000, rides: 149 },
    { date: "Mar 3", revenue: 52000, rides: 178 },
    { date: "Mar 4", revenue: 58000, rides: 192 },
    { date: "Mar 5", revenue: 51000, rides: 175 },
  ];

  const rideTypeData = [
    { name: "Economy", value: 5842, color: "#3498db" },
    { name: "Standard", value: 7234, color: "#9b59b6" },
    { name: "Premium", value: 2606, color: "#f39c12" },
  ];

  const paymentMethodData = [
    { name: "Mobile Money", value: 11234, color: "#00b894" },
    { name: "Cash on Arrival", value: 4448, color: "#636e72" },
  ];

  const driverPerformance = [
    { name: "John Kamara", trips: 342, revenue: 125000, rating: 4.9 },
    { name: "Sarah Johnson", trips: 318, revenue: 118500, rating: 4.8 },
    { name: "Michael Chen", trips: 295, revenue: 112000, rating: 4.9 },
    { name: "Alice Brown", trips: 287, revenue: 108500, rating: 4.7 },
    { name: "David Wilson", trips: 276, revenue: 105000, rating: 4.8 },
  ];

  const reportTemplates = [
    {
      title: "Revenue Report",
      description: "Detailed revenue breakdown by date, payment method, and ride type",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      period: "Monthly",
    },
    {
      title: "Driver Performance",
      description: "Driver statistics including trips, earnings, and ratings",
      icon: Car,
      color: "from-blue-500 to-cyan-600",
      period: "Weekly",
    },
    {
      title: "User Analytics",
      description: "Passenger behavior, retention, and growth metrics",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      period: "Monthly",
    },
    {
      title: "Operations Summary",
      description: "Overall platform performance and key metrics",
      icon: BarChart3,
      color: "from-orange-500 to-red-600",
      period: "Daily",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Reports & Analytics</h2>
          <p className="text-slate-600 mt-1">Generate and download comprehensive reports</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTemplates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.title} className="p-5 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{template.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{template.period}</span>
                <Button size="sm" variant="outline" className="text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Revenue Trend</h3>
              <p className="text-sm text-slate-600 mt-1">Daily revenue over time</p>
            </div>
            <LineChartIcon className="w-5 h-5 text-slate-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#00b894" strokeWidth={3} dot={{ fill: '#00b894', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Ride Type Distribution */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Ride Type Distribution</h3>
              <p className="text-sm text-slate-600 mt-1">Breakdown by ride category</p>
            </div>
            <PieChartIcon className="w-5 h-5 text-slate-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rideTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {rideTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Payment Method Distribution */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Payment Methods</h3>
              <p className="text-sm text-slate-600 mt-1">Transaction distribution</p>
            </div>
            <BarChart3 className="w-5 h-5 text-slate-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={paymentMethodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="value" fill="#00b894" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Driver Performance Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-900">Top Drivers</h3>
              <p className="text-sm text-slate-600 mt-1">Performance leaders</p>
            </div>
            <Button size="sm" variant="outline">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {driverPerformance.map((driver, index) => (
              <div key={driver.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{driver.name}</p>
                    <p className="text-xs text-slate-500">{driver.trips} trips • ⭐ {driver.rating}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#00b894]">
                  L$ {driver.revenue.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Scheduled Reports */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-slate-900">Scheduled Reports</h3>
            <p className="text-sm text-slate-600 mt-1">Automated report generation</p>
          </div>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Calendar className="w-4 h-4 mr-2" />
            New Schedule
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Report Name</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Frequency</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Recipients</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Last Sent</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-900">Daily Revenue Summary</td>
                <td className="px-4 py-3 text-sm text-slate-600">Daily at 9:00 AM</td>
                <td className="px-4 py-3 text-sm text-slate-600">finance@nationalcab.lr</td>
                <td className="px-4 py-3 text-sm text-slate-600">Mar 6, 2026 9:00 AM</td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-900">Weekly Driver Performance</td>
                <td className="px-4 py-3 text-sm text-slate-600">Weekly on Monday</td>
                <td className="px-4 py-3 text-sm text-slate-600">operations@nationalcab.lr</td>
                <td className="px-4 py-3 text-sm text-slate-600">Mar 3, 2026 9:00 AM</td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-900">Monthly Financial Report</td>
                <td className="px-4 py-3 text-sm text-slate-600">Monthly on 1st</td>
                <td className="px-4 py-3 text-sm text-slate-600">admin@nationalcab.lr</td>
                <td className="px-4 py-3 text-sm text-slate-600">Mar 1, 2026 10:00 AM</td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

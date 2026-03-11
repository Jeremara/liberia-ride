import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Wallet,
  CreditCard,
  Smartphone,
  Banknote,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Finance() {
  const stats = {
    totalRevenue: 8247500,
    platformCommission: 1649500,
    driverEarnings: 6598000,
    pendingPayouts: 245000,
    revenueGrowth: 12.5,
    commissionGrowth: 11.8,
  };

  const revenueData = [
    { month: "Jan", total: 6500000, commission: 1300000, driver: 5200000 },
    { month: "Feb", total: 7200000, commission: 1440000, driver: 5760000 },
    { month: "Mar", total: 8247500, commission: 1649500, driver: 6598000 },
  ];

  const paymentMethodData = [
    { name: "Cash", value: 45, amount: 3711000, color: "#00b894" },
    { name: "Orange Money", value: 35, amount: 2886000, color: "#ff6b00" },
    { name: "MTN", value: 15, amount: 1237000, color: "#ffcc00" },
    { name: "Cards", value: 5, amount: 412000, color: "#0984e3" },
  ];

  const dailyRevenue = [
    { day: "Mon", revenue: 265000 },
    { day: "Tue", revenue: 285000 },
    { day: "Wed", revenue: 310000 },
    { day: "Thu", revenue: 295000 },
    { day: "Fri", revenue: 340000 },
    { day: "Sat", revenue: 380000 },
    { day: "Sun", revenue: 320000 },
  ];

  const topEarners = [
    { name: "John Kamara", earnings: 125000, commission: 25000, trips: 342 },
    { name: "Sarah Johnson", earnings: 118500, commission: 23700, trips: 318 },
    { name: "Michael Chen", earnings: 112000, commission: 22400, trips: 295 },
    { name: "Alice Brown", earnings: 108500, commission: 21700, trips: 287 },
    { name: "David Wilson", earnings: 105000, commission: 21000, trips: 276 },
  ];

  return (
    <div className="space-y-6">
      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00b894] to-[#00a383] rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+{stats.revenueGrowth}%</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-slate-900">L$ {(stats.totalRevenue / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-500 mt-2">This month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0984e3] to-[#0875cc] rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+{stats.commissionGrowth}%</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Platform Commission</p>
          <p className="text-3xl font-bold text-slate-900">L$ {(stats.platformCommission / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-500 mt-2">20% of total revenue</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6c5ce7] to-[#5f3dc4] rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Driver Earnings</p>
          <p className="text-3xl font-bold text-slate-900">L$ {(stats.driverEarnings / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-500 mt-2">Paid to drivers</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Pending Payouts</p>
          <p className="text-3xl font-bold text-slate-900">L$ {(stats.pendingPayouts / 1000).toFixed(0)}K</p>
          <p className="text-xs text-slate-500 mt-2">Awaiting withdrawal</p>
        </Card>
      </div>

      {/* Revenue & Commission Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Revenue & Commission Breakdown</h3>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px' 
              }} 
            />
            <Legend />
            <Bar dataKey="total" fill="#00b894" name="Total Revenue" radius={[8, 8, 0, 0]} />
            <Bar dataKey="commission" fill="#0984e3" name="Platform Commission" radius={[8, 8, 0, 0]} />
            <Bar dataKey="driver" fill="#6c5ce7" name="Driver Earnings" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Methods */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Payment Methods Distribution</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={paymentMethodData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {paymentMethodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {paymentMethodData.map((method) => {
                const Icon = method.name === "Cash" ? Banknote 
                  : method.name === "Cards" ? CreditCard 
                  : Smartphone;
                return (
                  <div key={method.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: method.color }} />
                        <span className="text-sm text-slate-600">{method.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{method.value}%</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-5">
                      L$ {method.amount.toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Daily Revenue */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Daily Revenue (This Week)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dailyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#00b894" 
                strokeWidth={3}
                dot={{ fill: '#00b894', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Earners */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Top Earning Drivers</h3>
          <Button variant="ghost" size="sm" className="text-[#00b894]">
            View All <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Rank</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Driver</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Trips</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Earnings</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topEarners.map((driver, index) => (
                <tr key={driver.name}>
                  <td className="py-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="font-medium text-slate-900">{driver.name}</p>
                  </td>
                  <td className="py-4">
                    <p className="text-slate-600">{driver.trips}</p>
                  </td>
                  <td className="py-4">
                    <p className="font-semibold text-slate-900">L$ {driver.earnings.toLocaleString()}</p>
                  </td>
                  <td className="py-4">
                    <p className="font-semibold text-[#00b894]">L$ {driver.commission.toLocaleString()}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
import { Card } from "../../ui/card";
import { 
  Users, 
  Car, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  MapPin,
  Clock
} from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function AdminDashboard() {
  const kpis = [
    {
      title: "Total Rides",
      value: "12,453",
      change: "+12.5%",
      trend: "up",
      icon: MapPin,
      color: "from-[#00b894] to-[#00a383]",
    },
    {
      title: "Revenue",
      value: "L$ 8.2M",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      color: "from-[#0984e3] to-[#0875cc]",
    },
    {
      title: "Active Drivers",
      value: "1,847",
      change: "+5.3%",
      trend: "up",
      icon: Car,
      color: "from-[#6c5ce7] to-[#5f3dc4]",
    },
    {
      title: "Total Users",
      value: "28,392",
      change: "+15.8%",
      trend: "up",
      icon: Users,
      color: "from-[#fd79a8] to-[#e84393]",
    },
  ];

  const revenueData = [
    { name: "Jan", revenue: 650000, rides: 980 },
    { name: "Feb", revenue: 720000, rides: 1150 },
    { name: "Mar", revenue: 850000, rides: 1320 },
    { name: "Apr", revenue: 920000, rides: 1480 },
    { name: "May", revenue: 1050000, rides: 1650 },
    { name: "Jun", revenue: 1180000, rides: 1820 },
  ];

  const rideTypeData = [
    { name: "Economy", value: 58, color: "#00b894" },
    { name: "Standard", value: 32, color: "#0984e3" },
    { name: "Premium", value: 10, color: "#6c5ce7" },
  ];

  const topDrivers = [
    { name: "John Kamara", rides: 342, rating: 4.9, earnings: 125000 },
    { name: "Sarah Johnson", rides: 318, rating: 4.8, earnings: 118500 },
    { name: "Michael Chen", rides: 295, rating: 4.9, earnings: 112000 },
    { name: "Alice Brown", rides: 287, rating: 4.7, earnings: 108500 },
    { name: "David Wilson", rides: 276, rating: 4.8, earnings: 105000 },
  ];

  const recentRides = [
    { id: "R-8472", passenger: "Emma Davis", driver: "John K.", status: "Completed", amount: 850, time: "2 mins ago" },
    { id: "R-8471", passenger: "James Wilson", driver: "Sarah J.", status: "In Progress", amount: 1200, time: "5 mins ago" },
    { id: "R-8470", passenger: "Olivia Martinez", driver: "Michael C.", status: "Completed", amount: 680, time: "8 mins ago" },
    { id: "R-8469", passenger: "Noah Anderson", driver: "Alice B.", status: "Completed", amount: 920, time: "12 mins ago" },
    { id: "R-8468", passenger: "Sophia Taylor", driver: "David W.", status: "Completed", amount: 1450, time: "15 mins ago" },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={kpi.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  kpi.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span>{kpi.change}</span>
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 mb-1">{kpi.title}</h3>
              <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Revenue & Rides Overview</h3>
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5">
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>Last Month</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00b894" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00b894" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="revenue" stroke="#00b894" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Ride Type Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Ride Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rideTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {rideTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {rideTypeData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Drivers */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Top Drivers</h3>
            <button className="text-sm text-[#00b894] hover:underline flex items-center">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {topDrivers.map((driver, index) => (
              <div key={driver.name} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{driver.name}</p>
                  <div className="flex items-center space-x-3 text-xs text-slate-600 mt-0.5">
                    <span>{driver.rides} rides</span>
                    <span>★ {driver.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">L$ {driver.earnings.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">earned</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Rides */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Recent Rides</h3>
            <button className="text-sm text-[#00b894] hover:underline flex items-center">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentRides.map((ride) => (
              <div key={ride.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-medium text-slate-900 text-sm">{ride.id}</p>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      ride.status === "Completed" 
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {ride.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{ride.passenger} → {ride.driver}</p>
                  <p className="text-xs text-slate-400 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {ride.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">L$ {ride.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
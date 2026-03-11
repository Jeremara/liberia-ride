import { useState } from "react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { 
  Search, 
  Filter, 
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Car,
  Phone,
  Mail
} from "lucide-react";

export default function DriverManagement() {
  const [filter, setFilter] = useState<"all" | "active" | "pending" | "suspended">("all");

  const drivers = [
    {
      id: "DRV-001",
      name: "John Kamara",
      email: "john.kamara@email.com",
      phone: "+231 770 123 456",
      vehicle: "Toyota Corolla 2020",
      licensePlate: "LR-1234-AB",
      rating: 4.9,
      totalTrips: 342,
      earnings: 125000,
      status: "active",
      joinDate: "Jan 15, 2024",
      lastActive: "5 mins ago",
    },
    {
      id: "DRV-002",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+231 770 234 567",
      vehicle: "Honda Accord 2019",
      licensePlate: "LR-2345-BC",
      rating: 4.8,
      totalTrips: 318,
      earnings: 118500,
      status: "active",
      joinDate: "Jan 20, 2024",
      lastActive: "12 mins ago",
    },
    {
      id: "DRV-003",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+231 770 345 678",
      vehicle: "Nissan Altima 2021",
      licensePlate: "LR-3456-CD",
      rating: 4.9,
      totalTrips: 295,
      earnings: 112000,
      status: "active",
      joinDate: "Feb 5, 2024",
      lastActive: "1 hour ago",
    },
    {
      id: "DRV-004",
      name: "Alice Brown",
      email: "alice.brown@email.com",
      phone: "+231 770 456 789",
      vehicle: "Toyota Camry 2020",
      licensePlate: "LR-4567-DE",
      rating: 4.7,
      totalTrips: 287,
      earnings: 108500,
      status: "pending",
      joinDate: "Mar 1, 2026",
      lastActive: "N/A",
    },
    {
      id: "DRV-005",
      name: "David Wilson",
      email: "d.wilson@email.com",
      phone: "+231 770 567 890",
      vehicle: "Mazda 3 2019",
      licensePlate: "LR-5678-EF",
      rating: 4.8,
      totalTrips: 276,
      earnings: 105000,
      status: "suspended",
      joinDate: "Jan 10, 2024",
      lastActive: "2 days ago",
    },
  ];

  const stats = {
    total: 1847,
    active: 1523,
    pending: 284,
    suspended: 40,
  };

  const filteredDrivers = filter === "all" 
    ? drivers 
    : drivers.filter(d => d.status === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>;
      case "suspended":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Suspended</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card 
          className={`p-4 cursor-pointer transition-all ${filter === "all" ? "ring-2 ring-[#00b894]" : ""}`}
          onClick={() => setFilter("all")}
        >
          <p className="text-sm text-slate-600 mb-1">Total Drivers</p>
          <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
        </Card>
        <Card 
          className={`p-4 cursor-pointer transition-all ${filter === "active" ? "ring-2 ring-green-500" : ""}`}
          onClick={() => setFilter("active")}
        >
          <p className="text-sm text-slate-600 mb-1">Active</p>
          <p className="text-2xl font-bold text-green-600">{stats.active}</p>
        </Card>
        <Card 
          className={`p-4 cursor-pointer transition-all ${filter === "pending" ? "ring-2 ring-yellow-500" : ""}`}
          onClick={() => setFilter("pending")}
        >
          <p className="text-sm text-slate-600 mb-1">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
        </Card>
        <Card 
          className={`p-4 cursor-pointer transition-all ${filter === "suspended" ? "ring-2 ring-red-500" : ""}`}
          onClick={() => setFilter("suspended")}
        >
          <p className="text-sm text-slate-600 mb-1">Suspended</p>
          <p className="text-2xl font-bold text-red-600">{stats.suspended}</p>
        </Card>
      </div>

      {/* Filters & Actions */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search drivers..." className="pl-9" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </Card>

      {/* Drivers Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Driver</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Contact</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Vehicle</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Performance</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Status</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredDrivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-full flex items-center justify-center text-white font-semibold">
                        {driver.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{driver.name}</p>
                        <p className="text-sm text-slate-500">{driver.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Phone className="w-3 h-3" />
                        <span>{driver.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Mail className="w-3 h-3" />
                        <span>{driver.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Car className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{driver.vehicle}</p>
                        <p className="text-xs text-slate-500">{driver.licensePlate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-semibold text-slate-900">{driver.rating}</span>
                      </div>
                      <p className="text-xs text-slate-500">{driver.totalTrips} trips</p>
                      <p className="text-xs font-semibold text-[#00b894]">
                        L$ {driver.earnings.toLocaleString()}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      {getStatusBadge(driver.status)}
                      <p className="text-xs text-slate-500">{driver.lastActive}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {driver.status === "pending" && (
                        <>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
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
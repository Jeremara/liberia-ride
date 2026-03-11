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
  MapPin,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Car,
  TrendingUp,
  Users
} from "lucide-react";

export default function PassengerManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRideType, setFilterRideType] = useState<"all" | "Economy" | "Standard" | "Premium">("all");

  const passengers = [
    {
      id: "PASS-001",
      name: "James Cooper",
      email: "james.cooper@email.com",
      phone: "+231 770 111 222",
      pickupAddress: "Broad Street, Monrovia",
      destination: "Roberts International Airport",
      amountPaid: 1850,
      rideType: "Premium",
      paymentMethod: "Mobile Money",
      date: "Mar 4, 2026 10:30 AM",
      status: "completed",
    },
    {
      id: "PASS-002",
      name: "Mary Johnson",
      email: "mary.j@email.com",
      phone: "+231 770 222 333",
      pickupAddress: "Sinkor, Tubman Boulevard",
      destination: "Paynesville Market",
      amountPaid: 450,
      rideType: "Economy",
      paymentMethod: "Cash on Arrival",
      date: "Mar 4, 2026 09:15 AM",
      status: "completed",
    },
    {
      id: "PASS-003",
      name: "Emmanuel Koffa",
      email: "e.koffa@email.com",
      phone: "+231 770 333 444",
      pickupAddress: "Capitol Hill, UN Drive",
      destination: "Mamba Point Hotel",
      amountPaid: 850,
      rideType: "Standard",
      paymentMethod: "Mobile Money",
      date: "Mar 4, 2026 08:45 AM",
      status: "completed",
    },
    {
      id: "PASS-004",
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      phone: "+231 770 444 555",
      pickupAddress: "Congo Town, SKD Stadium",
      destination: "Waterside Market",
      amountPaid: 550,
      rideType: "Standard",
      paymentMethod: "Cash on Arrival",
      date: "Mar 4, 2026 07:20 AM",
      status: "completed",
    },
    {
      id: "PASS-005",
      name: "David Mensah",
      email: "d.mensah@email.com",
      phone: "+231 770 555 666",
      pickupAddress: "Red Light, Paynesville",
      destination: "Ministry of Foreign Affairs",
      amountPaid: 1200,
      rideType: "Premium",
      paymentMethod: "Mobile Money",
      date: "Mar 3, 2026 06:30 PM",
      status: "completed",
    },
    {
      id: "PASS-006",
      name: "Rachel Brown",
      email: "rachel.b@email.com",
      phone: "+231 770 666 777",
      pickupAddress: "Old Road, Sinkor",
      destination: "Elwa Junction",
      amountPaid: 400,
      rideType: "Economy",
      paymentMethod: "Mobile Money",
      date: "Mar 3, 2026 05:15 PM",
      status: "completed",
    },
    {
      id: "PASS-007",
      name: "Joseph Clarke",
      email: "j.clarke@email.com",
      phone: "+231 770 777 888",
      pickupAddress: "Freeport, Bushrod Island",
      destination: "Somalia Drive Shopping Center",
      amountPaid: 950,
      rideType: "Standard",
      paymentMethod: "Cash on Arrival",
      date: "Mar 3, 2026 04:45 PM",
      status: "completed",
    },
    {
      id: "PASS-008",
      name: "Grace Taylor",
      email: "grace.t@email.com",
      phone: "+231 770 888 999",
      pickupAddress: "Crown Hill, Old Road",
      destination: "RIA Money Transfer, Center Street",
      amountPaid: 650,
      rideType: "Standard",
      paymentMethod: "Mobile Money",
      date: "Mar 3, 2026 03:20 PM",
      status: "completed",
    },
    {
      id: "PASS-009",
      name: "Michael Gboto",
      email: "m.gboto@email.com",
      phone: "+231 770 999 000",
      pickupAddress: "Airfield, Sinkor",
      destination: "University of Liberia",
      amountPaid: 500,
      rideType: "Economy",
      paymentMethod: "Cash on Arrival",
      date: "Mar 3, 2026 02:10 PM",
      status: "completed",
    },
    {
      id: "PASS-010",
      name: "Victoria Smith",
      email: "v.smith@email.com",
      phone: "+231 770 101 202",
      pickupAddress: "Mamba Point, UN Drive",
      destination: "Spriggs Payne Airport",
      amountPaid: 1650,
      rideType: "Premium",
      paymentMethod: "Mobile Money",
      date: "Mar 3, 2026 01:30 PM",
      status: "completed",
    },
  ];

  const stats = {
    totalPassengers: 8947,
    activePassengers: 1234,
    totalRides: 15682,
    revenueToday: 45800,
  };

  const filteredPassengers = passengers.filter(passenger => {
    const matchesSearch = 
      passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.phone.includes(searchTerm) ||
      passenger.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRideType = filterRideType === "all" || passenger.rideType === filterRideType;
    
    return matchesSearch && matchesRideType;
  });

  const getRideTypeBadge = (rideType: string) => {
    switch (rideType) {
      case "Economy":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Economy</Badge>;
      case "Standard":
        return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Standard</Badge>;
      case "Premium":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Premium</Badge>;
      default:
        return null;
    }
  };

  const getPaymentBadge = (method: string) => {
    return method === "Mobile Money" 
      ? <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{method}</Badge>
      : <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">{method}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-[#00b894]/10 to-[#00b894]/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Total Passengers</p>
            <Users className="w-5 h-5 text-[#00b894]" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalPassengers.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">All registered users</p>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Active Today</p>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.activePassengers.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">+12% from yesterday</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Total Rides</p>
            <Car className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalRides.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">Completed trips</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Revenue Today</p>
            <CreditCard className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">L$ {stats.revenueToday.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">+8% from yesterday</p>
        </Card>
      </div>

      {/* Filters & Actions */}
      <Card className="p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0 gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search by name, email, phone, or ID..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant={filterRideType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRideType("all")}
                className={filterRideType === "all" ? "bg-[#00b894] hover:bg-[#00a383]" : ""}
              >
                All
              </Button>
              <Button 
                variant={filterRideType === "Economy" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRideType("Economy")}
                className={filterRideType === "Economy" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                Economy
              </Button>
              <Button 
                variant={filterRideType === "Standard" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRideType("Standard")}
                className={filterRideType === "Standard" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Standard
              </Button>
              <Button 
                variant={filterRideType === "Premium" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRideType("Premium")}
                className={filterRideType === "Premium" ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                Premium
              </Button>
            </div>
          </div>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </Card>

      {/* Passengers Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Passenger</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Contact</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Trip Details</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Ride Info</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Payment</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Date</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredPassengers.map((passenger) => (
                <tr key={passenger.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-full flex items-center justify-center text-white font-semibold">
                        {passenger.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{passenger.name}</p>
                        <p className="text-xs text-slate-500">{passenger.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{passenger.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate max-w-[150px]" title={passenger.email}>{passenger.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2 max-w-[200px]">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500">Pickup</p>
                          <p className="text-sm text-slate-900 truncate" title={passenger.pickupAddress}>
                            {passenger.pickupAddress}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500">Destination</p>
                          <p className="text-sm text-slate-900 truncate" title={passenger.destination}>
                            {passenger.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      {getRideTypeBadge(passenger.rideType)}
                      <div className="flex items-center space-x-1">
                        <Car className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-600">{passenger.rideType}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-[#00b894]">
                        L$ {passenger.amountPaid.toLocaleString()}
                      </p>
                      {getPaymentBadge(passenger.paymentMethod)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-900 whitespace-nowrap">{passenger.date.split(" ")[0]}</p>
                        <p className="text-xs text-slate-500 whitespace-nowrap">
                          {passenger.date.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" className="text-[#00b894] hover:text-[#00a383] hover:bg-[#00b894]/10">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredPassengers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">No passengers found</p>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </Card>

      {/* Pagination */}
      {filteredPassengers.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Showing <span className="font-medium">{filteredPassengers.length}</span> of{" "}
            <span className="font-medium">{passengers.length}</span> results
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-[#00b894] text-white border-[#00b894] hover:bg-[#00a383]">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      )}
    </div>
  );
}

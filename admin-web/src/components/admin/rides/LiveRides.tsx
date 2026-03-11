import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Search,
  Filter,
  RefreshCw,
  Eye,
  Phone
} from "lucide-react";

export default function LiveRides() {
  const activeRides = [
    {
      id: "R-8472",
      driver: "John Kamara",
      passenger: "Emma Davis",
      pickup: "Congo Town",
      dropoff: "Mamba Point",
      status: "Picking up",
      eta: "3 min",
      fare: 850,
      distance: "2.3 km",
    },
    {
      id: "R-8471",
      driver: "Sarah Johnson",
      passenger: "James Wilson",
      pickup: "Sinkor",
      dropoff: "Paynesville",
      status: "In Progress",
      eta: "12 min",
      fare: 1200,
      distance: "5.8 km",
    },
    {
      id: "R-8470",
      driver: "Michael Chen",
      passenger: "Olivia Martinez",
      pickup: "Old Road",
      dropoff: "Broad Street",
      status: "Picking up",
      eta: "5 min",
      fare: 680,
      distance: "1.9 km",
    },
    {
      id: "R-8469",
      driver: "Alice Brown",
      passenger: "Noah Anderson",
      pickup: "Red Light",
      dropoff: "ELWA Junction",
      status: "In Progress",
      eta: "8 min",
      fare: 920,
      distance: "3.7 km",
    },
    {
      id: "R-8468",
      driver: "David Wilson",
      passenger: "Sophia Taylor",
      pickup: "Somalia Drive",
      dropoff: "SKD Boulevard",
      status: "Arriving",
      eta: "1 min",
      fare: 1450,
      distance: "6.2 km",
    },
  ];

  const stats = {
    active: 127,
    completed: 1453,
    cancelled: 23,
    revenue: 825000,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Active Rides</p>
          <p className="text-2xl font-bold text-slate-900">{stats.active}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Completed Today</p>
          <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Cancelled</p>
          <p className="text-2xl font-bold text-red-600">{stats.cancelled}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Today's Revenue</p>
          <p className="text-2xl font-bold text-[#00b894]">L$ {stats.revenue.toLocaleString()}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Live Map View</h3>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
          
          {/* Mock Map */}
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-[600px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600 font-medium">Real-time Ride Monitoring</p>
                <p className="text-sm text-slate-500 mt-2">{stats.active} active rides on map</p>
              </div>
            </div>

            {/* Mock Active Ride Markers */}
            <div className="absolute top-20 left-24">
              <div className="w-8 h-8 bg-[#00b894] rounded-full animate-pulse shadow-lg flex items-center justify-center">
                <Navigation className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute top-40 right-32">
              <div className="w-8 h-8 bg-[#0984e3] rounded-full animate-pulse shadow-lg flex items-center justify-center">
                <Navigation className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute bottom-32 left-40">
              <div className="w-8 h-8 bg-[#6c5ce7] rounded-full animate-pulse shadow-lg flex items-center justify-center">
                <Navigation className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </Card>

        {/* Active Rides List */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Rides</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search rides..." className="pl-9 h-9" />
            </div>
          </div>

          <div className="space-y-3 max-h-[560px] overflow-y-auto">
            {activeRides.map((ride) => (
              <Card key={ride.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-[#00b894]">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{ride.id}</p>
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${
                      ride.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : ride.status === "Picking up"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {ride.status}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <p className="text-slate-500">Driver</p>
                    <p className="font-medium text-slate-900">{ride.driver}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Passenger</p>
                    <p className="font-medium text-slate-900">{ride.passenger}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-start space-x-2 mb-1">
                      <div className="w-2 h-2 bg-[#00b894] rounded-full mt-1.5" />
                      <div>
                        <p className="text-slate-500">Pickup</p>
                        <p className="font-medium text-slate-900">{ride.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-2 h-2 text-destructive mt-1.5" />
                      <div>
                        <p className="text-slate-500">Drop-off</p>
                        <p className="font-medium text-slate-900">{ride.dropoff}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Clock className="w-3 h-3" />
                      <span>ETA: {ride.eta}</span>
                    </div>
                    <div className="font-semibold text-slate-900">L$ {ride.fare}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
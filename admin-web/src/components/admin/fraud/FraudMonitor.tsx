import { useState } from "react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";
import { 
  AlertTriangle, 
  Shield, 
  Eye, 
  Ban,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Clock,
  MapPin,
  User,
  CreditCard,
  Phone
} from "lucide-react";

export default function FraudMonitor() {
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "confirmed" | "dismissed">("all");

  const fraudAlerts = [
    {
      id: "FA-001",
      type: "Multiple Cancellations",
      severity: "high",
      passengerName: "Marcus Johnson",
      passengerId: "PASS-2341",
      phone: "+231 770 999 888",
      description: "5 consecutive ride cancellations within 30 minutes",
      timestamp: "Mar 6, 2026 2:45 PM",
      status: "pending",
      riskScore: 87,
      details: {
        cancelCount: 5,
        timeFrame: "30 minutes",
        amount: 2450,
      }
    },
    {
      id: "FA-002",
      type: "Payment Fraud",
      severity: "critical",
      passengerName: "Jennifer Smith",
      passengerId: "PASS-3421",
      phone: "+231 770 888 777",
      description: "Failed payment attempts with multiple cards",
      timestamp: "Mar 6, 2026 1:30 PM",
      status: "pending",
      riskScore: 95,
      details: {
        failedAttempts: 8,
        cardCount: 4,
        amount: 1850,
      }
    },
    {
      id: "FA-003",
      type: "Suspicious Location",
      severity: "medium",
      passengerName: "David Brown",
      passengerId: "PASS-1234",
      phone: "+231 770 777 666",
      description: "Multiple rides from same location with different accounts",
      timestamp: "Mar 6, 2026 12:15 PM",
      status: "confirmed",
      riskScore: 72,
      details: {
        accountCount: 3,
        rideCount: 12,
        amount: 4500,
      }
    },
    {
      id: "FA-004",
      type: "Driver Complaint",
      severity: "high",
      passengerName: "Sarah Wilson",
      passengerId: "PASS-5678",
      phone: "+231 770 666 555",
      description: "Multiple driver complaints about aggressive behavior",
      timestamp: "Mar 6, 2026 11:00 AM",
      status: "pending",
      riskScore: 81,
      details: {
        complaintCount: 4,
        driverCount: 4,
        lastIncident: "2 days ago",
      }
    },
    {
      id: "FA-005",
      type: "Unusual Activity",
      severity: "low",
      passengerName: "Michael Taylor",
      passengerId: "PASS-9012",
      phone: "+231 770 555 444",
      description: "Abnormal ride frequency pattern detected",
      timestamp: "Mar 6, 2026 10:30 AM",
      status: "dismissed",
      riskScore: 45,
      details: {
        ridesPerDay: 15,
        avgDistance: "2.3 km",
        pattern: "Circular routes",
      }
    },
  ];

  const stats = {
    totalAlerts: 127,
    pending: 45,
    confirmed: 23,
    dismissed: 59,
    blockedUsers: 18,
  };

  const filteredAlerts = filterStatus === "all" 
    ? fraudAlerts 
    : fraudAlerts.filter(alert => alert.status === filterStatus);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-600 text-white hover:bg-red-700">Critical</Badge>;
      case "high":
        return <Badge className="bg-orange-500 text-white hover:bg-orange-600">High</Badge>;
      case "medium":
        return <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Medium</Badge>;
      case "low":
        return <Badge className="bg-blue-500 text-white hover:bg-blue-600">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending Review</Badge>;
      case "confirmed":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Confirmed</Badge>;
      case "dismissed":
        return <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">Dismissed</Badge>;
      default:
        return null;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-500";
    if (score >= 40) return "text-yellow-600";
    return "text-blue-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Fraud Monitor</h2>
        <p className="text-slate-600 mt-1">Real-time fraud detection and security monitoring</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card 
          className={`p-4 cursor-pointer transition-all ${filterStatus === "all" ? "ring-2 ring-[#00b894]" : ""}`}
          onClick={() => setFilterStatus("all")}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Total Alerts</p>
            <AlertTriangle className="w-5 h-5 text-slate-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalAlerts}</p>
          <p className="text-xs text-slate-500 mt-1">All time</p>
        </Card>

        <Card 
          className={`p-4 cursor-pointer transition-all ${filterStatus === "pending" ? "ring-2 ring-yellow-500" : ""}`}
          onClick={() => setFilterStatus("pending")}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Pending</p>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          <p className="text-xs text-slate-500 mt-1">Needs review</p>
        </Card>

        <Card 
          className={`p-4 cursor-pointer transition-all ${filterStatus === "confirmed" ? "ring-2 ring-red-500" : ""}`}
          onClick={() => setFilterStatus("confirmed")}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Confirmed</p>
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-600">{stats.confirmed}</p>
          <p className="text-xs text-slate-500 mt-1">Verified fraud</p>
        </Card>

        <Card 
          className={`p-4 cursor-pointer transition-all ${filterStatus === "dismissed" ? "ring-2 ring-slate-500" : ""}`}
          onClick={() => setFilterStatus("dismissed")}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Dismissed</p>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-slate-700">{stats.dismissed}</p>
          <p className="text-xs text-slate-500 mt-1">False positives</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Blocked Users</p>
            <Ban className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-2xl font-bold text-red-600">{stats.blockedUsers}</p>
          <p className="text-xs text-slate-500 mt-1">Active bans</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search alerts..." className="pl-9" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <Card key={alert.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              {/* Left Section */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{alert.type}</h3>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-sm text-slate-600">{alert.description}</p>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex flex-wrap items-center gap-4 ml-15">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-900 font-medium">{alert.passengerName}</span>
                    <span className="text-xs text-slate-500">({alert.passengerId})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{alert.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{alert.timestamp}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-3 ml-15">
                  {Object.entries(alert.details).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 px-3 py-1.5 rounded-lg">
                      <span className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                      <span className="text-xs font-medium text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end space-y-3">
                {/* Risk Score */}
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getRiskColor(alert.riskScore)}`}>
                    {alert.riskScore}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Risk Score</p>
                </div>

                {/* Status */}
                <div>
                  {getStatusBadge(alert.status)}
                </div>

                {/* Actions */}
                {alert.status === "pending" && (
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Dismiss
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Ban className="w-4 h-4 mr-1" />
                      Block
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </div>
                )}
                {alert.status !== "pending" && (
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fraud Detection Rules */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-slate-900">Active Detection Rules</h3>
            <p className="text-sm text-slate-600 mt-1">Automated fraud detection patterns</p>
          </div>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Shield className="w-4 h-4 mr-2" />
            Add Rule
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 bg-slate-50">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-orange-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
            <h4 className="font-medium text-slate-900 mb-1">Multiple Cancellations</h4>
            <p className="text-xs text-slate-600">Triggers after 3+ cancellations in 1 hour</p>
          </Card>

          <Card className="p-4 bg-slate-50">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-red-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
            <h4 className="font-medium text-slate-900 mb-1">Payment Fraud</h4>
            <p className="text-xs text-slate-600">Failed payment attempts monitoring</p>
          </Card>

          <Card className="p-4 bg-slate-50">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-yellow-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
            <h4 className="font-medium text-slate-900 mb-1">Location Anomaly</h4>
            <p className="text-xs text-slate-600">Unusual location pattern detection</p>
          </Card>
        </div>
      </Card>
    </div>
  );
}

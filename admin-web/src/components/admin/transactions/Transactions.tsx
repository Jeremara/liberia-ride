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
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Transactions() {
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "pending" | "failed">("all");
  const [filterType, setFilterType] = useState<"all" | "payment" | "payout" | "refund">("all");

  const transactions = [
    {
      id: "TXN-001234",
      type: "payment",
      rideId: "RIDE-5678",
      passenger: "James Cooper",
      driver: "John Kamara",
      amount: 1850,
      method: "Mobile Money",
      provider: "Orange Money",
      status: "completed",
      timestamp: "Mar 6, 2026 2:45 PM",
      fee: 92.5,
      netAmount: 1757.5,
    },
    {
      id: "TXN-001235",
      type: "payout",
      rideId: "WEEKLY-PAY-001",
      passenger: "-",
      driver: "Sarah Johnson",
      amount: 12500,
      method: "Bank Transfer",
      provider: "Ecobank Liberia",
      status: "pending",
      timestamp: "Mar 6, 2026 2:30 PM",
      fee: 250,
      netAmount: 12250,
    },
    {
      id: "TXN-001236",
      type: "payment",
      rideId: "RIDE-5679",
      passenger: "Mary Johnson",
      driver: "Michael Chen",
      amount: 450,
      method: "Cash on Arrival",
      provider: "Cash",
      status: "completed",
      timestamp: "Mar 6, 2026 2:15 PM",
      fee: 0,
      netAmount: 450,
    },
    {
      id: "TXN-001237",
      type: "refund",
      rideId: "RIDE-5680",
      passenger: "Emmanuel Koffa",
      driver: "Alice Brown",
      amount: 850,
      method: "Mobile Money",
      provider: "MTN Mobile Money",
      status: "completed",
      timestamp: "Mar 6, 2026 1:50 PM",
      fee: 42.5,
      netAmount: 807.5,
    },
    {
      id: "TXN-001238",
      type: "payment",
      rideId: "RIDE-5681",
      passenger: "Sarah Williams",
      driver: "David Wilson",
      amount: 550,
      method: "Mobile Money",
      provider: "Orange Money",
      status: "failed",
      timestamp: "Mar 6, 2026 1:30 PM",
      fee: 0,
      netAmount: 0,
    },
    {
      id: "TXN-001239",
      type: "payment",
      rideId: "RIDE-5682",
      passenger: "David Mensah",
      driver: "John Kamara",
      amount: 1200,
      method: "Mobile Money",
      provider: "MTN Mobile Money",
      status: "completed",
      timestamp: "Mar 6, 2026 1:10 PM",
      fee: 60,
      netAmount: 1140,
    },
    {
      id: "TXN-001240",
      type: "payout",
      rideId: "WEEKLY-PAY-002",
      passenger: "-",
      driver: "Michael Chen",
      amount: 11800,
      method: "Mobile Money",
      provider: "Orange Money",
      status: "completed",
      timestamp: "Mar 6, 2026 12:45 PM",
      fee: 590,
      netAmount: 11210,
    },
    {
      id: "TXN-001241",
      type: "payment",
      rideId: "RIDE-5683",
      passenger: "Rachel Brown",
      driver: "Sarah Johnson",
      amount: 400,
      method: "Mobile Money",
      provider: "MTN Mobile Money",
      status: "completed",
      timestamp: "Mar 6, 2026 12:20 PM",
      fee: 20,
      netAmount: 380,
    },
  ];

  const stats = {
    totalVolume: 458900,
    totalTransactions: 1847,
    avgTransaction: 248,
    successRate: 96.5,
  };

  const volumeData = [
    { date: "Mar 1", volume: 42000, transactions: 145 },
    { date: "Mar 2", volume: 45000, transactions: 156 },
    { date: "Mar 3", volume: 48000, transactions: 162 },
    { date: "Mar 4", volume: 43000, transactions: 149 },
    { date: "Mar 5", volume: 52000, transactions: 178 },
    { date: "Mar 6", volume: 58000, transactions: 192 },
  ];

  const filteredTransactions = transactions.filter(txn => {
    const matchesStatus = filterStatus === "all" || txn.status === filterStatus;
    const matchesType = filterType === "all" || txn.type === filterType;
    return matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Completed
        </Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
          <XCircle className="w-3 h-3 mr-1" />
          Failed
        </Badge>;
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "payment":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
          <ArrowDownLeft className="w-3 h-3 mr-1" />
          Payment
        </Badge>;
      case "payout":
        return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
          <ArrowUpRight className="w-3 h-3 mr-1" />
          Payout
        </Badge>;
      case "refund":
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
          <RefreshCw className="w-3 h-3 mr-1" />
          Refund
        </Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5 bg-gradient-to-br from-[#00b894]/10 to-[#00b894]/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Total Volume</p>
            <DollarSign className="w-5 h-5 text-[#00b894]" />
          </div>
          <p className="text-2xl font-bold text-slate-900">L$ {stats.totalVolume.toLocaleString()}</p>
          <div className="flex items-center space-x-1 mt-2">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-600">+12.5% from yesterday</p>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Transactions</p>
            <CreditCard className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalTransactions}</p>
          <div className="flex items-center space-x-1 mt-2">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-600">+8.2% from yesterday</p>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Avg Transaction</p>
            <Wallet className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">L$ {stats.avgTransaction}</p>
          <div className="flex items-center space-x-1 mt-2">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-600">+3.4% from yesterday</p>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-500/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Success Rate</p>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.successRate}%</p>
          <div className="flex items-center space-x-1 mt-2">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-600">+0.8% from yesterday</p>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900">Transaction Volume</h3>
            <p className="text-sm text-slate-600 mt-1">Daily transaction amounts</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={volumeData}>
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
              <Bar dataKey="volume" fill="#00b894" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900">Transaction Count</h3>
            <p className="text-sm text-slate-600 mt-1">Number of transactions per day</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={volumeData}>
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
              <Line type="monotone" dataKey="transactions" stroke="#0984e3" strokeWidth={3} dot={{ fill: '#0984e3', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0 gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search transactions..." className="pl-9" />
            </div>
            
            {/* Status Filter */}
            <div className="flex items-center space-x-2">
              <Button 
                variant={filterStatus === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("all")}
                className={filterStatus === "all" ? "bg-[#00b894] hover:bg-[#00a383]" : ""}
              >
                All
              </Button>
              <Button 
                variant={filterStatus === "completed" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("completed")}
                className={filterStatus === "completed" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Completed
              </Button>
              <Button 
                variant={filterStatus === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("pending")}
                className={filterStatus === "pending" ? "bg-yellow-600 hover:bg-yellow-700" : ""}
              >
                Pending
              </Button>
              <Button 
                variant={filterStatus === "failed" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus("failed")}
                className={filterStatus === "failed" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Failed
              </Button>
            </div>
          </div>
          <Button className="bg-[#00b894] hover:bg-[#00a383]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </Card>

      {/* Type Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200">
        <button
          onClick={() => setFilterType("all")}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            filterType === "all"
              ? "text-[#00b894] border-b-2 border-[#00b894]"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          All Transactions
        </button>
        <button
          onClick={() => setFilterType("payment")}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            filterType === "payment"
              ? "text-[#00b894] border-b-2 border-[#00b894]"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Payments
        </button>
        <button
          onClick={() => setFilterType("payout")}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            filterType === "payout"
              ? "text-[#00b894] border-b-2 border-[#00b894]"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Payouts
        </button>
        <button
          onClick={() => setFilterType("refund")}
          className={`px-4 py-2 font-medium text-sm transition-colors relative ${
            filterType === "refund"
              ? "text-[#00b894] border-b-2 border-[#00b894]"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Refunds
        </button>
      </div>

      {/* Transactions Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Transaction ID</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Type</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Parties</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Amount</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Payment Method</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Status</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Time</th>
                <th className="text-left text-xs font-semibold text-slate-600 px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{txn.id}</p>
                      <p className="text-xs text-slate-500">{txn.rideId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getTypeBadge(txn.type)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900">{txn.passenger}</p>
                      {txn.driver !== "-" && (
                        <p className="text-xs text-slate-500">→ {txn.driver}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">L$ {txn.amount.toLocaleString()}</p>
                      {txn.fee > 0 && (
                        <p className="text-xs text-slate-500">Fee: L$ {txn.fee.toLocaleString()}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-slate-900">{txn.method}</p>
                      <p className="text-xs text-slate-500">{txn.provider}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(txn.status)}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 whitespace-nowrap">{txn.timestamp}</p>
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
      </Card>
    </div>
  );
}

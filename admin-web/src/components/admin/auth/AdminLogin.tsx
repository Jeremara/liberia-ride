import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card } from "../../ui/card";
import { Car, Eye, EyeOff, AlertCircle, Shield, Lock, Clock } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const adminUserStr = localStorage.getItem("adminUser");
    if (adminUserStr) {
      // User is already logged in, redirect to dashboard
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/data/admin_credentials.json");

      if (!response.ok) {
        throw new Error("Failed to load credentials");
      }

      const data = await response.json();

      const admin = data.admins.find(
        (a: { email: string; password: string }) =>
          a.email === email && a.password === password
      );

      if (!admin) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      // Store session
      localStorage.setItem("adminUser", JSON.stringify(admin));
      localStorage.setItem("adminToken", "admin-session");

      // redirect
      const redirect = localStorage.getItem("adminRedirectPath");

      if (redirect) {
        localStorage.removeItem("adminRedirectPath");
        navigate(redirect);
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError("Unable to login. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00b894] to-[#0984e3] rounded-2xl mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Liberia Ride Admin</h1>
          <p className="text-slate-600 mt-2">Sign in to your dashboard</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <Input
              type="email"
              placeholder="admin@nationalcab.lr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <button type="button" className="text-[#00b894] hover:underline">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-gradient-to-r from-[#00b894] to-[#0984e3] hover:from-[#00a383] hover:to-[#0875cc] text-white disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Protected access only • Admin portal
        </p>
      </Card>


    </div>
  );
}

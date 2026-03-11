import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const SESSION_TIMEOUT = 30 * 60 * 1000;
const WARNING_TIME = 5 * 60 * 1000;

export function useSessionManager() {
  const navigate = useNavigate();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logout = () => {
    localStorage.removeItem("adminUser");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("lastActivity");

    navigate("/admin/login", { replace: true });
  };

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (warningRef.current) clearTimeout(warningRef.current);

    localStorage.setItem("lastActivity", Date.now().toString());

    timeoutRef.current = setTimeout(() => {
      logout();
    }, SESSION_TIMEOUT);

    warningRef.current = setTimeout(() => {
      console.warn("Session expires in 5 minutes");
    }, SESSION_TIMEOUT - WARNING_TIME);
  };

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser");
    if (!adminUser) return;

    const lastActivity = localStorage.getItem("lastActivity");

    if (lastActivity) {
      const diff = Date.now() - parseInt(lastActivity);

      if (diff > SESSION_TIMEOUT) {
        logout();
        return;
      }
    }

    resetTimer();

    const events = ["click", "mousemove", "keydown", "scroll"];

    const activityHandler = () => resetTimer();

    events.forEach((event) =>
      document.addEventListener(event, activityHandler)
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (warningRef.current) clearTimeout(warningRef.current);

      events.forEach((event) =>
        document.removeEventListener(event, activityHandler)
      );
    };
  }, []);

  return { logout };
}

export default function SessionManager({
  children,
}: {
  children: React.ReactNode;
}) {
  useSessionManager();
  return <>{children}</>;
}
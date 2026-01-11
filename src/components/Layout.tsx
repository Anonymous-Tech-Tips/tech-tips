import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

/**
 * Layout component - provides consistent navigation across standard pages
 * Uses React Router v6's Outlet to render child routes
 * 
 * Pages that should NOT have the navbar (excluded from this layout):
 * - LoginPage: Clean auth experience
 * - SafeModePage: Intentionally mimics a study app (no site navigation)
 * - GameDetailPage: Full-screen immersive game view with custom back button
 * - UtilityDetailPage: Full-screen utility view with custom navigation
 */
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

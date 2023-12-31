import { AppBar } from "@/components/blocks/AppBar";
import { UserDropdown } from "@/components/ui/UserDropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar
        navItems={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "My Team", href: "/team" },
        ]}
        actionItems={<UserDropdown />}
      />
      {children}
    </>
  );
}

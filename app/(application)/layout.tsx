import { AppBar } from "@/components/blocks/AppBar";
import { UserDropdown } from "@/components/ui/UserDropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AppBar
        navItems={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Editor", href: "/editor" },
          { title: "My Team", href: "/team" },
        ]}
        actionItems={<UserDropdown />}
      />
      {children}
    </div>
  );
}

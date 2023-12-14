import { AppBar } from "@/components/blocks/AppBar";
import { PageHeader } from "@/components/blocks/PageHeader";
import { UserDropdown } from "@/components/ui/UserDropdown";

export default function EditorPage() {
  return (
    <>
      <AppBar
        navItems={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Editor", href: "/editor" },
          { title: "My Team", href: "/team" },
        ]}
        actionItems={<UserDropdown />}
      />
      <PageHeader title="Editor" />
    </>
  );
}

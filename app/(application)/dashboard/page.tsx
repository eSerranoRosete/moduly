import { AppBar } from "@/components/blocks/AppBar";
import { PageHeader } from "@/components/blocks/PageHeader";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { UserDropdown } from "@/components/ui/UserDropdown";
import { PlusCircle } from "lucide-react";
import React from "react";

export default function DashboardPage() {
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
      <PageHeader
        title="Your active cards"
        actions={
          <Dialog
            title="Give your card a title"
            subTitle="Don't worry, you can change this later!"
            trigger={
              <Button icon={<PlusCircle className="w-4" />}>Create Card</Button>
            }
            actionButton={<Button>Go to Editor</Button>}
            closeButton={<Button variant="flat">Cancel</Button>}
          >
            <Input label="Name" placeholder="Ex. Jhon Doe" />
          </Dialog>
        }
      />
      {/* <section className="grid grid-cols-4 gap-4 ">
        <div className="h-32 bg-dark-900 rounded-md"></div>
        <div className="h-32 bg-dark-900 rounded-md"></div>
        <div className="h-32 bg-dark-900 rounded-md"></div>
        <div className="h-32 bg-dark-900 rounded-md"></div>
      </section> */}
    </>
  );
}

import { PageHeader } from "@/components/blocks/PageHeader";
import { EditorWorkspace } from "@/components/editor/EditorWorkspace";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        actions={
          <Dialog
            title="Give your card a title"
            subTitle="Don't worry, you can change this later!"
            trigger={
              <Button size="sm" icon={PlusCircle}>
                Create Card
              </Button>
            }
            actionButton={<Button>Go to Editor</Button>}
            closeButton={<Button variant="flat">Cancel</Button>}
          >
            <Input label="Name" placeholder="Ex. Jhon Doe" />
          </Dialog>
        }
      />
      <EditorWorkspace />
    </>
  );
}

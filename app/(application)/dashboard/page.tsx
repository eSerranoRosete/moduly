"use client";

import { PageHeader } from "@/components/blocks/PageHeader";
import { EditorWorkspace } from "@/components/editor/EditorWorkspace";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2">
                <PlusCircle className="w-4" />
                Create Card
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Give your card a title</DialogTitle>
                <DialogDescription>
                  Don&apos;t worry! You can change this later.
                </DialogDescription>
              </DialogHeader>

              <Input placeholder="Ex. Jhon Doe" />

              <DialogFooter>
                <DialogClose>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />
      <EditorWorkspace />
    </>
  );
}

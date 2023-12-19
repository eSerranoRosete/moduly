import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  title?: string;
  actions?: React.ReactNode;
  backLink?: string;
};

export const PageHeader = ({ actions, title, backLink }: Props) => {
  return (
    <section className="flex my-3 items-center">
      <div className="grow flex space-x-2 items-baseline">
        <div className="text-2xl font-semibold flex gap-4">
          {backLink && (
            <Link href={backLink}>
              <Button variant="ghost" className="mr-2" size="icon">
                <ChevronLeft />
              </Button>
            </Link>
          )}
          <div className="text-base">{title}</div>
        </div>
      </div>
      {actions}
    </section>
  );
};

import { LogOut, User, Wallet } from "lucide-react";
import { Menu, MenuItem, MenuSeparator } from "./Menu";
import Link from "next/link";

export const UserDropdown = () => {
  return (
    <Menu
      trigger={
        <button className="flex items-center text-left gap-2">
          <div className="rounded-full w-10 h-10 bg-blue-600/40  text-blue-300 flex items-center justify-center">
            ES
          </div>
          <div>
            <div className="text-sm">Eduardo Serrano</div>
            <div className="text-xs text-dark-200">eserranor98@gmail.com</div>
          </div>
        </button>
      }
    >
      <MenuItem icon={<User className="w-4" />}>Profile</MenuItem>
      <MenuItem icon={<Wallet className="w-4" />}>Manage Billing</MenuItem>
      <MenuSeparator />
      <Link href="/login">
        <MenuItem icon={<LogOut className="w-4" />}>Sign out</MenuItem>
      </Link>
    </Menu>
  );
};

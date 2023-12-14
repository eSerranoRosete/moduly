import { Eye, EyeOff } from "lucide-react";

type Props = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

export const TogglePasswordVisibility = ({
  isVisible,
  toggleVisibility,
}: Props) => {
  return (
    <button
      className="focus:outline-none"
      type="button"
      onClick={toggleVisibility}
    >
      {isVisible ? (
        <EyeOff className="w-5 text-slate-8" />
      ) : (
        <Eye className="w-5 text-slate-8" />
      )}
    </button>
  );
};

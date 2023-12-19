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
      onMouseDown={toggleVisibility}
      onMouseUp={toggleVisibility}
    >
      {isVisible ? <EyeOff className="w-5" /> : <Eye className="w-5" />}
    </button>
  );
};

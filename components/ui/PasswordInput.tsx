"use client";

import React, { useState } from "react";
import { Input, InputProps } from "./Input";
import { TogglePasswordVisibility } from "./TogglePasswordVisibility";

export const PasswordInput = ({ ...props }: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Input
      {...props}
      type={passwordVisible ? "text" : "password"}
      endContent={
        <TogglePasswordVisibility
          isVisible={passwordVisible}
          toggleVisibility={toggleVisibility}
        />
      }
    />
  );
};

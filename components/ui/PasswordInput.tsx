"use client";

import React, { forwardRef, useState } from "react";
import { Input, type InputProps } from "./Input";
import { TogglePasswordVisibility } from "./TogglePasswordVisibility";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, forwardedRef) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
      setPasswordVisible((prev) => !prev);
    };

    return (
      <Input
        {...props}
        ref={forwardedRef}
        type={passwordVisible ? "text" : "password"}
        endContent={
          <TogglePasswordVisibility
            isVisible={passwordVisible}
            toggleVisibility={toggleVisibility}
          />
        }
      />
    );
  }
);

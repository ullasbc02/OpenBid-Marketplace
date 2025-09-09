// src/components/Button.tsx
import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  name: string;               // name attribute
  value: string;              // text shown on button
  route: string;              // route to navigate to
};

export default function Button({ name, value, route }: ButtonProps) {
    const router = useRouter();

    function handleClick() {
        if(route) {
            router.push(route);
        }
    }
    return (
        <button
        name={name}
        onClick={handleClick}
        style={{
        marginTop: "2rem",
        padding: "0.75rem 2rem",
        fontSize: "1.2rem",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none",
        background: "#0070f3",
        color: "#fff",
      }}
    >
      {value}
    </button>
  );
}

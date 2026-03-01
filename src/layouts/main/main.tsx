import React from "react";
type mainProps = {
  children: React.ReactNode;
};

export function Main({ children }: mainProps) {
  return <main>{children}</main>;
}

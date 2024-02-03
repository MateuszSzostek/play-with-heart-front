import React, { PropsWithChildren } from "react";
import "./Layout.styles.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <main className="layout-content">{children}</main>
    </div>
  );
}

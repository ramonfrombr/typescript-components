import React, { ReactElement, ReactNode } from "react";

// Conventional props

export function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

export function HeadingWithContent({
  children,
}: {
  children: string;
}): ReactElement {
  return <h1>{children}</h1>;
}

export function HeadingWithNodeContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

import React, { ReactElement, ReactNode } from "react";

// Functional props & optional prop

export function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number | null) => ReactNode;
  children: (num: number | null) => ReactNode;
}) {
  const [state, setState] = React.useState<number | null>(null);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button
          onClick={() => {
            state ? setState(state + 1) : setState(1);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

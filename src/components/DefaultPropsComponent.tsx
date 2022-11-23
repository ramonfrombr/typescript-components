import React, { ReactElement, ReactNode } from "react";

// Default props

export function Container({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

// Another way of defining default props

const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

export function ContainerWithDefaultProps({
  heading,
  children,
}: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

ContainerWithDefaultProps.defaultProps = defaultContainerProps;

/*

//One way of defining default props

const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

function ContainerWithDefaultProps({
  heading,
  children
}: {children: ReactNode} & typeof defaultContainerProps): ReactElement {
  return (
  <div>
    <h1>{heading}</h1>
    {children}
  </div>
  );
}

ContainerWithDefaultProps.defaultProps = defaultContainerProps;


*/

import React, {ReactElement, ReactNode} from 'react';
import './App.css';


// Conventional props

function Heading({title}: {title: string;}) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({children}: {children: string}): ReactElement {
  return <h1>{children}</h1>
}

function HeadingWithNodeContent({children}: {children: ReactNode}): ReactElement {
  return <h1>{children}</h1>
}

// Default props

function Container({heading, children}: {heading: ReactNode, children: ReactNode}): ReactElement {
  return <h1>{children}</h1>;
}

/*

One way of defining default props

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

// Another way of defining default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = {children: ReactNode} & typeof defaultContainerProps;

function ContainerWithDefaultProps({
  heading,
  children
}: ContainerProps): ReactElement {
  return (
  <div>
    <h1>{heading}</h1>
    {children}
  </div>
  );
}

ContainerWithDefaultProps.defaultProps = defaultContainerProps;



// Functional props & optional prop

function TextWithNumber({
  header,
  children
}: {
  header?: (num: number | null) => ReactNode;
  children: (num: number | null) => ReactNode;
}) {

  const [state, setState] = React.useState<number | null>(null);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => {state ? setState(state + 1) : setState(1)}}>Add</button>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>

      <HeadingWithContent>Hi!</HeadingWithContent>

      <HeadingWithNodeContent><s>Hi!</s></HeadingWithNodeContent>

      <hr />

      <ContainerWithDefaultProps><p>Foo</p></ContainerWithDefaultProps>
    
      <ContainerWithDefaultProps heading={<h2>Different heading than default</h2>}><p>Foo</p></ContainerWithDefaultProps>

      <hr />

      <TextWithNumber header={(num: number | null) => <span>Header {num ? num : '0'}</span>}>
        {(num: number | null) => (
          <div>Today's number is {num ? num : '0'}</div>
        )}
      </TextWithNumber>

      <TextWithNumber>
        {(num: number | null) => (
          <div>Today's number is {num ? num : '0'}</div>
        )}
      </TextWithNumber>
    </div>
  );
}

export default App;

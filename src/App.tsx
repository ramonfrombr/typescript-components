import React, { ReactElement, ReactNode } from "react";
import "./App.css";
import {
  Heading,
  HeadingWithContent,
  HeadingWithNodeContent,
} from "./components/ConventionalPropsComponents";
import { ContainerWithDefaultProps } from "./components/DefaultPropsComponent";
import { TextWithNumber } from "./components/FunctionalPropsComponents";
import ListComponent from "./components/List";

function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>

      <HeadingWithContent>Hi!</HeadingWithContent>

      <HeadingWithNodeContent>
        <s>Hi!</s>
      </HeadingWithNodeContent>

      <hr />

      <ContainerWithDefaultProps>
        <p>Foo</p>
      </ContainerWithDefaultProps>

      <ContainerWithDefaultProps
        heading={<h2>Different heading than default</h2>}
      >
        <p>Foo</p>
      </ContainerWithDefaultProps>

      <hr />

      <TextWithNumber
        header={(num: number | null) => <span>Header {num ? num : "0"}</span>}
      >
        {(num: number | null) => <div>Today's number is {num ? num : "0"}</div>}
      </TextWithNumber>

      <TextWithNumber>
        {(num: number | null) => <div>Today's number is {num ? num : "0"}</div>}
      </TextWithNumber>

      <ListComponent
        items={["Jack", "John", "james"]}
        render={(item: string) => <div>{item.toLocaleLowerCase()}</div>}
      ></ListComponent>
    </div>
  );
}

export default App;

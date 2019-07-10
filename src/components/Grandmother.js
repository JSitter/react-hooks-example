import React from "react";
import { FamilyProvider, FamilyConsumer } from "../store/FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };

  render() {
    return (
      // We wrap all of the components that need access 
      // to the lastName property in FamilyProvider.
      <FamilyProvider value={this.state}>
        <Mother />
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child />;
};

const Child = () => {
  // We wrap the component that actaully needs access to 
  // the lastName property in FamilyConsumer
  return <FamilyConsumer>{context => <p>{context.lastName}</p>}</FamilyConsumer>;
};
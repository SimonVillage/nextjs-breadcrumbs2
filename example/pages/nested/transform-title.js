import Breadcrumbs from "nextjs-breadcrumbs2";
import React from "react";

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: "-", to: " " }]}
    />
  );
};

export default App;

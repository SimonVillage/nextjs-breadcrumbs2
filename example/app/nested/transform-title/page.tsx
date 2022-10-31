"use client";

import Breadcrumbs from "nextjs-breadcrumbs2";

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: "-", to: " " }]}
    />
  );
};

export default App;

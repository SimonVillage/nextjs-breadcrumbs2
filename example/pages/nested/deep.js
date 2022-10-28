import Breadcrumbs from "nextjs-breadcrumbs2";
import React from "react";

const App = () => {
  return (
    <Breadcrumbs useDefaultStyle={true} transformLabel={(title) => title} />
  );
};

export default App;

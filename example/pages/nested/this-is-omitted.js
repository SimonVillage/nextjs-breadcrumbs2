import Breadcrumbs from "nextjs-breadcrumbs2";
import React from "react";

const App = () => {
  return <Breadcrumbs useDefaultStyle={true} omitIndexList={[1]} />;
};

export default App;

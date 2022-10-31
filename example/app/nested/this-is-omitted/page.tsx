"use client";

import Breadcrumbs from "nextjs-breadcrumbs2";

const App = () => {
  return <Breadcrumbs useDefaultStyle={true} omitIndexList={[1]} />;
};

export default App;

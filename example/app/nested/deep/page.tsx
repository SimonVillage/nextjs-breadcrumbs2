"use client";

import Breadcrumbs from "nextjs-breadcrumbs2";

const App = () => {
  return (
    <Breadcrumbs useDefaultStyle={true} transformLabel={(title) => title} />
  );
};

export default App;

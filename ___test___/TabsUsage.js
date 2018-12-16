import React from "react";

import Tabs from "../src/Tabs";

function Usage(props) {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab>Travel</Tabs.Tab>
        <Tabs.Tab>Food</Tabs.Tab>
        <Tabs.Tab>Other</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.Panels>
        <Tabs.Panel>Fly here</Tabs.Panel>
        <Tabs.Panel>Eat this burger</Tabs.Panel>
        <Tabs.Panel>We have a gym</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}

export default Usage;

## React Components

### Install

`npm i @panukettu/components`

`yarn add @panukettu/components`

# Components

## Toggle [Demo](https://codesandbox.io/s/r76o0ml3xm)

_React <= 16.7_

```javascript
import { Toggle } from '@panukettu/components'

 ...

<Toggle onToggle={(on) => console.log(`It's ${on ? 'on' : 'off'}`)}>
  <Toggle.On>Wow it's on</Toggle.On>
  <Toggle.Off>Damn it's off</Toggle.Off>
  <Toggle.Button>
    <Switch />
  </Toggle.Button>
</Toggle>

...

// props get passed from Toggle.Button by React.cloneElement
// because I did not like a render prop.

const Switch = ({ toggle, on }) => (
  <input type="checkbox" onClick={toggle} defaultChecked={on} />
);
```

## Tabs [Demo](https://codesandbox.io/s/jljww512jy)

_React <= 16.7_

does not include any styles
css-selectors: 

```css
.tabs              = wrapper  
.tabs__tablist     = tabs wrapper  
.tabs__tab         = a tab  
.tabs__tab--active = active tab  
.tabs__panel       = tab content  
```

```javascript
import { Tabs } from '@panukettu/components'

 ...

 <Tabs>
  <Tabs.TabList>
    <Tabs.Tab>Price</Tabs.Tab>
    <Tabs.Tab>Food</Tabs.Tab>
    <Tabs.Tab>
      <div className="tabs__panel--special">Other</div>
    </Tabs.Tab>
  </Tabs.TabList>
  <Tabs.Panels>
    <Tabs.Panel>Cheap af</Tabs.Panel>
    <Tabs.Panel>Try our burger</Tabs.Panel>
    <Tabs.Panel>
      <div className="tabs__panel--special">We have a gym</div>
    </Tabs.Panel>
  </Tabs.Panels>
</Tabs>

```

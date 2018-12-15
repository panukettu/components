## React Components

### Install

`npm i @panukettu/components`

`yarn add @panukettu/components`

# Components

## Toggle

_React <= 16.6_

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

[Demo](https://codesandbox.io/s/r76o0ml3xm)

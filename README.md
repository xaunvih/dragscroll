# 🎉 DragScroll library

Drag Scroll library - smooth content scroll via mouse/touch dragging. Publish standard format Js such as commonJs, ES Modules, UMD, Typescript

![Alt text](https://vinhmx.me/drag/dragscrolldemo.gif?raw=true)

## Usage

### First of all, you need to import this library:

```js
// Javascript tag
<script type="type/javascript" src="dragscroll.min.js"></script>
```

```js
// Common Javascript
const DragScroll = require('@springjs/dragscroll)
```

```js
// ES6 Module Javascript
import DragScroll from '@springjs/dragscroll'
```

```js
// Typescript
interface IDragScrollOptions {
    $container: HTMLElement
    $content: HTMLElement
    axis: string
    allowInputFocus?: boolean
    allowSelectText?: boolean
}

import DragScroll from '@springjs/dragscroll/src/index.ts'
```

### Next step, init drag scroll instance

```js
// You need to be specified the WIDTH & HEGIHT of $content element. See picture below

const $container = document.getElementById('demo-wrapper')
const $content = document.getElementById('demo-content')

new DragScroll({
    $container: $container,
    $content: $content,
    axix: 'x',
    allowInputFocus: true,
    allowSelectText: false,
})
```

![Alt text](illustration.png?raw=true)

## Config options

| Option          | Type        | Description                                       |
| --------------- | ----------- | ------------------------------------------------- |
| \$container     | HTMLElement | The element wrap the dragable element             |
| \$content       | HTMLElement | The dragable child element of \$container.        |
| axis            | string      | Default is 'x'. There are 3 values: 'x', 'y','xy' |
|                 |             | 'x' is horizontal direction                       |
|                 |             | 'y' is vertical direction                         |
|                 |             | 'xy' is both direction                            |
| allowInputFocus | boolean     | Allow input fields can be focused                 |
| allowSelectText | boolean     | Allow text content can be selected                |

## API

| Name                 | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| scrollTo             | Pass coordinate object { x, y } to scroll to target position |
| setInputCanBeFocused | Default is true. Input fields can be focused                 |
| setTextCanBeSelected | Default is true. Text content can be selected                |
| destroy              | Remove all listeners                                         |

## Events

The evt parameter is either MouseEvent or TouchEvent

| Name                 | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| dragstart            | To be fired when starting drag                               |
| dragging             | To be fired when dragging                                    |
| dragend              | To be fired when dragging is end                             |

```js
// Example:

const dragSroll = new DragScroll({})

function handler(evt) {}

dragSroll.on('dragstart', handler)
dragSroll.off('dragstart', handler)
```

## Files size

| File              | Format         | size     |
| ----------------- | -------------- |----------
| dragscroll.min.js | UMD            | 7.53 KB  |
| dragscroll.cjs.js | Common Js      | 13.23 KB |
| dragscroll.es.js  | ES Module      | 13.22 KB |

### License

MIT License (c) 2020 XuanVinh

## buildHtmlExample

```js
import buildHtml from './index';
 
const data = ['html', [
  ['head', [
    ['title', 'hello, world!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];
 
buildHtml(data);
```

### Result

```html
<html>
  <head>
    <title>hello, world!</title>
  </head>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
```

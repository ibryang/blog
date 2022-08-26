# One



::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::
## One2

{{ 1 + 1 }}


<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
```js
export default {
  name: 'MyComponent',
  // ...
}
```
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
<<< @/foo/aaa.js#aaa{1-3 ts}


<!--@include: ./two.md-->

![01Image](../assets/01.png)

# ES6 Proxy

```javascript
const user = {
  name: 'user'
}
const puser = new Proxy(user, {
  get(target, name, proxy){
    switch(name){
      case 'email': return `${ target.name }@tap2.top`
    }
  }
})
```

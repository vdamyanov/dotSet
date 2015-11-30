# Usage

```
var obj = {};

dotSet(obj, 'collections', {
  name: 'Collection 1'
});
dotSet(obj, 'collections.cities', {
  name: 'Gettysburg'
});
dotSet(obj, 'collections.cities.test', {
  name: 'Something',
  test: true
});
```

Then doing `console.log(dotSet(obj, 'collections.cities.test'));` will output:

```
{
  name: 'Something',
  test: true
}
```

The `obj` variable will look like this:

```
{
  collections: {
    name: 'Collection 1',
    cities: {
      name: 'Gettysburg',
      test: {
        name: 'Something',
        test: true
      }
    }
  }
}
```
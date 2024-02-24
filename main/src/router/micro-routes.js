const routes = [
  {
    name: 'sub1',
    entry: import.meta.env.PROD ? '../sub1/' : '//localhost:6001/',
    container: '#container',
    activeRule: location => location.hash.startsWith('#/app/sub1'),
  },
  {
    name: 'sub2',
    entry: import.meta.env.PROD ? '../sub2/' : '//localhost:6002',
    container: '#container',
    activeRule: location => location.hash.startsWith('#/app/sub2'),
  },
]

export default routes

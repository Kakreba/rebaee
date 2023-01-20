var app = new Framework7({
  routes: [
    {
      name: 'vshack',
      path: '/plist/vshack',
      url: '/plist/vshack.html',
    },
    {
      name: 'vshack',
      path: '/apps/install/plist',
      url: './404.html'
    },
    {
      name: 'apps',
      path: '/apps/',
      url: './apps/index.html',
      options: {
        animate: false,
      },
    },
    
    {
      name: 'users',
      path: '/users/',
      componentUrl: './pages/users.html',
      options: {
        props: {
          users: ['John Doe', 'Vladimir Kharlampidi', 'Timo Ernst'],
        },
      },
      on: {
        pageAfterIn: function test (e, page) {
          // do something after page gets into the view
        },
        pageInit: function (e, page) {
          // do something when page initialized
        },
      }
    },
    // Default route, match to all pages (e.g. 404 page)
    {
      path: '(.*)',
      url: './404.html',
    },
    {
      path: '/apps/install/plist',
      url: './404.html',
    },
  ],
});
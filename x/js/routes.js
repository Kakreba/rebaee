routes = [
    {
  path: '/',
  Url: './index.html',
  },
 {
  path: '/game/',
  Url: './apps/game.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './404.html',
  },
];

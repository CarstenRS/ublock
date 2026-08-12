/// my-tor-redirect.js
(function() {
  const redirects = {
  // Search
  'reddit.com':
    'https://reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion',

  'startpage.com':
    'http://startpagel6srwcjlue4zgq3zevrujfaow726kjytqbbjyrswwmjzcqd.onion',

  'duckduckgo.com':
    'https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion',

  // Email
  'proton.me':
    'https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion',

  // News
  'propublica.org':
    'http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion',

  // Tor Project
  'torproject.org':
    'https://onion.torproject.org'
  };

  const host = location.hostname.toLowerCase().replace(/^www\./, '');
  const target = redirects[host];

  if (!target || location.hostname.endsWith('.onion')) return;

  const url = new URL(target);
  url.pathname = location.pathname;
  url.search = location.search;
  url.hash = location.hash;

  location.replace(url.href);
})();

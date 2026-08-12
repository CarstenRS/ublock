/// my-tor-redirect.js
(function() {
    'use strict';

    const redirects = {
        'reddit.com':
            'https://reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion',

        'startpage.com':
            'http://startpagel6srwcjlue4zgq3zevrujfaow726kjytqbbjyrswwmjzcqd.onion',

        'duckduckgo.com':
            'https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion',

        'proton.me':
            'https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion',

        'propublica.org':
            'http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion'
    };

    const host = location.hostname
        .toLowerCase()
        .replace(/^www\./, '');

    const target = redirects[host];

    if (!target) {
        return;
    }

    // Never redirect an onion address.
    if (location.hostname.endsWith('.onion')) {
        return;
    }

    const url = new URL(target);

    // Preserve the original path, query and fragment.
    url.pathname = location.pathname;
    url.search = location.search;
    url.hash = location.hash;

    location.replace(url.href);
})();

/// <reference lib="webworker" />
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// self.__WB_MANIFEST is injected by vite-plugin-pwa
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

const navigationHandler = createHandlerBoundToURL('/Armaan-Tech-Tips/index.html');
const navigationRoute = new NavigationRoute(navigationHandler, {
  allowlist: [/^\/Armaan-Tech-Tips\/.*$/],
  denylist: [/\/api\/.*$/],
});
registerRoute(navigationRoute);

registerRoute(
  /\.(?:css|js|png|jpg|jpeg|svg|gif|webp|woff2?)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-assets',
    plugins: [new ExpirationPlugin({ maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 })],
  })
);

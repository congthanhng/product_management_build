'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b1b117962d56d5c9eb92169d4ed8b6c7",
"index.html": "2d31d9163a78f19b715b334a5df0959c",
"/": "2d31d9163a78f19b715b334a5df0959c",
"main.dart.js": "337ccf5148d3cdef7ad599a3a1a43dea",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eb5e1565f06889e6ed9fe1887cd3e34",
"assets/AssetManifest.json": "e4a68343d62293eae5f28c867564608c",
"assets/NOTICES": "5c300b25916d791befc876a963f91767",
"assets/FontManifest.json": "bdbfd09f7a3ec8276efcfef4c829be72",
"assets/AssetManifest.bin.json": "18a19686781c867c799a89b59fb8d21c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ba39ec8057120bb49c8f3db99959c044",
"assets/fonts/MaterialIcons-Regular.otf": "e69b422a95315a7d89f86d6adc6ed513",
"assets/assets/images/images/avatar_placeholder.png": "e15972c312b79a08f014bf0bf0c97913",
"assets/assets/images/images/food_01.png": "eb3c287366d30e96959002273116a6f7",
"assets/assets/images/images/food_03.png": "82ffd37425d11b934c268e5a3443c000",
"assets/assets/images/images/food_02.png": "190fc8e8afa9c3a310d50a22889dc2a7",
"assets/assets/images/images/time_line_step_3.png": "f132b15e1ac7dc488f4849b9d5081bfe",
"assets/assets/images/images/coca_cola.png": "e1318c0f2b1620ca9ed0d138cadd1d00",
"assets/assets/images/images/time_line_step_2.png": "391efbc35f4a53d1b7dbab405960a8de",
"assets/assets/images/images/green_tick.png": "bbbfb7cf1513227260f6809e58c93939",
"assets/assets/images/images/food_04.png": "91fc80e9558bc11b700791f2d4d9932e",
"assets/assets/images/images/time_line_step_1.png": "4e27805d18c6eac9c4d1405d095ce066",
"assets/assets/images/images/image_example_04.png": "024eb13d144682c1f6f8e1fff873ff96",
"assets/assets/images/images/image_example_05.png": "14a8071ff53228a25b7a0952c1251515",
"assets/assets/images/images/image_example_02.png": "c28e631d78bfa92b57ad29fc07f65f44",
"assets/assets/images/images/image_example_03.png": "dc8a6ca9e443fd73d250ca16d7722a6b",
"assets/assets/images/images/avatar_03.png": "587c423fbc35413cab819484bf56ee88",
"assets/assets/images/images/about_us_bg.jpg": "3c73b4d803225a17097286a60dfbabac",
"assets/assets/images/images/avatar_02.png": "4f940aa784a423b8685784b7432aac94",
"assets/assets/images/images/avatar.png": "b3756b5a914e93e998bb65fedd37ce2b",
"assets/assets/images/images/avatar_01.png": "a6157753c05d6cf92fc61908ec193db9",
"assets/assets/images/images/logo.png": "04a92ce927a112a5ae0d9151a4e9968f",
"assets/assets/images/images/intro_02.png": "6922033c9154896c62933c7e52b83786",
"assets/assets/images/images/avatar_04.png": "bc4843855b1cb98a10c52746428d4b1d",
"assets/assets/images/images/image_example.png": "c28e631d78bfa92b57ad29fc07f65f44",
"assets/assets/images/images/everest.jpg": "681a6a7b697f9d330b6f4fb4eb8f24d6",
"assets/assets/images/images/intro_01.png": "6285421e00f70a1155dfca83d801aed8",
"assets/assets/images/images/image_expand_01.png": "e747062e58ecbd47bc8fce55cb6d4f1b",
"assets/assets/images/illustrations/order_illustration.png": "3790b9638abb4901a5e041296fb15953",
"assets/assets/images/illustrations/tracking_maps.png": "5e7c2b5211b5d80a7069b0cff0d82466",
"assets/assets/images/illustrations/safe_food.png": "afcf92d11adafd607d9abd40bc225ef8",
"assets/assets/images/logos/logo_with_text.png": "3638d523f7a6170f55f90853a0e960b0",
"assets/assets/images/logos/mini_logo.png": "ef4e93443ea70ea5786f430634d83789",
"assets/assets/images/banners/banner_01.png": "c9a9ee37cb511e27edeef1819e247bdc",
"assets/assets/images/icons/time.png": "bcc0596b659608dbeb27c746c2a41c38",
"assets/assets/images/icons/check_round_fill.png": "e625c2f0d95cb7e459d1bf834a0b3e56",
"assets/assets/images/icons/user.png": "4a8feb65785fc2f051c7b7be3befed1b",
"assets/assets/images/icons/ic_search.png": "39f608ae20a9fab05918f63f02b6f24c",
"assets/assets/images/icons/calendar.png": "d3f2f9f681ddea9ac4a44c4458cdd7f4",
"assets/assets/images/icons/location.png": "153f91d74d57931c887a0f78f6eeb0ce",
"assets/assets/images/icons/cash.png": "b362d39aebf0b47693a1c44bebdc6e8f",
"assets/assets/images/icons/edit.png": "b669567a2acd106ae17eaf0069051265",
"assets/assets/images/icons/edit_fill.png": "de1ab3c10639fb02555396fe08117dd3",
"assets/assets/fonts/Montserrat-LightItalic.ttf": "e70e5d8d5129f35418fe2cfaa6132c1d",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "9d216a715551da3b92a4a9b0e8994868",
"assets/assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat-ThinItalic.ttf": "59cdce8fbd384a39ab0fd14b9f693de5",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/assets/fonts/Montserrat-BlackItalic.ttf": "a943ff860cf7bda5ce3722cad5c1dc06",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Montserrat-ExtraLightItalic.ttf": "e4d0c1f4d67a7f3d23a1f2f78d24ea57",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/assets/fonts/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/assets/fonts/Montserrat-SemiBoldItalic.ttf": "d41c0a341637c2e35ae019730b2d45a5",
"assets/assets/fonts/Montserrat-ExtraBoldItalic.ttf": "e07b3f35e3e0073b2cde4c5a951cc24e",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"logo_with_text.png": "3638d523f7a6170f55f90853a0e960b0",
"version.json": "43912eb714d208f931266960e8b695a5",
"index.html": "fc71b4e06c2db2e174cd3749a0258d05",
"/": "fc71b4e06c2db2e174cd3749a0258d05",
"main.dart.js": "316af2472104d96570d71be038b1c560",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"mini_logo.png": "ef4e93443ea70ea5786f430634d83789",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-mini.png": "681f6e526ff1665f66f92096dc883c26",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eb5e1565f06889e6ed9fe1887cd3e34",
".git/config": "3f620eee273d01fbe6eecd329fa1f0bf",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/67/8b58abe5df6f1625c09182ea4f9bfb2122c3de": "878af654841a16e6affef6e2e9e07a05",
".git/objects/0b/84a81c0c68282c32d24cd414722a0db8b07f8d": "2be99e24394268404bd2eebaf520df6c",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/pack/pack-9870ce4a1d26ea729b8be91ec7a9d173c6ea03e2.idx": "76161d60fd871b0080da245b831e4835",
".git/objects/pack/pack-9870ce4a1d26ea729b8be91ec7a9d173c6ea03e2.pack": "33271e1b37e18dc3ad948d650765a241",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/81/0c4b1e52fde153162243ba18c944acf16563dc": "2f9352abeb2a917662bc26b782534ed0",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "813698a68796f8a6da80a0ef5df505a1",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/65/c679da46c02aff8c1d8e06d8d110b7f4966633": "0999576d3d7dda66fc7fa893d278abb8",
".git/objects/6c/0b8635858dc7ad44b93df54b762707ce49eefc": "4301997f66617848371b4f6ad8aeafc1",
".git/objects/a0/3a20f7626c31fe77f3422a846fca31604fe248": "05d6d9c2cbd07ab24e9d72cd067e604f",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/2c/7cda61105f7a4d8f708dc15f55c995bf5b308d": "d63e609c78347ab015db91df17039e59",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bcae81658040713e017743e61c4ed451",
".git/logs/refs/heads/web": "d91c27094d4ff7bc507945f437517b9a",
".git/logs/refs/heads/main": "55401b736a43e2aa1e57173ec87f9aa3",
".git/logs/refs/remotes/origin/HEAD": "55401b736a43e2aa1e57173ec87f9aa3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/web": "beceb604123ca7687e8b16d6946c70e5",
".git/refs/heads/main": "9d9284352ac89756be028ec8753ff6c3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "67020cc585f1be7d5d5530000a71106b",
".git/packed-refs": "12492d25b4496ccff54ef5e615420e7f",
"assets/AssetManifest.json": "da434a3915e4a9dc0b80c76fef9ce7ae",
"assets/NOTICES": "029ebb6f51e0b6499d1892d643c41b89",
"assets/FontManifest.json": "ba7b8f713093495517fbc07c67242348",
"assets/AssetManifest.bin.json": "5e4da206c1ab364b312a01e82b9bb19f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "629fee4e3ab2e7e743a84c9f87fc05c1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "9e610b20aeb6f151d3f9965945a30cd2",
"assets/fonts/MaterialIcons-Regular.otf": "8fd7d18cfa952618e8dde7f2ceffbfb6",
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
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "f990e6d29e03715a04983dd2f51d3595",
".idea/workspace.xml": "6ce8b2cdfe4846272113b5a839cf7f81",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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

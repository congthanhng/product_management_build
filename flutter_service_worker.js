'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"logo_with_text.png": "3638d523f7a6170f55f90853a0e960b0",
"version.json": "e107ab493aae9039a0a3a6860fc3be2d",
"index.html": "4aeeda7ea39bd8b469d428ed69871e51",
"/": "4aeeda7ea39bd8b469d428ed69871e51",
"main.dart.js": "0a45fcbb54469cfda7b42b3e9beebe56",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"mini_logo.png": "ef4e93443ea70ea5786f430634d83789",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-mini.png": "681f6e526ff1665f66f92096dc883c26",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1466926ef9b2c4fb6d04db757aca47b4",
".git/REBASE_HEAD": "2ac4b917d76aa43a2b2168ec26e6bac7",
".git/ORIG_HEAD": "2ac4b917d76aa43a2b2168ec26e6bac7",
".git/config": "2bbc37935960cdf0e344ee88dd76fc46",
".git/objects/51/e93013e81284aff6dd7143a57bdbdfa6c48fa0": "47e97d8634873e86e46d922fee067776",
".git/objects/02/afaa6b389ff0b5dbf5b75967323d057d348191": "c00e03a6df669f7232d41d98cef6ccb4",
".git/objects/bd/8297a1f41b99d3130e32abf15b711c996cb4fd": "923aef0af1c6f8a9848e9a4578499a38",
".git/objects/d8/4b593e233087ba50b8ce394935283885859e8f": "b53198857f5e8eff551d1d5ea9cee435",
".git/objects/d8/d3754fe18c252e1853e0016c45b55f6cd49510": "3cb20f28a067b3e98afc2fbbf7058240",
".git/objects/c0/45823549bc2dcedaabc0c985e30051b3b5523d": "dc9767c38abd7e5edb13353e08bcf4e6",
".git/objects/ee/a9c6e75b1aa0d3a860143e5de29d27afa02ab8": "310d0f0ffb0d4321a4e6311f2f3acabc",
".git/objects/fd/8708e6e4f0ad73dd433800a3581deb95955ac3": "87c5d86a847ef7ac569c34dbe8800688",
".git/objects/cf/2fc410742c918b0122aefa7836a0cd899c887d": "569fbab9d19bf4ac2f85aa832de31d03",
".git/objects/pack/pack-28dab7a595c50ba32398a7c56ea964a83670ad6c.pack": "1037cc0f1c5a16b988b43478c60bbc61",
".git/objects/pack/pack-28dab7a595c50ba32398a7c56ea964a83670ad6c.idx": "e8c423c4ab77952af28d447c7a5ae91d",
".git/objects/80/6c8721c7f1df05e956857590aba203802cc6d9": "446f18597ae742c8a8978e8aef931ca9",
".git/objects/26/c690275abac579f520c7f13e9d0a8e4e50dd14": "e4e53a024a4656e26f9634dd5fc21c55",
".git/objects/2f/63d9a4c4c020a8b3baafd42de7820913bb7355": "894842fe50e870958a5bb34f8ff5ae39",
".git/objects/9f/9ab363c12701510b068020ace3bc11398caaf3": "94fa7f1036b6683f8752bc7c36a5c6fb",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/53/63a282398f02bcd518c028c3e3f6f5b6964f91": "7c6129b5218d5f0298fe0b32ee399680",
".git/objects/01/9ed9e35f1a28b0363a3af30ed443f46f0a3c11": "b941e86511d65c2f3bb788fca15503c0",
".git/objects/97/849215d96c3730ac657bedf4dc2c1cd9516981": "6e9d74c9a5616ccc8e3db2e9b59a4a32",
".git/objects/ba/3ac390de98365b36cab81c886ee0062286c248": "0a3334434a03d5f0ca7f117d953ae1c5",
".git/objects/db/dd1abfbd5283f4040b808754da0a4c82582222": "2c87b7dcb3adb5f901fffc292622b8e3",
".git/objects/ef/ccd08305c71beabfd63d59b952d65796750b60": "294c50a6013fa942ed4a74e0896371e3",
".git/objects/4f/0e068a714a64052cbdac68dc3a25b88032c9fe": "40deeeecadac52fc88f58bdd771ca132",
".git/objects/15/e32075a2aef26c5952f9cb940e3bf7210c580d": "0270ed8867786296f13fd7761aaa18b4",
".git/objects/2b/9a7f3d64fcfbb0e93468daf72d2e497b8c0eb6": "2f97cbdf39c9eaae4fdca2899c69e07b",
".git/objects/13/f4ffcb9ed3dc8680740f4e3b4f5fbb963e5b99": "b8607f116ffadbb2cf772541387a23c7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a25c8bbc962f04bb5cac2e0e74f19752",
".git/logs/refs/heads/master": "ba545315024dcae5c7c9cad9cbd6fa6a",
".git/logs/refs/heads/main": "7ac74798db2674a187475bffbbc48749",
".git/logs/refs/remotes/origin/web": "221c20a10b4c07f025cf484696943c51",
".git/logs/refs/remotes/origin/release/1.1.6_46": "521438dd7a4222c4b4ccf64d60a75c67",
".git/logs/refs/remotes/origin/main": "133dc3ba2d61a943ac0fd201398c0b31",
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
".git/refs/heads/master": "84607ee41a820b8f43c13f0da2cef889",
".git/refs/heads/main": "bb5c3cda5fc2e5e1fb6f8b21d9338fc9",
".git/refs/remotes/origin/web": "d9293688126e92174ae99c2bdb1e337e",
".git/refs/remotes/origin/release/1.1.6_46": "b706cf1878478c5c4b28c7b9d27626dd",
".git/refs/remotes/origin/main": "bb5c3cda5fc2e5e1fb6f8b21d9338fc9",
".git/index": "4f217d070c3bd10ba0eb75d9f4fa9db6",
".git/COMMIT_EDITMSG": "9d8af17420b9e176f637a2b47991022e",
".git/FETCH_HEAD": "a136ec105bd7ea476e70e4c78f3507dd",
"assets/AssetManifest.json": "ab5cba082dfc6ca5a9ee67bbab28c478",
"assets/NOTICES": "e6be3f402676ab60a1f0d099511a1e18",
"assets/FontManifest.json": "ba7b8f713093495517fbc07c67242348",
"assets/AssetManifest.bin.json": "b6158d3560092877f922bb489c0c9106",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "629fee4e3ab2e7e743a84c9f87fc05c1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/ui_component_kit/assets/images/img_coming_soon.png": "c38d615bc82e6d88bb132f6909deac78",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5cefe2ed22f768ca1bbf098ea61e529e",
"assets/fonts/MaterialIcons-Regular.otf": "9949c8714cd2323112c866b74aa0e424",
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
"assets/assets/images/images/default_product_image.png": "c38d615bc82e6d88bb132f6909deac78",
"assets/assets/images/images/everest.jpg": "681a6a7b697f9d330b6f4fb4eb8f24d6",
"assets/assets/images/images/intro_01.png": "6285421e00f70a1155dfca83d801aed8",
"assets/assets/images/images/image_expand_01.png": "e747062e58ecbd47bc8fce55cb6d4f1b",
"assets/assets/images/illustrations/order_illustration.png": "3790b9638abb4901a5e041296fb15953",
"assets/assets/images/illustrations/tracking_maps.png": "5e7c2b5211b5d80a7069b0cff0d82466",
"assets/assets/images/illustrations/safe_food.png": "afcf92d11adafd607d9abd40bc225ef8",
"assets/assets/images/logos/logo_with_text.png": "3638d523f7a6170f55f90853a0e960b0",
"assets/assets/images/logos/logo_zalo.png": "a314c78d7778469ff6ce201179ce8b7a",
"assets/assets/images/logos/mini_logo.png": "ef4e93443ea70ea5786f430634d83789",
"assets/assets/images/banners/banner_01.png": "c9a9ee37cb511e27edeef1819e247bdc",
"assets/assets/images/icons/time.png": "bcc0596b659608dbeb27c746c2a41c38",
"assets/assets/images/icons/check_round_fill.png": "e625c2f0d95cb7e459d1bf834a0b3e56",
"assets/assets/images/icons/ic_no_result.svg": "2138ce8ab464697b17332c598b8825d7",
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
"assets/assets/envs/build.env.prod": "a887b41c306dc4df9f39e5a46674e6bb",
"assets/assets/envs/build.env.dev": "3142ef932c3277e7d057de454e061551",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
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

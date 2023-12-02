'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b1b117962d56d5c9eb92169d4ed8b6c7",
"index.html": "08b57dbe32344b3fa8a4eda5d08ad055",
"/": "08b57dbe32344b3fa8a4eda5d08ad055",
"main.dart.js": "e1694d82c183b1522735a6de517db9e7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eb5e1565f06889e6ed9fe1887cd3e34",
".git/config": "2bbc37935960cdf0e344ee88dd76fc46",
".git/objects/61/d251812d196e3b936a36cd616b9f8c7d6b955b": "741e989ac4e5245d70453d6533fa236d",
".git/objects/59/e864ab94fdc972fd85b06d81319f4e01f0da81": "8167c60354af00dbfba958491b17f5d8",
".git/objects/92/798712384ed7dc41f63357b9c57c534a7997e6": "35a9eb412d4b0411733039a73a974482",
".git/objects/66/932d079f7560221d8237525fa93ab39b524498": "919bd3d889f0df2bdc2955a5a00ff0a6",
".git/objects/3e/e5000148e1fca1034c9e4a498e3e206aa98f40": "2c03e78e040dc654b0abd5e443f791a6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/b9979a3c2537297214d0f7ce5300e06f797bc6": "8a107677482e9cf069d8ba748e13998c",
".git/objects/69/ac185ef61abe335ce1057b6c26590536f40100": "c3b4a283a12e50c4e57f2f3a672b32a3",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/94/bcf553999f7a4fa82e25b0a08905b2019df642": "57debc70f1eb677d962da6878e5f6370",
".git/objects/94/f778883981fb14e4e75a21ddaa5e59a1921d87": "842b8e6e4e68ef9776d1a14e090452a9",
".git/objects/94/2354434fb93087c3efade5fa81b3d0b825f706": "0be3060576719419ebcb23946772ad46",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/5a/3ba610bfd5764bd265bcb8fee0ee1da5e812a5": "c7ac57efc63bad60cf36645dcd9f2e3e",
".git/objects/5f/3402abbf7051ffc6628438186a9257b06378c6": "dfb28b40b5468815fa6c8cf8b514c0a9",
".git/objects/33/35b029a079e6777d68bed4cd9775ed414a7463": "6f9cbafc704b3df56425d665ebad3e78",
".git/objects/9c/86f4c0da2136336bf97d5f0dc9d2c9660de7ce": "b2201fe0f8c0a3b524bf79ce0b7edd79",
".git/objects/02/a2f91583d0f63d823a937b393501b7e0c18320": "6835df4b55f43509647d6b44716e138b",
".git/objects/ac/c62778c72fb2802f95186179c2e678efa58d57": "d73d161a3d6eb5a6116afe2ffef071a8",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/9f1a4bf7cade23bdcfee498f0cd2632dd989d5": "68d399e5c521e06cbeeac691c712b171",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/f58646306f3b8e8fd69251bb25e2b23cdb40df": "d0fed937b0f88e5b60d1230608077931",
".git/objects/bd/72c0b8c3bd4d11f225375fad2dce0a6452f20e": "0664beee8cf3f08a13497ff69736e0b7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/adc271ac9b376b58d852bbe93a4cc049f48c84": "b80fc0201e92e3cb04be14f6e714a403",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d911bf1c4173c88e0d09fd0ae41a66836d3256": "9b70bcdcdb3634e8835a5a3a7689d929",
".git/objects/ee/e45ba97c0ff8a2304c14a23874170105867c0a": "4a45053c3102a273219b7e7682995b85",
".git/objects/ee/27c078b83879655a3bd03c6c8d4cda07b0ff97": "379ab872244ece904963caade493520e",
".git/objects/f5/34e1b57afc39f6e521d035dadda5579bde6e49": "e6ad8408da4d29e2852a1d358b252160",
".git/objects/c8/36337ff83da7bfad084a7ae5482166f3bacc6c": "ed020a1721aee2a904b3ed0fb9a5f650",
".git/objects/fb/97879b389fc9de735893eedf0a7a24e4b10dd1": "7109d1611093f615a67fd52ed10d08b3",
".git/objects/ec/982d5d78875b1365b586d6e7db7b33677f3c41": "8e25f5ac298dce82569b954f15f67fbd",
".git/objects/20/8419aa3744503e85f884f6ce131efb863903b6": "860be9d60871f8492b05c1a9e9d3ac66",
".git/objects/20/38894b6fcd98956fd140bf43b8194d7be80fd5": "6dea65f42f4909940c5f2b31839cc6e4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/74d6e4cbe0840dd1daa3fb899944779f66d5a4": "55f6436ccc9ee0fca047c389d6fc7683",
".git/objects/11/c8a6910bc6c0328b27943152d8f414e118e661": "a21c306965ee72b248e1add56e7ba5dc",
".git/objects/7c/90a5472ce15a1470b83af19f10b5e48cdba371": "e0bbf9f611a932d1aade20a858a3c9c7",
".git/objects/16/e1bdafabbe66c0248591656680172b9258228b": "788a093166f17511a1fc53a42a0a26db",
".git/objects/1f/7360c67ba92e7cebd7e88a211c05fcbba7c20c": "2e03e43de2b506524acfcd1ff89c6300",
".git/objects/73/87f6326e6c32353d5313963e34233329889fe4": "4c07984ea30b232afe5055b1f6ce56ad",
".git/objects/17/2e2498827d740f3c06f41877ebdeba886246d3": "3aee8515401ed079566640f3c9b68133",
".git/objects/7b/b6575c2448d79a200b5e2b50b432547f343e5e": "a4bdfe85c894ef45eb95211e81d4a87c",
".git/objects/8f/032812de210cc23ec3261a3df5c4b4963b4f91": "a40556f75426b710fd819b3b96a7f374",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1d130596659acdcb2c0ad1d796527c30d1b4c3": "eecde22c9475cc7b8849e3b520a9a010",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/e092004700d839ccacf5267938ee41858c7a4e": "b62d6fe616a65a8db40fb3bd6d78bc6f",
".git/objects/21/78e6d7c032cb9d8a2606e391f48dea12c2754d": "29316f1eb3d0e96d35113ef3f0302472",
".git/objects/86/44e8b3a7d6b1b83c18320172f56be12388bd3b": "6c392002398a0a2bb9cdfb31f33df684",
".git/objects/86/05b346f07b94a60cae586fe0f1ba48ef60db6c": "b7d3fd551387cbd7624bb4c7ce1bdee6",
".git/objects/2f/7c81da8223b33393ed4badda20a58a74a55005": "dbf55c3e4179cf2641fd55cc4ee91593",
".git/objects/2f/f0495c0eafc99150ca3e837acb52818b636372": "9f2c071e109b3f0dca2cdeac7e030f94",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8a561767d782ed29595d8a3f69319512833b5e": "7a90b9e8ded1fb62c072afc9516beb5f",
".git/objects/07/1c388b694efde5e51d08a289e1a39a50a93f52": "0238964419ca961a5d6d3c5bcb4566c6",
".git/objects/38/2293d22f00426b3b463a38bbecb52dfb7e001a": "e464c6b15bc1be8177b6bab951038fe6",
".git/objects/6e/dbed51f8959d7678bf3b13915fa23d43666a51": "8f81d1fce722f46fe5b308bbacdafb78",
".git/objects/9a/7d45a1908a4d5ecad09bb39be55a9e7e6b6f05": "b3b134a9d893c59d48f94cb955347281",
".git/objects/5c/b62065d571ad64d29aba26d4d0b3953489aa03": "d13287d552069dd715aa344ee5cf8652",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/54/45425d7f68c7d2827a3be287158df7c687846f": "f6f3831a8bea366f5b84a21d35561e85",
".git/objects/98/098a714947e596a3479a5ecc5dd417e0e8cc98": "c35befb29549ec50cedd331a79d88a2d",
".git/objects/98/29e5699713cdbec86765ab6a5cd17dfbcf05e2": "4bf461b6afa010944bd5668d8c9cecba",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/cbdbd83a9b5f484d4cf19bc5161e2c6011c472": "73fd2b959d8c05edda99655212a3089c",
".git/objects/30/595072ca1015520dda6755872d1d097a81cf66": "a537e26cb8429c60ef109886181087d4",
".git/objects/5b/dce7fbba2ec733b053ec9135d239508bcd813e": "898987b892fa9d076131081850c1d74e",
".git/objects/37/6e76345aa389dfc4a44054894c262690c4819d": "df1e427f6adad4ec46317d41cc5ea32c",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/83f00c1e2fbb67fed5384034a2e922d065f585": "e636de67798651695463d69c23dad8e8",
".git/objects/63/d7b2cb00d6f7d4d05093cb15c52ab626636a39": "d16e094fabf2b47acb67d5a054481a70",
".git/objects/63/544f560e6a4a1ffd4f1e1337a539a7cfccad05": "54b414136f1cae0c530335d0dd02f878",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d3/e64b85f9f988d0e22c06889414cc1af6c643c0": "3518b1ae737ae73e7ec931409c406bd2",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/c762c1c89da43322ceacfaa3d01e8d949e94ce": "b8a6d2415e17f6d5525048f7b4f78fe0",
".git/objects/dc/195af27123266a8c0a3653f56e71db6d180341": "29457ca987c044d1659baf9d3403e384",
".git/objects/d5/499c4bd351ae772647855972ee344d14f44c84": "e5ba4505ab4a027dc62543ae5e8ffe6a",
".git/objects/aa/3d8f1d7fd8b9ccc026fbf738e53cb7cda0b737": "046f244b6e9d6ed3bad04f00b3fb76be",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d8031b5392778393bd342c12427516166bb730": "0f96b55ec49473d3e178568f493dadc3",
".git/objects/b7/454e509f73e233b438aafdaa4d968b52b38617": "39bc12b3e3acad0bdb95187bcce6518e",
".git/objects/db/8d7968e20516a5908814509284c7cd7ab549a6": "62d28c32af048b754d5e04fdf04a59fb",
".git/objects/a6/f56079765d432f136cf192e6a6eeb76c3383f8": "1e818f890fd3ebb7afb11120d8eda14d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/346c16f194e28fcf17620e1b9f7857f0a4e216": "0ab0b410c047fb446ea9eeedf4829287",
".git/objects/a1/fccdf7ed77e3499aad7a546d515b8c292994f7": "1354b811729daf980e978493efa1026a",
".git/objects/ef/2b561c21926baf6ba7a49171746d93b728c28c": "7a5028cc2756d2c43ecb3ae354df2676",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/ea/a59cc45f3a375e995ae671534aae7c151c733e": "c0c13b8d11ad86662abe79bffe4f87e4",
".git/objects/ea/86c2e28951df9c08dbc43a9e93cc23f3fec7a6": "b695e0e7d6ef872a20047eab2895c211",
".git/objects/ea/111c4b3a74e82cf76bc7296261b1a7e645c7e5": "a0c680bfc556cb0a9433d94c512f38bb",
".git/objects/e1/9bf3bfcf8b3024faf0d27de82c211b78d97706": "f440a65988750119a3b9404dbf8d5e1f",
".git/objects/e1/24a48c2a99286980545938349630f110bf1692": "7a4c0351e03bff2304e54adf794730d7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/77f9f991c94f6e966bae8547f2a26a494e9a98": "790ba04b3450f2247f13a6c73b36f150",
".git/objects/f0/f7cf348bed40d5ebf96220a1b8c88451eca22d": "669ecc07505e14d6615a4a5d52476983",
".git/objects/f7/af579b7c7f5522752a52245f0bb43de59728c7": "d7d84aec0ee0843bf4cd008c1761d2f3",
".git/objects/ff/0882ec98e0a819ff27501f641df028b69b77e2": "ab2e146149fa58eec08b7bd979819cb7",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c2/1a396b583cbc6d863e9ee1d20683b4489b8cbb": "e094ae64d692a53c163c279767ad6f5c",
".git/objects/e9/31a5a186ba99c5d4b1b79bf957bac942c7df8a": "0dcf4d503ca8b544271fedd36b906a3f",
".git/objects/f1/b405ec4c39438da927d245184b3c567489a9e5": "727b9ae57aaf5e29df93744073f09721",
".git/objects/e7/5935543bf12e3a4dfdd4be45b8e6b568a69e43": "73c42a579fb1632e664add45d4344d47",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/ce/56883a324842ce3b3db65f87406bd68856613c": "242122bac2b350e8c4c1b2b9d67af819",
".git/objects/e0/52e19a4e83765736161a67343edeb120cc4e3b": "82634c66c3e255d49ae76bd9d587ebac",
".git/objects/46/229585a9d4e2fc6dc087b98384211f4427bd20": "4302cf8a388a801d3cdbe150b44e89f0",
".git/objects/41/2a2b191f55c457449365950b34bcc35b4fb6b9": "817f25958299952fa6f3a3a40eb8f06a",
".git/objects/83/bc796db09d45c09db4daf4037acb8babc647da": "e3b3b0f36ce3ad0bc3bc6fb91d07bf33",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/f60cb148270d882b1bc8b351bb775f62dc778e": "9b8e0c99639d0a336528b14273f96b96",
".git/objects/1e/f68aa8c69036ca42a766034d885d1f0676124a": "db7a44d916ba0cf670ad412a4b53ddfb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/49/a7dcbe6c7a7c1ab3e1f907e3216c30ae6ac5eb": "f6986fbe49f40d9e69a23b6436887fe4",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2b/8314d6938aff9993b6087ca36eb12b5d717959": "1a38708d7d91a1216610292c142b5877",
".git/objects/2b/3bdc5780e9bf2b1b1a9994b52730ae168f75e0": "db7a7afe42b20de2c1859c88841c4168",
".git/objects/13/d96996f1fbc9c6f838794ff33e784da7f59c14": "8074a887cc27bf16ff00ce59d1d3c0f6",
".git/objects/13/5c1f2664272cec63d8237b9295c5cd99d2b71a": "3e743ab8ed60de29581a523c7b9e01a7",
".git/objects/7f/9153d28e53abad0ef0558c6a8a72fe36716137": "868356e001fc05d0390ba9ced73e2056",
".git/objects/14/bda5ebbfdc9d2d6bd06ef8bf2c5b4cf236bc48": "40d7cbb5563be60bce6ef0292b531813",
".git/objects/14/301da0ce414b9713620a5d6a5f8290f3e2316f": "56cfaf30107fbfb62d3e66a7e83762cb",
".git/objects/8e/0b99ef36f0d8a8beee26567845a3a7c063c94a": "1777fc0fb7586e3366a7ab853c365c44",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "090199368100c84404afe50b29750642",
".git/logs/refs/heads/master": "8453011a9309cc53699275e973c6cff5",
".git/logs/refs/heads/main": "86c65e30d3571b7883570bb0a30dce98",
".git/logs/refs/remotes/origin/main": "a9e094956b6e74b8a65a6728af123274",
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
".git/refs/heads/master": "c4761523d63815cb04e56654a6e6ae8c",
".git/refs/heads/main": "185868ca24bdfad6eb42f9100d2b12cd",
".git/refs/remotes/origin/main": "185868ca24bdfad6eb42f9100d2b12cd",
".git/index": "7b746542884433ca14dcf4ccf92586e9",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/FETCH_HEAD": "87724b496e636f02e193cd5b952b55a2",
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
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "2b87a65ff26f4eb5559aad1402936c4a",
".idea/workspace.xml": "9c9ce5d0bb98fb371f6bebe36f2bc278",
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

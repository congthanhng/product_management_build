'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8e8143e4de82ab7715c863a3c4adf223",
"index.html": "a918ca8ad789547b30eff72ee159fe8a",
"/": "a918ca8ad789547b30eff72ee159fe8a",
"main.dart.js": "8841391df5e2c6f52aaa619e54be134c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eb5e1565f06889e6ed9fe1887cd3e34",
".git/config": "0324836a7f243d63db714268278558d9",
".git/objects/61/d251812d196e3b936a36cd616b9f8c7d6b955b": "741e989ac4e5245d70453d6533fa236d",
".git/objects/59/e864ab94fdc972fd85b06d81319f4e01f0da81": "8167c60354af00dbfba958491b17f5d8",
".git/objects/92/798712384ed7dc41f63357b9c57c534a7997e6": "35a9eb412d4b0411733039a73a974482",
".git/objects/66/932d079f7560221d8237525fa93ab39b524498": "919bd3d889f0df2bdc2955a5a00ff0a6",
".git/objects/66/094384a3ab3699e9c7774514f1c012b7bfd9a3": "be6ef60710d2c164669c5dd164946916",
".git/objects/66/188d1ae509eb9a3e60afab2028b8c3fd8378bb": "1c22ed92e37083caae120a2a840bfa8f",
".git/objects/3e/e5000148e1fca1034c9e4a498e3e206aa98f40": "2c03e78e040dc654b0abd5e443f791a6",
".git/objects/57/0ea20a8e38ae3189249d9e9b0417d5efcf1a8f": "e91194077f91bc0322d786564fcad607",
".git/objects/6f/eab08b4b1620fc2aa47d940b1266e1e69cae08": "f98363201bf3850249a4ba9206c6f6b0",
".git/objects/9e/1c863ae1587d13f1b555d2da2860bc51022ab1": "550db0adb5e19cc2f95da8af1ef41b4b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/b9979a3c2537297214d0f7ce5300e06f797bc6": "8a107677482e9cf069d8ba748e13998c",
".git/objects/69/9ec6b950d4b0b0386ddd7d5b527d07d6cd4675": "b4b16733be8a58fc6770a839a5a61941",
".git/objects/69/ac185ef61abe335ce1057b6c26590536f40100": "c3b4a283a12e50c4e57f2f3a672b32a3",
".git/objects/3c/0f310d55e8a7b844cc15f7ea13db48c108c57e": "d47dc40c89d581023d7071e793efb54e",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/69ce4149bcb85b3d71704a87048a91f837ff66": "babbcf55cea93060d48e14dcc0103de0",
".git/objects/58/2d011abfc1295045264b5b8aa13e59dcefa096": "6da263551daa5615c159bb5b878ad38e",
".git/objects/93/520304098ccaf040ed62eeffbcbf13a86379a3": "dbe943eaa4ef130acd4e2c5abef47a2d",
".git/objects/93/7b6d2f819eb52795b35c9dd1b5ec57f73459d3": "d13e8676405d278d88e0357ccb1b1e7c",
".git/objects/94/bcf553999f7a4fa82e25b0a08905b2019df642": "57debc70f1eb677d962da6878e5f6370",
".git/objects/94/f778883981fb14e4e75a21ddaa5e59a1921d87": "842b8e6e4e68ef9776d1a14e090452a9",
".git/objects/94/2354434fb93087c3efade5fa81b3d0b825f706": "0be3060576719419ebcb23946772ad46",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/5a/3ba610bfd5764bd265bcb8fee0ee1da5e812a5": "c7ac57efc63bad60cf36645dcd9f2e3e",
".git/objects/5f/3402abbf7051ffc6628438186a9257b06378c6": "dfb28b40b5468815fa6c8cf8b514c0a9",
".git/objects/33/35b029a079e6777d68bed4cd9775ed414a7463": "6f9cbafc704b3df56425d665ebad3e78",
".git/objects/9c/86f4c0da2136336bf97d5f0dc9d2c9660de7ce": "b2201fe0f8c0a3b524bf79ce0b7edd79",
".git/objects/02/f27aa7eee7a38f83454e048c0989b873f19da6": "d791bc637f7a88dcd62aab06d2b50e96",
".git/objects/02/a2f91583d0f63d823a937b393501b7e0c18320": "6835df4b55f43509647d6b44716e138b",
".git/objects/a3/b70ac84dac495a97e789611bae044e4f2dcc7f": "ac982b80b7b0355e178999eee54dbf3f",
".git/objects/b5/34b00d748fe94a7e2b780112b07ef9022336a9": "ed54d0f1ac4805b8080a6858e770a629",
".git/objects/d9/0c2ea33654462ef1b0ff19e588de6552e477f3": "d203142fd9c77cd5eebe7c26c4a8e792",
".git/objects/ac/c62778c72fb2802f95186179c2e678efa58d57": "d73d161a3d6eb5a6116afe2ffef071a8",
".git/objects/ad/2583b95a2a42b2592e946f19013bfdafae5339": "df6172544ed685c2ad849e654f1291fb",
".git/objects/ad/e92fb3aa8c553b6b9bac06514878acee7b045a": "90e7400d26404a0bdd1f9dc7bd24377a",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/5f827ff03afd5cd36739830bddbc3e4e11ab23": "29b429cf008c5c135e61592188f07974",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/9f1a4bf7cade23bdcfee498f0cd2632dd989d5": "68d399e5c521e06cbeeac691c712b171",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/0883f12f639bc144e130ae768dcce6a164e7e3": "6931e902404952a900efa7ed3a367def",
".git/objects/a2/f58646306f3b8e8fd69251bb25e2b23cdb40df": "d0fed937b0f88e5b60d1230608077931",
".git/objects/a5/77ca926bce8df78823556f4ac425d5f2304bfc": "948d8ff0b0c7d0a0888cf0988a857486",
".git/objects/a5/0c61e013545974248a0cd603be6c7ce7bb987c": "d6a64b414506122ebf0195cc06f322e4",
".git/objects/bd/72c0b8c3bd4d11f225375fad2dce0a6452f20e": "0664beee8cf3f08a13497ff69736e0b7",
".git/objects/d1/f37436aaef31b24b9a30d08257f65cc97f5871": "70f532f47661843639f75b2d69e88370",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/e3babf02cf0b6254609dc46e5056b62562358f": "77bed2b6500aec3364eb0984cf310f1e",
".git/objects/ab/34022e0f1d9164ef0efb1da7aed2e078d25bc0": "a82b26f7f4e26fe66f22f2f08bd30d19",
".git/objects/e2/1b00ebf93d5615c6ac694c3f28a5a497ccdc51": "64959ef28ee5bbf1acc7e5e52c05fb2a",
".git/objects/f3/adc271ac9b376b58d852bbe93a4cc049f48c84": "b80fc0201e92e3cb04be14f6e714a403",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d911bf1c4173c88e0d09fd0ae41a66836d3256": "9b70bcdcdb3634e8835a5a3a7689d929",
".git/objects/c7/68b9efcab5b9168ef2543f9c03b4d006efb930": "88409fa7fe887c275b4b3f48a7ac923b",
".git/objects/ee/e45ba97c0ff8a2304c14a23874170105867c0a": "4a45053c3102a273219b7e7682995b85",
".git/objects/ee/27c078b83879655a3bd03c6c8d4cda07b0ff97": "379ab872244ece904963caade493520e",
".git/objects/fd/cfcbce0f50a61fe8ac1a734a06e0f2f196a5c7": "809a3b970a5419db5642b2bcde456ec8",
".git/objects/f5/34e1b57afc39f6e521d035dadda5579bde6e49": "e6ad8408da4d29e2852a1d358b252160",
".git/objects/cf/7f4700b82a8f3d205df7b91864c433934dd648": "b12222c30fc8a658aa29d44418bd0f34",
".git/objects/c8/36337ff83da7bfad084a7ae5482166f3bacc6c": "ed020a1721aee2a904b3ed0fb9a5f650",
".git/objects/fb/97879b389fc9de735893eedf0a7a24e4b10dd1": "7109d1611093f615a67fd52ed10d08b3",
".git/objects/ec/982d5d78875b1365b586d6e7db7b33677f3c41": "8e25f5ac298dce82569b954f15f67fbd",
".git/objects/ec/675b03138982a10013e12b8f0be5faa59fe942": "eb8ed9139145cccb06d6e9c893039b10",
".git/objects/4e/782161488f96b85f525b15b1b12a9f2d1c1f55": "67d228df785492a65612ac3dcb443599",
".git/objects/20/8419aa3744503e85f884f6ce131efb863903b6": "860be9d60871f8492b05c1a9e9d3ac66",
".git/objects/20/38894b6fcd98956fd140bf43b8194d7be80fd5": "6dea65f42f4909940c5f2b31839cc6e4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/74d6e4cbe0840dd1daa3fb899944779f66d5a4": "55f6436ccc9ee0fca047c389d6fc7683",
".git/objects/18/af01aa42057af28268dca628ecee0e107ecbc4": "4096a4c51cc345dbd75b01c55b6c192a",
".git/objects/18/9c5235d0c9e73c9d0bc824c9ab7e6eb3342370": "5335440854117cfc8e942d133839fd7f",
".git/objects/11/c8a6910bc6c0328b27943152d8f414e118e661": "a21c306965ee72b248e1add56e7ba5dc",
".git/objects/7d/3fc7fdc33e9b3f6e836c4ba1d7b4b4cd98df22": "d612ea5a3ca2c1db41ec52c9129c4f6d",
".git/objects/7d/d17e0ea37b24dfe674c45df07635928bef1edf": "338bd2bbef4c1953bc3153a13468b83f",
".git/objects/7c/90a5472ce15a1470b83af19f10b5e48cdba371": "e0bbf9f611a932d1aade20a858a3c9c7",
".git/objects/16/e1bdafabbe66c0248591656680172b9258228b": "788a093166f17511a1fc53a42a0a26db",
".git/objects/89/1e8ce286f8e7b270801ddb93f7081fa2cd34a1": "359d80a1adb0800d08010f182e5ae494",
".git/objects/1f/7360c67ba92e7cebd7e88a211c05fcbba7c20c": "2e03e43de2b506524acfcd1ff89c6300",
".git/objects/73/87f6326e6c32353d5313963e34233329889fe4": "4c07984ea30b232afe5055b1f6ce56ad",
".git/objects/87/2b9d282c5494174404c8493eafaea60fa7145d": "33bc27455528605043cfca3e04937ead",
".git/objects/1a/64a686fa2e0c7c3550fff94460ebd6f1727319": "8a8eb33ed35a7c8f68af1c27740b68eb",
".git/objects/28/0e234d2e2dc0807e003aa551a3e9d49cacfa21": "2c5790781c39bfc5972aa047fb13eddf",
".git/objects/17/2e2498827d740f3c06f41877ebdeba886246d3": "3aee8515401ed079566640f3c9b68133",
".git/objects/7b/b6575c2448d79a200b5e2b50b432547f343e5e": "a4bdfe85c894ef45eb95211e81d4a87c",
".git/objects/7b/11e8255eef1f5f72d0ff53f59b51b285f8f241": "246d22bd4db4de5977bb761bd31be10c",
".git/objects/8f/032812de210cc23ec3261a3df5c4b4963b4f91": "a40556f75426b710fd819b3b96a7f374",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1d130596659acdcb2c0ad1d796527c30d1b4c3": "eecde22c9475cc7b8849e3b520a9a010",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/e092004700d839ccacf5267938ee41858c7a4e": "b62d6fe616a65a8db40fb3bd6d78bc6f",
".git/objects/21/78e6d7c032cb9d8a2606e391f48dea12c2754d": "29316f1eb3d0e96d35113ef3f0302472",
".git/objects/86/44e8b3a7d6b1b83c18320172f56be12388bd3b": "6c392002398a0a2bb9cdfb31f33df684",
".git/objects/86/05b346f07b94a60cae586fe0f1ba48ef60db6c": "b7d3fd551387cbd7624bb4c7ce1bdee6",
".git/objects/86/db3a56df12fccc118391ef67f3dd2d53811584": "54419fca72c0d711c394a0ac3082d03c",
".git/objects/72/caf5afaf6606985f30aa6c14811efd45981135": "40002b735f403cd70df39eca947861f3",
".git/objects/2f/7c81da8223b33393ed4badda20a58a74a55005": "dbf55c3e4179cf2641fd55cc4ee91593",
".git/objects/2f/f0495c0eafc99150ca3e837acb52818b636372": "9f2c071e109b3f0dca2cdeac7e030f94",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/990c19a8e58c9f834248fe8603037eafbad928": "181347d105a0059ef9be75123365f8b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8a561767d782ed29595d8a3f69319512833b5e": "7a90b9e8ded1fb62c072afc9516beb5f",
".git/objects/07/1c388b694efde5e51d08a289e1a39a50a93f52": "0238964419ca961a5d6d3c5bcb4566c6",
".git/objects/07/b4a524d2fa724fd0f422ee1d78adde627487c5": "93f137020f24d94370da674037d57f72",
".git/objects/38/2293d22f00426b3b463a38bbecb52dfb7e001a": "e464c6b15bc1be8177b6bab951038fe6",
".git/objects/6e/dbed51f8959d7678bf3b13915fa23d43666a51": "8f81d1fce722f46fe5b308bbacdafb78",
".git/objects/6e/7769738e46cf334415d85e5ca0f8e169324505": "96fca3151f3385d88355bd4a96ba69f5",
".git/objects/9a/7d45a1908a4d5ecad09bb39be55a9e7e6b6f05": "b3b134a9d893c59d48f94cb955347281",
".git/objects/9a/ea06823d845f9f89541decc339d463195cce43": "6df06988a1595ef93aac6616a08728fb",
".git/objects/5c/b62065d571ad64d29aba26d4d0b3953489aa03": "d13287d552069dd715aa344ee5cf8652",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/576930a3241d44c98cc9d00175d5578f01d10c": "5a0aa5d10730247f173bfcce1989fb95",
".git/objects/5d/e22af5e4255c23bd366afa222fc1138316769a": "f063468515bf9f065392f2f29e3e236f",
".git/objects/96/83e8b86e024ee6dd1e57655568a8d9981364b1": "04a563bf75769aeb5df04e37d5bfe1bf",
".git/objects/54/45425d7f68c7d2827a3be287158df7c687846f": "f6f3831a8bea366f5b84a21d35561e85",
".git/objects/98/098a714947e596a3479a5ecc5dd417e0e8cc98": "c35befb29549ec50cedd331a79d88a2d",
".git/objects/98/29e5699713cdbec86765ab6a5cd17dfbcf05e2": "4bf461b6afa010944bd5668d8c9cecba",
".git/objects/53/ed32f93fab36fe61c810f3f8b61fece1e3b81c": "680a784cb6df2eabd4911b8b6db9a0d9",
".git/objects/53/e347a2a38a02c1f39de2bb31a38d28af709892": "b13d7ab89a0e0b09c1471b5d147738e0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/cbdbd83a9b5f484d4cf19bc5161e2c6011c472": "73fd2b959d8c05edda99655212a3089c",
".git/objects/3f/7f05ff78fd13242eef0e5af616bc4e423ffb11": "879c6c681ffeb8480470ba774afb35cc",
".git/objects/30/595072ca1015520dda6755872d1d097a81cf66": "a537e26cb8429c60ef109886181087d4",
".git/objects/5b/e649d85a6525c71b57c9d85e45d8701a3f0709": "a6f1714c5683466587832cd40b4914c5",
".git/objects/5b/dce7fbba2ec733b053ec9135d239508bcd813e": "898987b892fa9d076131081850c1d74e",
".git/objects/37/6e76345aa389dfc4a44054894c262690c4819d": "df1e427f6adad4ec46317d41cc5ea32c",
".git/objects/6d/588908b6f8ae12cefed20c970be65cf46dd034": "bc9b56570482a1dced940f0328bc16bf",
".git/objects/01/18c8343a0574f83600204e3171d8bc7524b71f": "82ce1b5eac3a5a94b8ad40ae523a8f63",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/83f00c1e2fbb67fed5384034a2e922d065f585": "e636de67798651695463d69c23dad8e8",
".git/objects/55/c7891f94550b1e1785cec99c6ca78954a38bc2": "fe851dea693a49d083a72a1febae721f",
".git/objects/55/e83f79e9733bd7c741b9c1f9197bfd8719b510": "b5abd8149e037a507392eb56eeb9e523",
".git/objects/63/d7b2cb00d6f7d4d05093cb15c52ab626636a39": "d16e094fabf2b47acb67d5a054481a70",
".git/objects/63/544f560e6a4a1ffd4f1e1337a539a7cfccad05": "54b414136f1cae0c530335d0dd02f878",
".git/objects/0f/0804033df2adc1f2b44eb581a0c2cc404a446b": "b653ff05d07734e2fe0cc90aa315f01b",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d3/e64b85f9f988d0e22c06889414cc1af6c643c0": "3518b1ae737ae73e7ec931409c406bd2",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/bfc271c8ce91d5f9502b11cb08dbff6d5d0a80": "0b45be3acd999801953c95352b0bc077",
".git/objects/b8/c762c1c89da43322ceacfaa3d01e8d949e94ce": "b8a6d2415e17f6d5525048f7b4f78fe0",
".git/objects/dc/195af27123266a8c0a3653f56e71db6d180341": "29457ca987c044d1659baf9d3403e384",
".git/objects/b6/1b4c1a85298421d0c1552e2091d2246c8f8b0d": "79f19caa526ee0ea3099157f98e7482c",
".git/objects/a9/4282166c19a2372133f6543ec2c501b90886ac": "6e32fa07757f2d08d66957306baba212",
".git/objects/d5/499c4bd351ae772647855972ee344d14f44c84": "e5ba4505ab4a027dc62543ae5e8ffe6a",
".git/objects/aa/3d8f1d7fd8b9ccc026fbf738e53cb7cda0b737": "046f244b6e9d6ed3bad04f00b3fb76be",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d8031b5392778393bd342c12427516166bb730": "0f96b55ec49473d3e178568f493dadc3",
".git/objects/b7/6eb828bc2e835f0ea0048185bc51d76ef6513b": "6fd89371b83ce59ca33e80adc69c997a",
".git/objects/b7/454e509f73e233b438aafdaa4d968b52b38617": "39bc12b3e3acad0bdb95187bcce6518e",
".git/objects/b7/bcbb593de314b1f517d30e1a7c84f780904e28": "49077f5c0f6432c28e06c4e82feeffab",
".git/objects/db/8d7968e20516a5908814509284c7cd7ab549a6": "62d28c32af048b754d5e04fdf04a59fb",
".git/objects/a6/f56079765d432f136cf192e6a6eeb76c3383f8": "1e818f890fd3ebb7afb11120d8eda14d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/346c16f194e28fcf17620e1b9f7857f0a4e216": "0ab0b410c047fb446ea9eeedf4829287",
".git/objects/a1/fccdf7ed77e3499aad7a546d515b8c292994f7": "1354b811729daf980e978493efa1026a",
".git/objects/a1/2c63e2ad2e3d39c35b2fb9211e5780ad86e4a5": "f435646d1c58c6d3236f10b2b51b50b3",
".git/objects/a1/7e1cbe0983c3fff4d90108f26b4191b6366459": "17611ff828ca0f2ada8864682a346178",
".git/objects/ef/2b561c21926baf6ba7a49171746d93b728c28c": "7a5028cc2756d2c43ecb3ae354df2676",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/ea/a59cc45f3a375e995ae671534aae7c151c733e": "c0c13b8d11ad86662abe79bffe4f87e4",
".git/objects/ea/86c2e28951df9c08dbc43a9e93cc23f3fec7a6": "b695e0e7d6ef872a20047eab2895c211",
".git/objects/ea/111c4b3a74e82cf76bc7296261b1a7e645c7e5": "a0c680bfc556cb0a9433d94c512f38bb",
".git/objects/e1/9bf3bfcf8b3024faf0d27de82c211b78d97706": "f440a65988750119a3b9404dbf8d5e1f",
".git/objects/e1/24a48c2a99286980545938349630f110bf1692": "7a4c0351e03bff2304e54adf794730d7",
".git/objects/e1/a6b05a9a75ea6770b54a4aa6544127af220a18": "3e2fadc9cc9579e744d6d000bd2484cc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/77f9f991c94f6e966bae8547f2a26a494e9a98": "790ba04b3450f2247f13a6c73b36f150",
".git/objects/f0/f7cf348bed40d5ebf96220a1b8c88451eca22d": "669ecc07505e14d6615a4a5d52476983",
".git/objects/f7/af579b7c7f5522752a52245f0bb43de59728c7": "d7d84aec0ee0843bf4cd008c1761d2f3",
".git/objects/ff/0882ec98e0a819ff27501f641df028b69b77e2": "ab2e146149fa58eec08b7bd979819cb7",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c2/1a396b583cbc6d863e9ee1d20683b4489b8cbb": "e094ae64d692a53c163c279767ad6f5c",
".git/objects/e9/31a5a186ba99c5d4b1b79bf957bac942c7df8a": "0dcf4d503ca8b544271fedd36b906a3f",
".git/objects/f1/5f49e946598289a4f18103da9a91e9380d08f5": "9c99735d69e2a6f53fee8bf8e462079f",
".git/objects/f1/b405ec4c39438da927d245184b3c567489a9e5": "727b9ae57aaf5e29df93744073f09721",
".git/objects/e7/52a46b0727b37b767da2e739400ebd34a710c9": "f89c9bcb62e61bd19f6b4df76c071fc7",
".git/objects/e7/5935543bf12e3a4dfdd4be45b8e6b568a69e43": "73c42a579fb1632e664add45d4344d47",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/f8/767e0c35130c8c05a255b0782dbfea18d3aed8": "64378d1a3bfd52601de3f54117b22983",
".git/objects/ce/56883a324842ce3b3db65f87406bd68856613c": "242122bac2b350e8c4c1b2b9d67af819",
".git/objects/e0/52e19a4e83765736161a67343edeb120cc4e3b": "82634c66c3e255d49ae76bd9d587ebac",
".git/objects/46/fbf22d32f5ade9b32d2b023a0e3b3c6b60105b": "8e91b974839e005c509b2b4e701797bd",
".git/objects/46/229585a9d4e2fc6dc087b98384211f4427bd20": "4302cf8a388a801d3cdbe150b44e89f0",
".git/objects/2d/15b544116124c631733892947f29b19f3a75ec": "b03c0ec1bb95e4335736c52eac4d8c80",
".git/objects/41/2a2b191f55c457449365950b34bcc35b4fb6b9": "817f25958299952fa6f3a3a40eb8f06a",
".git/objects/83/bc796db09d45c09db4daf4037acb8babc647da": "e3b3b0f36ce3ad0bc3bc6fb91d07bf33",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/f60cb148270d882b1bc8b351bb775f62dc778e": "9b8e0c99639d0a336528b14273f96b96",
".git/objects/1e/f68aa8c69036ca42a766034d885d1f0676124a": "db7a44d916ba0cf670ad412a4b53ddfb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/1d/a39374366027678de852553bb058cb247b89e3": "3d6c8be26408ec5da98a084f89b18f33",
".git/objects/49/a7dcbe6c7a7c1ab3e1f907e3216c30ae6ac5eb": "f6986fbe49f40d9e69a23b6436887fe4",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2b/8314d6938aff9993b6087ca36eb12b5d717959": "1a38708d7d91a1216610292c142b5877",
".git/objects/2b/3bdc5780e9bf2b1b1a9994b52730ae168f75e0": "db7a7afe42b20de2c1859c88841c4168",
".git/objects/13/f2ca2709714b4b048717231c75d2530ae2902b": "87906836c70779923c9e7a61f66ee3fe",
".git/objects/13/5b9aeb38ccfed1ca2d27027240e4b6f576fbce": "518feef526f87329fd7138ea8eccef54",
".git/objects/13/d96996f1fbc9c6f838794ff33e784da7f59c14": "8074a887cc27bf16ff00ce59d1d3c0f6",
".git/objects/13/5c1f2664272cec63d8237b9295c5cd99d2b71a": "3e743ab8ed60de29581a523c7b9e01a7",
".git/objects/7f/9153d28e53abad0ef0558c6a8a72fe36716137": "868356e001fc05d0390ba9ced73e2056",
".git/objects/14/bda5ebbfdc9d2d6bd06ef8bf2c5b4cf236bc48": "40d7cbb5563be60bce6ef0292b531813",
".git/objects/14/301da0ce414b9713620a5d6a5f8290f3e2316f": "56cfaf30107fbfb62d3e66a7e83762cb",
".git/objects/8e/0b99ef36f0d8a8beee26567845a3a7c063c94a": "1777fc0fb7586e3366a7ab853c365c44",
".git/objects/8e/0ff1249da50fdc89c341da152e0f23de79423b": "2f0294bb466f3b80d336d505a835278a",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74105d0f94c8cbf59f1a2d6a26a6ce59",
".git/logs/refs/heads/web": "958cdaa8ab73c73d11724f836e7afed3",
".git/logs/refs/heads/master": "8453011a9309cc53699275e973c6cff5",
".git/logs/refs/heads/main": "5a679cfd428e7a086931c43c52e27a06",
".git/logs/refs/remotes/origin/web": "6924916fba7bde8ba9ba47e012ec84c8",
".git/logs/refs/remotes/origin/main": "ba2a6ec7be0a0c50ce8e4f33c24ff333",
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
".git/refs/heads/web": "a6ba03f041098a7c463c82388ba2f61e",
".git/refs/heads/master": "c4761523d63815cb04e56654a6e6ae8c",
".git/refs/heads/main": "4c14fdb617ddbe12e3c6b9d5f1164e7d",
".git/refs/remotes/origin/web": "a6ba03f041098a7c463c82388ba2f61e",
".git/refs/remotes/origin/main": "4c14fdb617ddbe12e3c6b9d5f1164e7d",
".git/index": "ee7505e89b17fbc283bb7ee86b6d7947",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "4199248d651e7a8f5225d224844e8930",
"assets/AssetManifest.json": "a1d5b2fb3145797290894e7a6e436d5b",
"assets/NOTICES": "7b07dd21b1a9be8c2124ae35e3625db5",
"assets/FontManifest.json": "ba7b8f713093495517fbc07c67242348",
"assets/AssetManifest.bin.json": "f57a39227f7334755812d228be090b42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "629fee4e3ab2e7e743a84c9f87fc05c1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "940886d615ffc0424e2beab4c0302b94",
"assets/fonts/MaterialIcons-Regular.otf": "d16702bcd4cdc88d3352d66ca68d7d7a",
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
".idea/workspace.xml": "146ad71a2579b57fe76e0ccb950769fc",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/shelf/Uncommitted_changes_before_Checkout_at_04_12_2023__01_50__Changes_.xml": "50c74772e5280ef713d47ee34fdb35f1",
".idea/shelf/Uncommitted_changes_before_Checkout_at_04_12_2023,_01_50_%5BChanges%5D/shelved.patch": "197c8c83380da03a7b6372c320d7992c",
".idea/shelf/Uncommitted_changes_before_Checkout_at_04_12_2023,_01_50_%5BChanges%5D/MaterialIcons-Regular.otf": "8bb9cb5fb299e0f2a5c00a23b8ec1ae0",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb"};
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

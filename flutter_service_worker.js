'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"logo_with_text.png": "3638d523f7a6170f55f90853a0e960b0",
"flutter_bootstrap.js": "b47b4c7bb5e63515497c67bd956d373b",
"version.json": "477c157dafbf9cba0808005c13f33fde",
"index.html": "cb7c131355a7aaf0cfd8c362cbb0514b",
"/": "cb7c131355a7aaf0cfd8c362cbb0514b",
"main.dart.js": "71d95210fa5628f06dfa1c34086707d9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"mini_logo.png": "ef4e93443ea70ea5786f430634d83789",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-mini.png": "681f6e526ff1665f66f92096dc883c26",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1466926ef9b2c4fb6d04db757aca47b4",
".git/REBASE_HEAD": "23e29d4dfed352332e9404e8fc8f9519",
".git/ORIG_HEAD": "7ce3b0b9d20a38b51824e28e50841556",
".git/config": "e1a72f697e77494222b33a65bdeb6ab9",
".git/objects/92/40901fdc1b45c38ebd3b50e008e30b98444fcb": "0689d9523c5a5e4ce11270e5723837d2",
".git/objects/66/374e757cba84f22e40f844ec7425aca67fafd2": "398a66377ec3748833f74fdc97ac2aff",
".git/objects/66/49fc83a22c6df8dd1b572baff8bd2ca0fe518b": "bf61e674b64e3fe0e933b0de2e737e55",
".git/objects/3e/e5000148e1fca1034c9e4a498e3e206aa98f40": "2c03e78e040dc654b0abd5e443f791a6",
".git/objects/3b/7f75a4b0b97943603301ea6c672fd4cd79b9a9": "ed7aed444856a2f3c0d4b7d3de423f6f",
".git/objects/3b/ca27312b61dabbefac244c64c02a915d86931f": "bc2797b2245b787a70e4d20825ec1171",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/40c877a1d32d97d12eaf6126b36e4eabbfa3d3": "e4adfce0803e5bc74cffca2cf25f63e5",
".git/objects/9b/544186de348ddf62da4538a1d64effb0178ea6": "e7bfd9a9811d84fbf9dbe5844735ad90",
".git/objects/04/b9979a3c2537297214d0f7ce5300e06f797bc6": "8a107677482e9cf069d8ba748e13998c",
".git/objects/6a/ac282b90a573da84838c636e44b78b1cb1acb0": "4c10b85877715f18894f622aed440f7d",
".git/objects/32/9ece2283815712980b4d66de0fe5572492672b": "e69963bda5312bbd7a740faa25b287f3",
".git/objects/35/3c38688aa4da3915e4f099835375cbff6fe4e3": "a61bb9b3f441f5ec3dafb967c1fcb0de",
".git/objects/69/ac185ef61abe335ce1057b6c26590536f40100": "c3b4a283a12e50c4e57f2f3a672b32a3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/947132cf619ec34350c0c72c886f871aad5053": "5938c5f4ef6888dc355a2f53cf045d54",
".git/objects/0b/83e09c3ab5330ced2e2a2b7fa3616e853266a8": "85ebca7b2c0ddf5b8cd8cc2303e592fa",
".git/objects/93/4477388326d9741e8c33d36726df5f99906810": "f1b047c5e80f63e38001914b7a8b3bd8",
".git/objects/93/3f8dfafef5366b1d87d5e2e2f00418a57c4591": "41f805b336c93f02a8558d4fa3c1a746",
".git/objects/94/bcf553999f7a4fa82e25b0a08905b2019df642": "57debc70f1eb677d962da6878e5f6370",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/94/f778883981fb14e4e75a21ddaa5e59a1921d87": "842b8e6e4e68ef9776d1a14e090452a9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/2354434fb93087c3efade5fa81b3d0b825f706": "0be3060576719419ebcb23946772ad46",
".git/objects/5a/8bb14d2e0bc3a1f950b30ec23fe09a6a72a92b": "099a450ce11dc00e3e4ff474a659d630",
".git/objects/33/b4832a2768bdc30dae838764d7d1cddeeac387": "7bc8ef42bf30aebdb358f43e214796c5",
".git/objects/33/35b029a079e6777d68bed4cd9775ed414a7463": "6f9cbafc704b3df56425d665ebad3e78",
".git/objects/9d/c55c97226b2bd6193b35f7967e451cb8a36b47": "aa6c06d17bbd2037f02a891c9f816113",
".git/objects/02/b915b85f9fb22b6e51491729131d93c18d906e": "9043fb6fc72b6a3ca5dcd185bb895ff0",
".git/objects/a4/eb5696a3a2d9b2d492785c3e3c60afae83d06d": "6d1a4a7ea57afd8922d1dfa2d677b0d3",
".git/objects/a3/8e01fc8b00f9de78b0fbf4c16fe98d30bb0a38": "1fc6326a05176165e15af99486750736",
".git/objects/d9/52b3721f298a93c2b9a5c2a9ebeb5cc0187c92": "25c7ad85ceeddc13bf1a7273c0b76418",
".git/objects/ac/c62778c72fb2802f95186179c2e678efa58d57": "d73d161a3d6eb5a6116afe2ffef071a8",
".git/objects/d0/dab388356bbbce6becf73fd39f22d3038c0344": "eba98c396572d55a4189c4d83b272e54",
".git/objects/d0/8cd1061fb7dfbebad4f837dd85dcf037400b83": "a753c6aa40461ff5d1e81430cdc2355e",
".git/objects/b3/9f1a4bf7cade23bdcfee498f0cd2632dd989d5": "68d399e5c521e06cbeeac691c712b171",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/da/b492ba8381014bbd68a414fa0fc55a14f00948": "6d20d641d22e3929bfd0473b84bec701",
".git/objects/b4/5f79551f7262d892efb8999627e6ee4c563360": "9474112e1d0ec1591651bab675f1438b",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/f58646306f3b8e8fd69251bb25e2b23cdb40df": "d0fed937b0f88e5b60d1230608077931",
".git/objects/bd/72c0b8c3bd4d11f225375fad2dce0a6452f20e": "0664beee8cf3f08a13497ff69736e0b7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/a064184a26cc78c81b4e5581fb4dd653be1816": "fdeb850b2ec4e8886c53f2e5869e2047",
".git/objects/d8/d3754fe18c252e1853e0016c45b55f6cd49510": "3cb20f28a067b3e98afc2fbbf7058240",
".git/objects/f4/9302c6a7a418508132fa9cc85f1e97e31bf7e0": "b98d92fca913206f283ec515adf1f4ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d1043980974169442d5b142e34b8ba978cef19": "72975537b12abcbbc3240fd9dd7800f0",
".git/objects/eb/d911bf1c4173c88e0d09fd0ae41a66836d3256": "9b70bcdcdb3634e8835a5a3a7689d929",
".git/objects/eb/dac1058851fed01bceaaf5717805e1c3ec8442": "29c99d129aabc81ba51152383b0cca5b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ee/e45ba97c0ff8a2304c14a23874170105867c0a": "4a45053c3102a273219b7e7682995b85",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/37aed1f44fdce05673b86bd3339841fdadc952": "b5e0c5db64145f17e7e30b7ebbe69c0c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c0951b106212a1d03cd5274c936bef494c0311": "bc96025978e812db0f93b0a0bd61bec5",
".git/objects/f5/1ad470e534379924e8f354ae5b6a6aa90e7595": "2e883e3ec2a55a44d49289e478e230f2",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/34e1b57afc39f6e521d035dadda5579bde6e49": "e6ad8408da4d29e2852a1d358b252160",
".git/objects/ca/03f2b639e8b6f1b61aafde8be0daa56ecd456b": "c913986666a2b2ccb5cd090b23696864",
".git/objects/e4/945fbcb1fffb779e86a0eab53e05af89aca8cc": "e6fe1a14efec75baeccbc1942c5a7cbd",
".git/objects/e4/e9496b2beb74025256899b8304cd20160ea8ec": "8c82f947722312c4803542a4354ea5b5",
".git/objects/fe/0665659f39ee9e2482911f308650cfc12d541f": "829a77198eaf975a2e14b84d969a9e9f",
".git/objects/fe/435efb21a659f8377625dc7295c072175afd94": "de07cc0f611f7b8882e84034d9cab1f4",
".git/objects/fb/97879b389fc9de735893eedf0a7a24e4b10dd1": "7109d1611093f615a67fd52ed10d08b3",
".git/objects/c1/26d755d8ef301520891003ee3ec086d14e9c78": "8e8456cf638851c94ae3d1a7e7b91568",
".git/objects/c6/23a523039a99f8e33985fa4cfb62a538c26cd0": "3c7c6ee1e70009b80a634228c4de66c0",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/38894b6fcd98956fd140bf43b8194d7be80fd5": "6dea65f42f4909940c5f2b31839cc6e4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/74d6e4cbe0840dd1daa3fb899944779f66d5a4": "55f6436ccc9ee0fca047c389d6fc7683",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/pack/tmp_pack_dcgdYo": "5f9622d9273428d8627e162c69669546",
".git/objects/pack/pack-7a67c6a28318473b46c3b9b4f0b780b03f6ed5aa.pack": "3651333b4b974e94342d971812be6f12",
".git/objects/pack/pack-7a67c6a28318473b46c3b9b4f0b780b03f6ed5aa.idx": "b6f19faa6bf5852b581b6a9948611f16",
".git/objects/11/b53fbf9e6e204a95a2c93ff8eef48ec002589b": "310b229e1d536977e12587fc10a3afec",
".git/objects/11/2d113213126f3dd562a610788af82756b32d44": "df1010db564ed254d5d7694dcc1349c0",
".git/objects/7d/9dc0b6c8d2de011ab59124e37fbe31f759e5e1": "2c2d59938b2caf3a52f11beb3d7c984c",
".git/objects/7d/c124965d28403ec2545a24d7d1cd1fec1f57d8": "ba77ccaaec1f47b687d3709923541d7a",
".git/objects/29/f918b741cf15b8c3360e7624497ede720ff828": "de821bea8ad6d272a292dcc6be3ffdee",
".git/objects/29/61199998c518794c7355e2bd0de85a05380f12": "80a059a5e8b0d662b1918df85183e864",
".git/objects/7c/90a5472ce15a1470b83af19f10b5e48cdba371": "e0bbf9f611a932d1aade20a858a3c9c7",
".git/objects/7c/f207f74429348e91237b8526aaf01d19183ad8": "ff7d91676d02e7971fa508ad2d9a3ee1",
".git/objects/89/f29073cf9264488978339a4c45dfc568d04428": "fe3064f83eaaba13d430050cd2dbd6b7",
".git/objects/45/7d1eaba4dd074723d091a2bc1acf6c8a74cfb8": "c92094b44b7e013ba139becdb7049759",
".git/objects/1f/ba0adfc3c0fe4c3f3806d1e75372876401d802": "5a5bad8ba857507f989d04a5028909d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/0a78b57b0cad588ff91371c411320ebefd9693": "575eb7c85aafb97c75c20c9a8b45d32e",
".git/objects/17/2e2498827d740f3c06f41877ebdeba886246d3": "3aee8515401ed079566640f3c9b68133",
".git/objects/7b/b6575c2448d79a200b5e2b50b432547f343e5e": "a4bdfe85c894ef45eb95211e81d4a87c",
".git/objects/7b/a431a48e83cabb9b0b0178e1346235085b3c80": "06592522a47d3158cc13bdb960769498",
".git/objects/8f/c5c172e6679efe0adc98d64994a70d3469e599": "c0855dfd8a1393c532b8c65ae8137e34",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6280eb424839d9969a1d4204a041cb3c60a72a": "c3f6d17f7fb333ba03ba1651d07e8bbe",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/e092004700d839ccacf5267938ee41858c7a4e": "b62d6fe616a65a8db40fb3bd6d78bc6f",
".git/objects/21/7246319c6ec8775d9516cca0766bbe9e27cf55": "0324e7cbd6403153edad257a1c5edf65",
".git/objects/4d/cdd91d5b24b2f695dd818a7670c4219749380e": "c2635e12b1e4128ad83db201d02da9f5",
".git/objects/75/3c09fce956bb00e6e8c761599240c06bd7be03": "f3b50264975dd3165f6eae864f6488a7",
".git/objects/81/0c4b1e52fde153162243ba18c944acf16563dc": "2f9352abeb2a917662bc26b782534ed0",
".git/objects/86/05b346f07b94a60cae586fe0f1ba48ef60db6c": "b7d3fd551387cbd7624bb4c7ce1bdee6",
".git/objects/44/8e431bb1639e17732c03fd0d2b46f22f8ee558": "4b0a3543730794c585387503b07be37d",
".git/objects/2a/3b27258f63a8e773c12e7f57d3b3825bfb17e4": "f03f671e53e7b0d17326e4d06842772b",
".git/objects/2f/70399803902f956f03ae82a01863a0a932e15a": "e64f833f823231f2c51993c0c88a46e4",
".git/objects/2f/f0495c0eafc99150ca3e837acb52818b636372": "9f2c071e109b3f0dca2cdeac7e030f94",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/1c388b694efde5e51d08a289e1a39a50a93f52": "0238964419ca961a5d6d3c5bcb4566c6",
".git/objects/38/4753436a570e9bbc170063aeabea9004d25f81": "65eb8feec82e1adf125a4d1c840b474f",
".git/objects/38/2293d22f00426b3b463a38bbecb52dfb7e001a": "e464c6b15bc1be8177b6bab951038fe6",
".git/objects/38/7da812b8bbc35832416ab5f5350604ed13b130": "3d381f6fcb52fcafedbd38463a746024",
".git/objects/6e/dbed51f8959d7678bf3b13915fa23d43666a51": "8f81d1fce722f46fe5b308bbacdafb78",
".git/objects/6e/7769738e46cf334415d85e5ca0f8e169324505": "96fca3151f3385d88355bd4a96ba69f5",
".git/objects/9a/7d45a1908a4d5ecad09bb39be55a9e7e6b6f05": "b3b134a9d893c59d48f94cb955347281",
".git/objects/5c/7de16cd5b826ce2f1d1ff420577ada29bb47e0": "821e9e19740da5ef41099c898d8850d5",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/91a629532190eb228d1262b9e44b1145a4c726": "75dccefdf0d29e1ace64bd2730deaf1a",
".git/objects/31/09bb31ecd30245abb3a427c772e8d391e0189b": "e0a37c2b6fab084b238a5eee5a021b3e",
".git/objects/31/ed43dcf99329d3517ef90736fb186382d12b4a": "292365c74613b3fa7e1a46b992e6c540",
".git/objects/31/04ad2f6cd0ee9e27c218cbb8ab60a0e685d805": "70a45c478a45407d35aacfb8d340c044",
".git/objects/62/f9237b97b017805f3493a4d5a269390fa01c54": "68a761d05fd10a2718b65349ab790bf1",
".git/objects/54/7b97f3ebaa7b7dcb33953bd3197fc642c68437": "9692d8749f47453649b478c9b886a4e3",
".git/objects/98/16d1fd4e6adf894ae8a32fdddb9975332fac9c": "d31122b0a2cef7837653411cdf503599",
".git/objects/3f/cbdbd83a9b5f484d4cf19bc5161e2c6011c472": "73fd2b959d8c05edda99655212a3089c",
".git/objects/3f/461ccae5b1ac1464fbe10bca621fd3a77fd1c1": "732df2f3d7a357736f27f3c834f403cc",
".git/objects/30/595072ca1015520dda6755872d1d097a81cf66": "a537e26cb8429c60ef109886181087d4",
".git/objects/30/f4c1fde0127b46c8ce6fadafb83a7df06f60e7": "c08ea6359b181927ee891fe42867daaf",
".git/objects/5e/a9553f92422aec41b6e208cfdfaa0e234661b3": "648aaa993225e71a8f733d680e6cca7d",
".git/objects/5b/dce7fbba2ec733b053ec9135d239508bcd813e": "898987b892fa9d076131081850c1d74e",
".git/objects/37/6e76345aa389dfc4a44054894c262690c4819d": "df1e427f6adad4ec46317d41cc5ea32c",
".git/objects/6d/f9d2d53c22bc2202970c33d93a0c554207baaf": "20593642cbe74b802ed3a763052d5ea2",
".git/objects/01/e9c363329d0d3d4221e80434cfc1415a26af80": "d117894d901a59b7750e6f57a558072e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/449faf65ce4ff605a9711a3d824526cda3a5e6": "31065315e9ee6d6dd6b620db01712363",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/63/d7b2cb00d6f7d4d05093cb15c52ab626636a39": "d16e094fabf2b47acb67d5a054481a70",
".git/objects/0a/f9b935373d3061148523ea8eb7be23cba5747d": "0b95b209745305df3b5f9916809e2d1e",
".git/objects/90/c3ece063943873312bbbc719aa2586d7b00f94": "b2a1f54ae5c03cfb756e83ca73ee21a3",
".git/objects/d3/d239b3b2206673bb2289e0836a75aa74c8a9ce": "7fea153cc216afd2005e2e3d2657d7f6",
".git/objects/d3/e64b85f9f988d0e22c06889414cc1af6c643c0": "3518b1ae737ae73e7ec931409c406bd2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/aeca3b91129e57013156449394e57c8bfedd28": "b13c68e3ecb4553c764925dd90894e06",
".git/objects/ba/de333199162c8246efe87f2e51c1f0a6594001": "4dc5e6715950cebf5d65e99d3b2a990d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/9db0030ea6fa26e137dc8d7afedae669698f3f": "a85d34778488e70c13137ebcb0933605",
".git/objects/b8/d64be87f1f7cd869f26f6bc6e6989944e776d5": "396774100532728c6815c81e77d8a3fb",
".git/objects/b8/c762c1c89da43322ceacfaa3d01e8d949e94ce": "b8a6d2415e17f6d5525048f7b4f78fe0",
".git/objects/b1/f5a4b29e5872c2e235fa643797f8da410e1b44": "654054aeea647c0a5564ff23df89df40",
".git/objects/dd/8bb29cfbd55699e3ad097ce6c81848d842b463": "f3dee50dcd578622a8dd7d4e6c6a85e9",
".git/objects/dc/6f83c0e22beb49f41f7d3975f43bd5356171e8": "df693efb7aa9fe070ff28848c20dd0d8",
".git/objects/dc/195af27123266a8c0a3653f56e71db6d180341": "29457ca987c044d1659baf9d3403e384",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/af/3d5d1a964a4cdf026fc2468008883baded1062": "0134dec6b4624895591c6166c7d9e882",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d8031b5392778393bd342c12427516166bb730": "0f96b55ec49473d3e178568f493dadc3",
".git/objects/b7/454e509f73e233b438aafdaa4d968b52b38617": "39bc12b3e3acad0bdb95187bcce6518e",
".git/objects/a8/526b0df4ee31af37dbbd30f7c383a2d51748dc": "e7b5b11d9bfb322a4dca50c5449710aa",
".git/objects/de/99179ae8c49e54e08f853dcbbb86402409c7f6": "0140dd9ab374a507943f7bda4e1af0da",
".git/objects/b0/0b2787e984c48d8312dc64f693d09c05360a33": "f06c740b3f13b2b9e40149e4629ecf63",
".git/objects/b0/3f0025d3d8fd9e5b639ccd8c3c557dde912e9f": "7f173277e2ae01e371e7dcc1d2476e7c",
".git/objects/a1/fccdf7ed77e3499aad7a546d515b8c292994f7": "1354b811729daf980e978493efa1026a",
".git/objects/ef/2b561c21926baf6ba7a49171746d93b728c28c": "7a5028cc2756d2c43ecb3ae354df2676",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/c4/5ec0925736f47d21831ab68bc4ba938c9c5b21": "2e5ea0051a1944ffb7aa97e59033b95d",
".git/objects/ea/86c2e28951df9c08dbc43a9e93cc23f3fec7a6": "b695e0e7d6ef872a20047eab2895c211",
".git/objects/e1/24a48c2a99286980545938349630f110bf1692": "7a4c0351e03bff2304e54adf794730d7",
".git/objects/cc/6eae03c934b720e54a4b866312dfafdfa5cd4b": "a8c231aca8fafb424ada82b0b731a76f",
".git/objects/f0/72e6e4239671d3c989649bd5fb4327a214338b": "0ad9a40c4dfc636611af5a90bf5913e5",
".git/objects/f7/af579b7c7f5522752a52245f0bb43de59728c7": "d7d84aec0ee0843bf4cd008c1761d2f3",
".git/objects/fa/1b2de24fbd1dab09a52ff12e1f3838f8a14a0a": "0a4a9bae9a6e4e819c086b90ebd2cd3e",
".git/objects/fa/2f0ced564fa640d27a2824c233ddc9ea6d6a87": "8590eb8bf07fbec75031123a0007b078",
".git/objects/ff/1124bdc6b84f35ad60f00def321bbc189cb120": "a34bde56e51a45ed392bf686e86ab011",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c5/05a4ba96af3fcdaae1e743f3b7cbf52166899e": "a8ed2b69e76d87124152ccf92245c5e5",
".git/objects/c2/1a396b583cbc6d863e9ee1d20683b4489b8cbb": "e094ae64d692a53c163c279767ad6f5c",
".git/objects/c2/4c72a1d69f9ba6f8f93b264ca3f225785bef16": "a6d6df687e295899d73ce3bd5e072cb7",
".git/objects/f6/90ab72a71e0a09734a7658d1fe28978b843d83": "f899742e0740b9402001e894a39cf7ac",
".git/objects/e9/78ad4e8edbf5d231ee7dced11e2f4bf945a16b": "7e110e43f64b8c725a842f5cc4ca64df",
".git/objects/e9/31a5a186ba99c5d4b1b79bf957bac942c7df8a": "0dcf4d503ca8b544271fedd36b906a3f",
".git/objects/f1/b405ec4c39438da927d245184b3c567489a9e5": "727b9ae57aaf5e29df93744073f09721",
".git/objects/f1/9dde5673fa4b7a19961277a9b156f116fb4aec": "dedc192fa6f149a10a5071ad626e762a",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/f8/607d5b830788410e586aeaf951e015ab22f727": "fe5c124da19a25a736c3505d30a84eef",
".git/objects/ce/56883a324842ce3b3db65f87406bd68856613c": "242122bac2b350e8c4c1b2b9d67af819",
".git/objects/e0/7bd75fc1b615b9679508dff8652cb21828eb75": "dc30677494fbf4694f1438b78f6db59f",
".git/objects/e0/bf1ca7c2304b65c7fab691947405ca68ab1a4d": "77ddff1d6908e4840ffa12cb7795569d",
".git/objects/e0/dcb58264dbd862c88db699559384900c26f763": "e179e35169484e4aaea4917806120dda",
".git/objects/46/04c44601dbfadb8a37238f101b7b9533bdf151": "15674fa590f63ede111643cbae36c960",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/8e02134b3a5827ee7f76e1e872e6ea729d3705": "3fec902df0d0cec685e4c218514f8210",
".git/objects/83/bc796db09d45c09db4daf4037acb8babc647da": "e3b3b0f36ce3ad0bc3bc6fb91d07bf33",
".git/objects/77/3efa11467ec7455998e4965906266a29a38c06": "8b8ac9c9b39cdfd7d62302188ad03aba",
".git/objects/77/e2cabaaf58a2a407267defd6cac5514566baa5": "130ce42cdb4534f05fec264a74eb39b7",
".git/objects/77/86d941a72adff7d1aab04c3cad86235bc78eb5": "ecbf9591e2b286f694bb1621921298be",
".git/objects/77/58d35d0a43685abbbed421b4ee6ba6780100d9": "30b42a35f26568e428950a1ca743cca8",
".git/objects/77/27119da4d954528f4920b250a418d7e2cdd0dd": "449b58620ed7b6469a7043726aea253a",
".git/objects/70/f60cb148270d882b1bc8b351bb775f62dc778e": "9b8e0c99639d0a336528b14273f96b96",
".git/objects/4f/4b7f6e231188ef1f87210ba9cae7536d26053e": "014e328675dd2cea4bb462fa2b737d7d",
".git/objects/15/3812b3242709d42937c666f42f8918ac3da20e": "f6155676a93ec97e3548256f7e404a7c",
".git/objects/12/b1cdfba7e79b0eab14603c841516ad75ef69ae": "0471afc58b4a73670a1bf426feef97eb",
".git/objects/8c/a04349a0f7b2bbb751b9b0655269082d38191d": "3135f3109cccd2995f069f6256810c72",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/006047f5084b610e9432a8764bcb4c10df57fb": "0fd45d576aae662d9b87aabc9df020e7",
".git/objects/1c/7d1fee0f635d45eae0fd94aa5466db82f803eb": "1efd913c3318a88264f51e1a96c3ac4a",
".git/objects/82/834d9bff2b9ba44b5a41b53751b198346af90c": "fe759834d83048ed91891cb7ec34cff8",
".git/objects/82/e59880ffa06ae45c7c11cd6fe1fcd79cb26f4c": "a8f271d58418f2f4e6a29687edcedb89",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/a7dcbe6c7a7c1ab3e1f907e3216c30ae6ac5eb": "f6986fbe49f40d9e69a23b6436887fe4",
".git/objects/2b/8314d6938aff9993b6087ca36eb12b5d717959": "1a38708d7d91a1216610292c142b5877",
".git/objects/2b/d8277ebf01014d81c0b1c7465c1958d76f27a7": "83640bc1c3437d0534c096031696d452",
".git/objects/2b/3bdc5780e9bf2b1b1a9994b52730ae168f75e0": "db7a7afe42b20de2c1859c88841c4168",
".git/objects/8b/b6c83e678c3f9ac7349556ff2a3ac01ef0f795": "5e355eb93497d911c0ce70fb82405a82",
".git/objects/13/d96996f1fbc9c6f838794ff33e784da7f59c14": "8074a887cc27bf16ff00ce59d1d3c0f6",
".git/objects/13/5c1f2664272cec63d8237b9295c5cd99d2b71a": "3e743ab8ed60de29581a523c7b9e01a7",
".git/objects/7f/80444daf905604d169e626947b2a232fc622c1": "3cf2b78a9e0663eac7706de397b92a9d",
".git/objects/7f/9153d28e53abad0ef0558c6a8a72fe36716137": "868356e001fc05d0390ba9ced73e2056",
".git/objects/8e/0b99ef36f0d8a8beee26567845a3a7c063c94a": "1777fc0fb7586e3366a7ab853c365c44",
".git/objects/8e/0abb5db058927ff769fff8e16554ebef289180": "d2603a7f8839161622bbebb1b194b763",
".git/objects/25/c131e5286d5c085528a6767b41e7a7bf5eccb4": "aa1a3ee715713a78434031f994970710",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5053dd33d3ec86d45e5f33803bde07d",
".git/logs/refs/heads/release/1.2.2": "dc36b7abd1e91f6a29ab331d5467da54",
".git/logs/refs/heads/release/1.2.1": "7da34968bae341afce2c03c93d6d46b8",
".git/logs/refs/heads/main": "d85b479bbdd825114800c9a6654a5aeb",
".git/logs/refs/remotes/origin/web": "309ebe5bfc006b04b8211564a6dfd0a2",
".git/logs/refs/remotes/origin/release/1.1.111": "34a4962ef5a07b065a507b6a112a4b7c",
".git/logs/refs/remotes/origin/release/1.1.6_46": "ca2be93facb1c15f9d8fe0f6b49391e4",
".git/logs/refs/remotes/origin/release/1.2.2": "6361bba90020de390e1ab1ff3cf3506c",
".git/logs/refs/remotes/origin/release/1.1.7": "698dc607083666b6dd97043e5135685c",
".git/logs/refs/remotes/origin/release/1.1.9": "8c2790941748932574d011ca17f6c05b",
".git/logs/refs/remotes/origin/release/1.1.15": "f600bc7fdf63d9266c0167f7adf972d6",
".git/logs/refs/remotes/origin/release/1.1.12": "479874c726cced41e3541304ddfac51e",
".git/logs/refs/remotes/origin/release/1.1.8": "f49b03522700d3e12e3593fcb0898fa8",
".git/logs/refs/remotes/origin/release/1.2.1": "100082052a455eeb523a5db43faa5c29",
".git/logs/refs/remotes/origin/main": "8d4e10b0ed9a7d69a256663c0b0cf6bf",
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
".git/refs/heads/release/1.2.2": "e27cb80f3c2047462652da97b3918fa8",
".git/refs/heads/release/1.2.1": "7ce3b0b9d20a38b51824e28e50841556",
".git/refs/heads/main": "e27cb80f3c2047462652da97b3918fa8",
".git/refs/remotes/origin/web": "d9293688126e92174ae99c2bdb1e337e",
".git/refs/remotes/origin/release/1.1.111": "798b2b783a2867f809c56fbf8ef96509",
".git/refs/remotes/origin/release/1.1.6_46": "b706cf1878478c5c4b28c7b9d27626dd",
".git/refs/remotes/origin/release/1.2.2": "e27cb80f3c2047462652da97b3918fa8",
".git/refs/remotes/origin/release/1.1.7": "0848fd98303c6eae2f5cf0f0a4270506",
".git/refs/remotes/origin/release/1.1.9": "ef456d7a1bba81c4098299b92b213dcc",
".git/refs/remotes/origin/release/1.1.15": "0299474c09b1db558df6cc37dd34c370",
".git/refs/remotes/origin/release/1.1.12": "bb5c3cda5fc2e5e1fb6f8b21d9338fc9",
".git/refs/remotes/origin/release/1.1.8": "70bb506e4bff9a5ef58637534112d85a",
".git/refs/remotes/origin/release/1.2.1": "7ce3b0b9d20a38b51824e28e50841556",
".git/refs/remotes/origin/main": "e27cb80f3c2047462652da97b3918fa8",
".git/index": "9ea84f85abd6ec792e9e5be0ef9e9f3e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "63a43fd1cb5e7e8574c8c2cabfb1b814",
".git/FETCH_HEAD": "c53f3c720e330593fc28b1353c5e6cfb",
"assets/AssetManifest.json": "cd0561012f58eece4ac258130cd56af1",
"assets/NOTICES": "a574b294ef24bc77efbb1d6725180918",
"assets/FontManifest.json": "ba7b8f713093495517fbc07c67242348",
"assets/AssetManifest.bin.json": "33fa741bbd8f511bb4463d03f4c8f22e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "521a10cb028d88d513c086904b89b56e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/ui_component_kit/assets/images/img_coming_soon.png": "c38d615bc82e6d88bb132f6909deac78",
"assets/packages/ui_component_kit/assets/images/step/img_timeline_3.png": "f132b15e1ac7dc488f4849b9d5081bfe",
"assets/packages/ui_component_kit/assets/images/step/img_timeline_2.png": "391efbc35f4a53d1b7dbab405960a8de",
"assets/packages/ui_component_kit/assets/images/step/img_timeline_1.png": "4e27805d18c6eac9c4d1405d095ce066",
"assets/packages/ui_component_kit/assets/images/img_green_tick.png": "bbbfb7cf1513227260f6809e58c93939",
"assets/packages/ui_component_kit/assets/brands/logo_zalo.png": "a314c78d7778469ff6ce201179ce8b7a",
"assets/packages/ui_component_kit/assets/placeholders/logo_with_text.png": "83b738d7321729b8e592cefeecf81582",
"assets/packages/ui_component_kit/assets/placeholders/avatar_placeholder.png": "fa892ba0b545610d16e996e5ca34b54a",
"assets/packages/ui_component_kit/assets/placeholders/img_coming_soon.png": "c38d615bc82e6d88bb132f6909deac78",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f5746b884b4c2385cb19359b66436a33",
"assets/fonts/MaterialIcons-Regular.otf": "feebced29bb11ffc968a972bdae24561",
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
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/dbnavigator.xml": "668033fe9639715ec90d1c3f6135a681",
".idea/vcs.xml": "54ef5b326db1a4fb906b4f2849780d35",
".idea/other.xml": "b29dfb4bd5140be96e3ed130aa60b31d",
".idea/workspace.xml": "ee884f0e1ea170275eedeb888257b712",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "84b02e379eda0a130c496a26dd361f0d",
".idea/git_toolbox_prj.xml": "def11fd7d7f704db06dd41ae48b80720",
".idea/git_toolbox_blame.xml": "bc871aecfa6dacfa3bcb212c6a849498"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

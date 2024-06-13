This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
bookcross
├─ .env
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 8ccb290d0eba299d339502401bbf451737d36c
│  │  ├─ 01
│  │  │  ├─ 0fb5496d667d5baddac6cdc2c52e0ca67d2d31
│  │  │  └─ 9ab3e554167572c6e3a9ebe5fdb11e980bca12
│  │  ├─ 02
│  │  │  ├─ 15773f6eb5952789326bbecbb9750684b40342
│  │  │  └─ 7523bf4d054dd6f1947a1e9355042c15e15ee2
│  │  ├─ 03
│  │  │  ├─ 865d83311c3930324a0a2dc68343a139fd75b5
│  │  │  └─ f00885cc73eca16a75693ff0c780534d2c10fb
│  │  ├─ 05
│  │  │  └─ f69f9066b3daef4f310a63ba0c53aef05e07d5
│  │  ├─ 06
│  │  │  └─ f80df94fdd1b813022b01d20c1bc846bd2a27d
│  │  ├─ 07
│  │  │  ├─ 0806fb8b7ebab40ee18ebee6c90f9f9f797326
│  │  │  ├─ 1ef52c099bf9b8b35c1c528a6f962809fc11ac
│  │  │  └─ e976fd9e22c17ffc293c4039c3bd613d425504
│  │  ├─ 09
│  │  │  ├─ 2c3d8e038efeab49ea287096c3e38de32ac63f
│  │  │  ├─ 576bfc431a470df30efd762425b1c2520ebab4
│  │  │  ├─ 892098aa943af5fe95e7dd434a07fe03e7ccd1
│  │  │  └─ c801a730e64e688e5fc5ee2f044767c870eed2
│  │  ├─ 0c
│  │  │  ├─ 89c1ebe32ffe1e8db6518558e280b24fdfca5c
│  │  │  └─ accee181bf4a6a89bf5bdf9098829381b55648
│  │  ├─ 0d
│  │  │  └─ 563e3d97b15ee105fbc7a30a602e31c3edcc71
│  │  ├─ 0f
│  │  │  └─ ce24aeb06f15bc880770c839ac595bcd94c540
│  │  ├─ 11
│  │  │  ├─ 06821bb4b38b7d33076f816ce194cab34a8a51
│  │  │  ├─ 5d8808268e890af9e02e88df4ea1e2599a788e
│  │  │  ├─ 5e5fcd7f68afd25a88b1121ac1f747a2bc9dd9
│  │  │  └─ 67181c0af5811851c7b90658e2de1b53e2543d
│  │  ├─ 12
│  │  │  └─ 1f275b496011c44c9c2e249e44838730658643
│  │  ├─ 13
│  │  │  ├─ 140fecddcde355a03a01a04e237ec81b78670b
│  │  │  ├─ 2f357742d755d24cc2af556e5181e19810eb96
│  │  │  └─ cc787b4cbe1494bdb11b9786a23092e2e07a63
│  │  ├─ 14
│  │  │  └─ bf81d9d7e3384010b080c0a4ea0a31167eb8b0
│  │  ├─ 15
│  │  │  └─ 02a19f5b475841f4fdbbd00d44cd0cb6f1b866
│  │  ├─ 16
│  │  │  ├─ 8c2c950667af69256862984ae70dd83e90a06c
│  │  │  └─ ab0c51ffd3fa38f3512b8d1ac35041e9fe34c1
│  │  ├─ 19
│  │  │  └─ e695a1a05f293b20657a04d2739c58c96e7f78
│  │  ├─ 1a
│  │  │  └─ c0e86e3a7715b5d34aabdb788cc4777aa303f5
│  │  ├─ 1d
│  │  │  └─ 83904eb9e6b4ed3de8c6e6c81c3f7d6a6768d2
│  │  ├─ 1f
│  │  │  ├─ 271829e9adf68cf81d9fdebfda41cd0b95f40b
│  │  │  ├─ 47ad2cd5f919e3ee6f3d92d2fcc3ea3da1125a
│  │  │  └─ b4c2196a6710567da6dd3efb1acd2310a0ee2c
│  │  ├─ 21
│  │  │  └─ 1f58157cad8217c716fa4fa90658963ae5aa26
│  │  ├─ 22
│  │  │  └─ b0c908ada817786812ce8adee5f96f8360171e
│  │  ├─ 23
│  │  │  └─ a69a10b24664905dc3c268d795f8dd1c87a2c3
│  │  ├─ 25
│  │  │  ├─ 73a96aa40dde44339c664ba612affad3442c10
│  │  │  └─ 9bc25d5c283718b1b8766bd9d92aa3ee4319ed
│  │  ├─ 26
│  │  │  └─ c28ebeab63d046b3ea204be74c1d24b6890328
│  │  ├─ 29
│  │  │  └─ 1211daf727b2e1534f6ff6eacdc7718e69a73a
│  │  ├─ 2c
│  │  │  ├─ 4d437df977dabbd1253ae5309e2348f744f92c
│  │  │  └─ e00ccb9560d24f05fa9df6efec6d8bbab74772
│  │  ├─ 2d
│  │  │  ├─ 39b20b00e7008139cb0acfc1ac6c61aeffb4d2
│  │  │  ├─ c8a6f93165bd29212dc230fa9c35836b26d56e
│  │  │  └─ e256e111c1459b8b495b10553dbf71351c1f98
│  │  ├─ 30
│  │  │  └─ def2927bc853d93e6a45ca0afed58ea293d9ff
│  │  ├─ 31
│  │  │  ├─ 78ec742da59b0c952fdda64f3d4dad2dbe6cfc
│  │  │  └─ c31b53762181aec6d6320316947bec5649489a
│  │  ├─ 32
│  │  │  └─ 992f3ec05e96024e6daec4aad9c9a35fbc264a
│  │  ├─ 33
│  │  │  ├─ 7abea628c145bd18768d59da8bf0333536f826
│  │  │  └─ ad091d26d8a9dc95ebdf616e217d985ec215b8
│  │  ├─ 34
│  │  │  ├─ 0ddefdc9b10c02abb0ed5c934586b2f324c232
│  │  │  └─ a01fd9a0898ce5e28171c90a883b8cf9817eaf
│  │  ├─ 35
│  │  │  ├─ 874b76113b5abd2a3b21467e533518a42408fd
│  │  │  └─ d8120fb8990da973918abb3032b8fcb3246150
│  │  ├─ 36
│  │  │  └─ ca59c6a40719af0489ea6fb4ebdc482669f451
│  │  ├─ 37
│  │  │  └─ d4d31cc80931f718574d6c57b04f704dc2346d
│  │  ├─ 38
│  │  │  ├─ 15d42a72bb064aaa3b2b1b1b4023053fc8d9fb
│  │  │  └─ 257077f679fc6230feda178643ad04606c19aa
│  │  ├─ 39
│  │  │  └─ 0a357d3adc4f293aa98d82716b89672a3485a3
│  │  ├─ 3c
│  │  │  └─ b44ca57b686249cb8871df09cd965bd6603156
│  │  ├─ 3d
│  │  │  ├─ bddba033248ea4391d63b46bbcfdf126f2e023
│  │  │  └─ f3422d7004b278edc274aca5541a51d704c774
│  │  ├─ 40
│  │  │  ├─ 2c0df49ed162235437b567dbace69238b5bbd2
│  │  │  └─ 4df7337af74ef9ebb68fb07b842f1919f1ba12
│  │  ├─ 44
│  │  │  └─ e56f1643224939aec479bac397a05cbe0d5c65
│  │  ├─ 45
│  │  │  ├─ 8e9952bdab111ff23720ec9a0dfd31c3f7f040
│  │  │  └─ f844b74f4bede366bf325c613579a2ec9ce5c2
│  │  ├─ 46
│  │  │  ├─ 163a2636d73175f0e62829acea6322ebde424e
│  │  │  └─ 769f509c2909899cfb210dc7d78024ddc064a4
│  │  ├─ 48
│  │  │  └─ a2fa2f181245293fac6bb544c729ed8394cf1a
│  │  ├─ 4b
│  │  │  ├─ be37c42b5fa5aa333f8b2ad947c87f28d20a78
│  │  │  └─ f4bc9450858a5e147d6343978f5ca0fbc7bdfa
│  │  ├─ 4d
│  │  │  └─ e464a8574a4e0911b2bd755e8dd5aebf45b194
│  │  ├─ 4f
│  │  │  ├─ b1a4c139f39200e12dbd55aa17fa99ae44e488
│  │  │  └─ fd23bed7cb22f48a32f567060397c55715f469
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 53
│  │  │  └─ b5d4c685f9a7e2598390eb5917d1f9d7d8c33d
│  │  ├─ 54
│  │  │  └─ 1b464eef81e19a7da5f6d1dc24226cbf8bad2e
│  │  ├─ 56
│  │  │  ├─ 08ea573e748d7a163746a4a972867860920437
│  │  │  └─ 302f0e4c347c006abf9e0f4dcdd0427a3c00db
│  │  ├─ 57
│  │  │  ├─ 57722c8fa917f6f89854fcfb0343b4788d5df6
│  │  │  └─ f2f8833318825126b1fc0e321d74f544e79be6
│  │  ├─ 59
│  │  │  └─ cefd57e2f619fe65b251dd2bd7ffce77eac99e
│  │  ├─ 5b
│  │  │  ├─ 252087d6958b1cd3e09c86cd79cedef2abd433
│  │  │  └─ 404a4dbeaf5879f43ee8fed66ab1c6da5eedb3
│  │  ├─ 5d
│  │  │  └─ 283eff811a0123316a809cd79602d35ad80934
│  │  ├─ 5e
│  │  │  └─ ab4ea09a4501c48fa0b5428dd9e48a6733ab14
│  │  ├─ 60
│  │  │  └─ 33cc61539fbf1b8b5f7a468727a89de125d3b1
│  │  ├─ 62
│  │  │  ├─ 26f1b9c7a280dd6232fcba574f8177012be12d
│  │  │  ├─ 4d4d56f6a2bfa14652586f29ba415b98a809be
│  │  │  ├─ ae9f082edb05251f8bb806ec954ba29f8fd877
│  │  │  └─ e0015e53497c95edf6bb29bec63c9ca9df622f
│  │  ├─ 63
│  │  │  └─ bcefe6596240b99511332b54caa3d31bbca790
│  │  ├─ 64
│  │  │  └─ df794cfac2fc59dcee747b7536680fce99dbeb
│  │  ├─ 67
│  │  │  └─ 348adcd735d4bbf0d64d8a7565114ecef49b10
│  │  ├─ 69
│  │  │  ├─ 1a6ed107b0946a43d0e227799526577f0228f5
│  │  │  └─ 50a82fc84bc84e6bb851c7fe9e06439ebf75a8
│  │  ├─ 6b
│  │  │  └─ 1a698a6be97b10f610259ec121f442133d6149
│  │  ├─ 6c
│  │  │  └─ ea79e1b52e4a26dda7ce8e115ec61c5208c4c4
│  │  ├─ 6e
│  │  │  ├─ 1565234029523e9bd49c0788e26969c00171e8
│  │  │  ├─ 33842aefc18697aa4996bf512371db6e9c5a97
│  │  │  └─ 73b7ba336341bf74583c8d8811a963a3dcb9a6
│  │  ├─ 71
│  │  │  ├─ 1f8fbc3e2f65bdddbae406b5bc7c44061ec7c1
│  │  │  ├─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  │  ├─ ec48c04875cb8d11446bcff23f5f88eedb38f2
│  │  │  └─ f4fb4fc8a2e05ac4a48b4699d8be2dea9a474c
│  │  ├─ 72
│  │  │  └─ f80be5bafd8d47cd65285cf3cdc33f918286c2
│  │  ├─ 73
│  │  │  ├─ 32673fbe89acf899f63359683288d8c9f99064
│  │  │  └─ 78a9f8f8a8911265f95a920d1bcbfc020e8038
│  │  ├─ 74
│  │  │  └─ 090a6c07bdd98d71278ffee289bfd483e71e7d
│  │  ├─ 75
│  │  │  └─ c6d1bc1a1f16a7e35e979cb236d238c16e8c35
│  │  ├─ 76
│  │  │  ├─ 1d555cfa0a6f6eee24dd326521c7ec952e586a
│  │  │  └─ ef662a4c5511041ca71a6eca52b520dbf1f522
│  │  ├─ 77
│  │  │  ├─ 5a3924a26f681dee286de5462891d3a6736e72
│  │  │  └─ c6f9f1dcf0a96fbdf4de47f93990244bf8d15e
│  │  ├─ 78
│  │  │  ├─ 45ec3d5fba6ac75dae0d322244dc26119394ac
│  │  │  └─ 5761799575c84bc7cc36178c00b8df66ab93a3
│  │  ├─ 79
│  │  │  ├─ 8a9f2aee83d29cfeaa29813f4f44ac9133cf71
│  │  │  └─ d9bf09d956af9a0693515846b64575514e3356
│  │  ├─ 7a
│  │  │  ├─ 07d23c3ffcd22d2312a16b76a48c9dad55e5f2
│  │  │  ├─ 2847cd2caeb76f77f83a12416ae7ba607116a5
│  │  │  └─ 6395ef61c2fe5308cbff4555f4c958af65ffba
│  │  ├─ 7b
│  │  │  └─ 9a56c2f1e679001245c239a138d0aee549524f
│  │  ├─ 7e
│  │  │  └─ 0c00a43832b56d593a4626c0b2170414c34eac
│  │  ├─ 7f
│  │  │  └─ ee0526d4bd89b245527fd8b65f1b0c52d2b25d
│  │  ├─ 81
│  │  │  └─ 717b90b46d45f127aef70ab65045d773ff2e70
│  │  ├─ 83
│  │  │  └─ 5fcfe4b3af2e522007fe46b6599eb2ce7f960f
│  │  ├─ 85
│  │  │  └─ 86236ad8181b487657b2e93770b893b99ec85e
│  │  ├─ 86
│  │  │  └─ 47fae90e41327aed6ccc232d5f29c43ab4a977
│  │  ├─ 87
│  │  │  └─ 08b77d544329e94af026d0e82616f5191a11ce
│  │  ├─ 88
│  │  │  └─ b69260693048ca4066d3888050a9ec6dfaa867
│  │  ├─ 89
│  │  │  └─ 33d14fb63d0ee4010d5d41f143984422d35e06
│  │  ├─ 8a
│  │  │  └─ 2558bec20847121fbbba9b1c6ff019620a8216
│  │  ├─ 8c
│  │  │  └─ 08312dfef121486d52cd782b41f9c3ea2b0cea
│  │  ├─ 8e
│  │  │  └─ e4ee170f365e71f7435eaec751840f1120c528
│  │  ├─ 8f
│  │  │  ├─ 1168588fce15286a42bf7d4bd3ea70948495ba
│  │  │  ├─ 2ca45ce63a2d3e37f78157ffb1167d67762878
│  │  │  └─ 322f0d8f49570a594b865ef8916c428a01afc1
│  │  ├─ 90
│  │  │  ├─ 8ed1b337db62d93003e120bea589c06fe864d8
│  │  │  └─ bc279a6cdd04eb6443c9aa25c5a3e1b735b3c2
│  │  ├─ 91
│  │  │  ├─ 048c0817c5acde8645ccd2a4c6d41120ed0518
│  │  │  └─ 4840de2c675578ac6640515cd01c77abab000d
│  │  ├─ 92
│  │  │  ├─ 177305814ed30797d0ca49010457a010115d2d
│  │  │  ├─ 3a9da7b9b2f972bbe151013211ec884a1f5665
│  │  │  ├─ 44cdd5b6082a10db7da30cb283aeedbeffac1a
│  │  │  └─ 57abe15096155136d36025820168fcb4953b97
│  │  ├─ 94
│  │  │  └─ 4edb046d327f3e82c780047beb16471c0b2d39
│  │  ├─ 96
│  │  │  └─ 8fe6bb49e7e2c1b1563c780629885b41d79bee
│  │  ├─ 97
│  │  │  └─ 5baa95c0ecb12e18a6ee09504d752ea684c9c2
│  │  ├─ 98
│  │  │  ├─ 05741038afe884785110290315e5ce954ec40e
│  │  │  ├─ 0ea278b7835642c8efedc316bcc329243e5566
│  │  │  └─ 2180a1d8a5ffcaa08fe009e5c2c6208ead4a8f
│  │  ├─ 99
│  │  │  ├─ 5a07ffe4f5f0a031d6ee464fafb6c6f63dca65
│  │  │  ├─ aef08636977e198c2f3b332c27b4041b0b1850
│  │  │  └─ e954459182060ec56217d7d94914538c428142
│  │  ├─ 9b
│  │  │  └─ 5317ed70462ce1c3d65e5a454673a82efa2851
│  │  ├─ 9c
│  │  │  └─ 7494412c5c85eab9ad514442e624b9413b5c2f
│  │  ├─ 9d
│  │  │  └─ 13c91ccc27b603660b444e50a3b410f6909de3
│  │  ├─ 9e
│  │  │  └─ e54996ec614d941b93ea5d99d26d1f225c58e5
│  │  ├─ 9f
│  │  │  └─ b95dc82781a7c8f026daa79f702453fffc3188
│  │  ├─ a0
│  │  │  └─ ad698c6bc9bd63b23421649783f3992bc27d28
│  │  ├─ a2
│  │  │  └─ 246c2e12aea956c85e54c8d285d100095d5b83
│  │  ├─ a3
│  │  │  └─ beb5a1566341f5f8662ba13131ef74a0d78d2a
│  │  ├─ a4
│  │  │  ├─ 1fe685c454cef2ad9ee2299088a04d24f53a45
│  │  │  └─ 35229e67ac2cdb138a7f678b0955c8573b08b2
│  │  ├─ a5
│  │  │  ├─ 41b978f815833659fd7fbfb6119888154e7a25
│  │  │  └─ 92ec046735a00c83a8f069786dd2485d96218e
│  │  ├─ a6
│  │  │  └─ b1175a2f8f4cba872f2329488ec0fbe760f9b2
│  │  ├─ a7
│  │  │  ├─ 74dbc884bcf24855f2473146ad2d44d9bd228c
│  │  │  └─ 916c4c2f55043318afd342b420ebefbf67c5df
│  │  ├─ a9
│  │  │  └─ 98ec376e61dafaf3d9d89ec67f2a8b12ba574a
│  │  ├─ aa
│  │  │  └─ e22c59f987dfab705cd07494daa736dab10c0e
│  │  ├─ ab
│  │  │  └─ ae422255f04e14a96668ac1f338af6c11481de
│  │  ├─ ac
│  │  │  └─ 2d83d3dc44d4eaba2b2596bab5b245c9c6b468
│  │  ├─ ad
│  │  │  ├─ 3a8904bb04bbf99b65c4dc569bffdeb7ba4a84
│  │  │  └─ fbf11a616c83d21de3246c97c769e606ceeefd
│  │  ├─ ae
│  │  │  └─ ae0aceb296382ec285e04cfccef4b2d8fe9415
│  │  ├─ b0
│  │  │  ├─ ac0343dcfef78510a7e89fbb0f18a5dabcdb90
│  │  │  └─ fd6262781db9cd2ec918af5f1659d5ee087d78
│  │  ├─ b1
│  │  │  └─ 3fb20d557416857ec898ecd6f9ef3ea08097ff
│  │  ├─ b2
│  │  │  └─ c4de95dac039cd681631efef7657ab1c1ecd41
│  │  ├─ b5
│  │  │  ├─ 1eb57c66ab065507582f1a79e6b28263a7b2e1
│  │  │  ├─ 33b2b1f5ab64f2f8b0dfcee28d2e1f9ef44155
│  │  │  ├─ 820fd029ace0be3dc75c9af8a83920940cc779
│  │  │  └─ db300a8593ff5323445f25a3aaaa3c1a03c458
│  │  ├─ b6
│  │  │  ├─ 4007ae1e1e4896edc1899191f0a0ecc128c3e7
│  │  │  └─ 552ab8706096179ab21d2a71bdf0474ce96141
│  │  ├─ b7
│  │  │  └─ 3597bbeb3d080c573f321897d31cae8ac20b9e
│  │  ├─ b8
│  │  │  ├─ 2b01ede0cf537f0e059f6defecc6f4f62d6aa1
│  │  │  └─ 34ff985f76728e274858268cb596fbb9be13c6
│  │  ├─ ba
│  │  │  └─ 4a8017f248fc69b2350fa6db396493f662e1dc
│  │  ├─ bb
│  │  │  └─ 970b7b484ae47420be693d410be07169e62b9e
│  │  ├─ bd
│  │  │  └─ 69cffae55ed88d428f472543a8431491ae96df
│  │  ├─ be
│  │  │  ├─ 2203875973a1ed3463ef642d897a8fb85c8621
│  │  │  └─ 7039286d5aa042ee79b57dd7b0b69ffa794488
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c2
│  │  │  ├─ ccd1f3a0a931e1e0f325ebf06f413539afa757
│  │  │  └─ e11b333e7001380f81e621ba3fbbd08948dc07
│  │  ├─ c4
│  │  │  └─ d69c743a9fc1f60cd740aba2a1fad2cf98c363
│  │  ├─ c5
│  │  │  ├─ 8c3d414a79f5bb397fbed31ff7947ec1f3b300
│  │  │  └─ 92ac80aacc232501775c55dbd0333efb2f972f
│  │  ├─ c6
│  │  │  └─ 114f4e63aa2849d0ed6173d186ca2aee5fa24f
│  │  ├─ c8
│  │  │  ├─ 23c6bf03333ba71377d2cbd199efbf5583df9d
│  │  │  ├─ 4d4a3fb86f63c84dbaefeed1d3688c2a6e7e26
│  │  │  └─ 902a27de2e513e6f9ce656a642157605634312
│  │  ├─ cb
│  │  │  └─ da3871e383ee9f3d797868deb726417323dbdb
│  │  ├─ cd
│  │  │  ├─ b9aac3943f5b8d5f9fa464ecc5119b796b8414
│  │  │  └─ bdb281f1861e4ce9287f6cf04f6a037bd277fe
│  │  ├─ ce
│  │  │  └─ 983bd64f2e7d1a939b1cb55cd0a29dfd84b6d7
│  │  ├─ cf
│  │  │  ├─ 8b3f0fbb852e9bf7858833eec034228ae9d79b
│  │  │  └─ ba837bcced8d98d2dd4167a337d18c0ed65f00
│  │  ├─ d0
│  │  │  └─ 679104bdaba20520d701419228bed9fc60e7f6
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ d4
│  │  │  ├─ 7c043a54f8b495dc79127f588bd00d3d6395b1
│  │  │  ├─ 8467878c7a3c809462b8d4273bec9494744b0d
│  │  │  └─ 948e536137208211b1d9b141b98761291686ae
│  │  ├─ d5
│  │  │  ├─ 15364cbc8112674d430f327b3087296778c6c6
│  │  │  ├─ 995ee5c1238adf2e8237702f1166b0fab721d5
│  │  │  ├─ a271f8edf9518223b2d704b23df29e996f77d4
│  │  │  └─ bfe63d07623ada288e3db0d4c0d1a9e73c29c9
│  │  ├─ d6
│  │  │  └─ 6433433a1d52f395f0cb896f621e541f3daf21
│  │  ├─ d9
│  │  │  └─ 9d24cdc8607e23dcbc5587a5b748d71771c32c
│  │  ├─ da
│  │  │  └─ 71ac0c76d1f8810a9c0cf9e975df34f21b9399
│  │  ├─ db
│  │  │  └─ 924cd8b59c9e695bfe0ec898dcc3a980e7bd96
│  │  ├─ dc
│  │  │  ├─ 325e87ca71133f4b0b70e2fde0732cd1d55002
│  │  │  └─ e976423164b19f1dc033cd4b182e83ae07892e
│  │  ├─ dd
│  │  │  ├─ 2ff4cfc5e05b66dfc5176599c1e1abf74f3169
│  │  │  ├─ 426df26ef1250e3ac1ba3ea6c7dce059548fec
│  │  │  ├─ 6de76d02770c8b7fca10a0282a76a6dd885a9e
│  │  │  ├─ bbe438bf8f184b6d6692a312ab776dcd3773fe
│  │  │  └─ c4637488812ff415cb9c472a6daae6fb3e0c0f
│  │  ├─ df
│  │  │  └─ 4f7fea902cf170640fa9a534835666977b7bad
│  │  ├─ e0
│  │  │  ├─ 6a4454ab0627b0a0cc46229eaf4bac8379deb2
│  │  │  ├─ 96dd42c9ce07d539ac1f5f76c51cc7a29edb0e
│  │  │  └─ 9c64e3b6123924a76af567859b5818f3a85ebf
│  │  ├─ e1
│  │  │  └─ 4ed73a3d4043925dc08797007fd18c764cedea
│  │  ├─ e2
│  │  │  └─ 895f2c3b1d13343d805be2f6cff2135dd9bc2a
│  │  ├─ e3
│  │  │  ├─ 3bb3f840cf0c27ba024742f132e9d4f1aed6a5
│  │  │  └─ f85fd71b3bdab742873c12d2bb38f8fb6267d0
│  │  ├─ e4
│  │  │  └─ cf7aa2565b329928f54f62a76a3fcf07045e98
│  │  ├─ e5
│  │  │  └─ efddedb0fc51b2169a1538a683251efb448f1e
│  │  ├─ e6
│  │  │  └─ c70ab1db45d1dff8c7da4425d2935ea8b2c369
│  │  ├─ e8
│  │  │  └─ d4bd4808fa23bec6192daed0b88db7dcaf2a4f
│  │  ├─ e9
│  │  │  └─ 737fc91f577af404d0149f88afbef15135b6ab
│  │  ├─ ea
│  │  │  ├─ 36f87e8ae54e8f2602352da7b31eff01a97a73
│  │  │  └─ fe66e3b6335937e12124018a59c597d1b21089
│  │  ├─ ec
│  │  │  └─ 3dc3b8e9e77e68925022fab72a7c03cbf8d0bf
│  │  ├─ ed
│  │  │  ├─ 935d70c027302a60ea276d9b1fe152dff80053
│  │  │  └─ bde75af36026912e069168eb44b48a4aaabfac
│  │  ├─ ee
│  │  │  └─ a1dbfca3ea6ac4960697ca8fa74820ca3222f9
│  │  ├─ f0
│  │  │  └─ 8136b98081d501710fd65624c756250428ee98
│  │  ├─ f5
│  │  │  ├─ 2e6a8fb6961387bf12d20d7f1595e1716dd807
│  │  │  ├─ c276574ce9af1b2e5c84466eae791d3729c3d1
│  │  │  └─ c45dc036071120098a00eb00fd50860dc00469
│  │  ├─ f8
│  │  │  ├─ 532d9fbf6aa2fde395f738a2e0a3c91842ab8e
│  │  │  ├─ 863be113e1e410e8e02bbce7f9c00f8a2120fc
│  │  │  └─ 8d273f63f8e96005e6407d1485801b640ba3bb
│  │  ├─ f9
│  │  │  ├─ 6c959b893ba596419ea681e7f9b026f4a79a74
│  │  │  └─ 831fe3144445e9427be5d63e852be555461659
│  │  ├─ fa
│  │  │  ├─ 179419a488ebe8a51a16cbb9fd55bec46cdf4a
│  │  │  ├─ 47906110bbffb1d7511607cd2083026a29118e
│  │  │  ├─ c24e0e013a7864bc6d0ef053c5b304e92b0f66
│  │  │  └─ c3de572265391f530b0c79493c7beedd6d501e
│  │  ├─ fb
│  │  │  └─ 6d0f653a368e9abe832a793a8f4e2fe23ece1b
│  │  ├─ fc
│  │  │  ├─ 6dfd2c4fed0bcc1c251c967ddbcc8375e0480b
│  │  │  └─ aad62001f0c41c1db039cbfbfdaca604819e47
│  │  ├─ fd
│  │  │  └─ 2b28e447cb22842a67c2b9b91502541e04cfc4
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ app
│  ├─ actions
│  │  ├─ getBookById.ts
│  │  ├─ getBooks.ts
│  │  ├─ getCurrentUser.ts
│  │  ├─ getExchanges.ts
│  │  ├─ getFavoriteBooks.ts
│  │  ├─ getOwner.ts
│  │  └─ getUserBooks.ts
│  ├─ api
│  │  ├─ books
│  │  │  ├─ route.ts
│  │  │  └─ [bookId]
│  │  │     └─ route.ts
│  │  ├─ exchanges
│  │  ├─ favorites
│  │  │  └─ [bookId]
│  │  │     └─ route.ts
│  │  ├─ register
│  │  │  └─ route.ts
│  │  └─ users
│  │     └─ route.ts
│  ├─ books
│  │  └─ [bookId]
│  │     ├─ BookClient.tsx
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ Avatar.tsx
│  │  ├─ books
│  │  │  ├─ BookCard.tsx
│  │  │  ├─ BookCategory.tsx
│  │  │  ├─ BookExchange.tsx
│  │  │  ├─ BookHead.tsx
│  │  │  └─ BookInfo.tsx
│  │  ├─ Button.tsx
│  │  ├─ CategoryBox.tsx
│  │  ├─ ClientOnly.tsx
│  │  ├─ Container.tsx
│  │  ├─ EmptyState.tsx
│  │  ├─ FavoriteButton.tsx
│  │  ├─ Heading.tsx
│  │  ├─ Image.tsx
│  │  ├─ inputs
│  │  │  ├─ AvatarUpload.tsx
│  │  │  ├─ CategoryInput.tsx
│  │  │  ├─ CountrySelect.tsx
│  │  │  ├─ CoverUpload.tsx
│  │  │  ├─ DistrictSelect.tsx
│  │  │  ├─ GenreSelect.tsx
│  │  │  ├─ Input.tsx
│  │  │  └─ SearchForm.tsx
│  │  ├─ modals
│  │  │  ├─ EditModal.tsx
│  │  │  ├─ EditProfileModal.tsx
│  │  │  ├─ LoginModal.tsx
│  │  │  ├─ Modal.tsx
│  │  │  ├─ PostModal.tsx
│  │  │  ├─ RegisterModal.tsx
│  │  │  └─ SearchModal.tsx
│  │  └─ navbar
│  │     ├─ Categories.tsx
│  │     ├─ Logo.tsx
│  │     ├─ MenuItem.tsx
│  │     ├─ Navbar.tsx
│  │     ├─ NavbarButtons.tsx
│  │     └─ UserMenu.tsx
│  ├─ exchanges
│  │  ├─ ExchangesClient.tsx
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ favorites
│  │  ├─ FavoritesClient.tsx
│  │  └─ page.tsx
│  ├─ genres.ts
│  ├─ globals.css
│  ├─ hooks
│  │  ├─ useAlmatyDistricts.ts
│  │  ├─ useBook.ts
│  │  ├─ useCountries.ts
│  │  ├─ useEditModal.ts
│  │  ├─ useEditProfileModal.ts
│  │  ├─ useFavorite.ts
│  │  ├─ useGenres.ts
│  │  ├─ useLoginModal.ts
│  │  ├─ usePostModal.ts
│  │  ├─ useRegisterModal.ts
│  │  ├─ useSearchModal.ts
│  │  └─ useUser.ts
│  ├─ kazakhstan-districts.ts
│  ├─ kazakhstanRegions.ts
│  ├─ layout.tsx
│  ├─ libs
│  │  ├─ fetcher.ts
│  │  └─ prismadb.ts
│  ├─ page.tsx
│  ├─ posts
│  │  ├─ page.tsx
│  │  └─ PostsClient.tsx
│  ├─ profile
│  │  ├─ page.tsx
│  │  └─ ProfileClient.tsx
│  ├─ providers
│  │  ├─ ModalsProvider.tsx
│  │  └─ ToasterProvider.tsx
│  └─ types
│     └─ index.ts
├─ graph.png
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  └─ api
│     ├─ auth
│     │  └─ [...nextauth].ts
│     └─ users
│        └─ route.ts
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ images
│  │  ├─ Logo.png
│  │  ├─ Logo.svg
│  │  ├─ placeholder.png
│  │  └─ placeholder.webp
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json

```
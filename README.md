# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wongjinwei/makefun-post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wongjinwei/makefun-post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun](https://make.fun) bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01):
a program that hands in the address of one X post promoting
make.fun's make-your-own-bounty post.

## The post

The entry post is a quote of [@makefunai](https://x.com/makefunai)'s
make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), posted from the
public X account @Cochidubose with a photo of its own attached and
make.fun, the recommended sponsor line and the entrant's play code in
its text:

- Post: https://x.com/Cochidubose/status/2125577595811180913
- Posted: 2026-11-25
- Score: replies + reposts + quotes (views and likes do not count)

## What the program does

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do. The post itself is the entry.

- Node 22.18+ (tested on Node v24.22.1), standard library only, no network
- `POST.json` holds the post's address:
  `{"url": "https://x.com/Cochidubose/status/2125577595811180913"}`

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see LICENSE.

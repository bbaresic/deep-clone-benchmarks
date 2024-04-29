# Deep Clone Benchmarks

This tries to benchmark different deep cloning libraries. This is a micro-benchmark, and that comes with caveats.

I use a nested object that mimics a Prebid bid.

## Why

Currently Prebid uses a very outdated version of `just-clone`. I wanted to update it, but decided to check for other and better alternatives that are faster and maybe use less memory.

I used the latest versions of the libraries.

## Prerequisites

- Node
- NPM

I use [proto](https://moonrepo.dev/proto) to manage my Node/NPM versions.
To get the same version that I am using, look into the `.prototools` file.

## How to Run in Node

1. `npm i`
2. `npm run start`

### Run in Browser

1. `npm run start-browser`
2. Open the link that shows up in console, the default one is [one](http://localhost:5000)

## My Results (MacBook Pro M2)

[Klona](https://github.com/lukeed/klona) has consistently been the best.

`just-clone prebid version` is the version that prebid currently uses.

| Index | Task Name                        | ops/sec  | Average Time (ns)  | Margin   | Samples |
| ----- | -------------------------------- | -------- | ------------------ | -------- | ------- |
| 0     | 'klona (json)'                   | '18,876' | 52974.84801610396  | '±0.30%' | 18877   |
| 1     | 'cloneDeep'                      | '9,449'  | 105822.30772486977 | '±0.30%' | 9450    |
| 2     | 'nanoCopy'                       | '6,243'  | 160155.17277822155 | '±0.49%' | 6245    |
| 3     | 'fastCopy'                       | '5,291'  | 188976.84297051746 | '±0.41%' | 5292    |
| 4     | 'just-clone prebid version (v1)' | '3,455'  | 289361.6163194379  | '±0.28%' | 3456    |
| 5     | 'copyAnything'                   | '3,064'  | 326358.4564437056  | '±0.40%' | 3065    |
| 6     | 'structured-clone'               | '2,916'  | 342877.75934179034 | '±0.39%' | 2917    |
| 7     | 'lodash CloneDeep'               | '2,879'  | 347232.26136757986 | '±0.42%' | 2881    |
| 8     | 'json-parse-stringify'           | '2,537'  | 394109.38297872065 | '±7.14%' | 2538    |
| 9     | 'just-clone (v6)'                | '2,499'  | 400018.0847999996  | '±0.37%' | 2500    |
| 10    | 'ramda'                          | '391'    | 2553004.711734691  | '±0.49%' | 392     |

### Browser Results
![image](https://github.com/bbaresic/deep-clone-benchmarks/assets/153560835/05922b81-59d0-4253-8b10-46d7bd27607d)


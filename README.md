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

## How to Run

1. `npm i`
2. `npm run start`


## My Results (MacBook Pro M2)

[Klona](https://github.com/lukeed/klona) has consistently been the best.
`just-clone current prebid version` is the version that prebid currently uses.

| (index) | Task Name                           | ops/sec | Average Time (ns)  | Margin   | Samples |
|---------|-------------------------------------|---------|--------------------|----------|---------|
|    0    | 'klona (json)'                      | '20,660'| 48402.30424471798 | '±0.25%' |  20661  |
|    1    | 'cloneDeep'                         | '10,537'| 94900.40719301741 | '±0.23%' |  10538  |
|    2    | 'nanoCopy'                          |  '7,018'| 142486.29505626977| '±0.34%' |   7019  |
|    3    | 'fastCopy'                          |  '5,873'| 170254.3576779043 | '±0.34%' |   5874  |
|    4    | 'copyAnything'                      |  '3,890'| 257029.08789516272| '±0.35%' |   3891  |
|    5    | 'just-clone current prebid version' |  '3,856'| 259277.9375161922 | '±0.19%' |   3857  |
|    6    | 'lodash CloneDeep'                  |  '3,298'| 303136.97575022804| '±0.33%' |   3299  |
|    7    | 'just-clone'                        |  '2,947'| 339314.60786974087| '±0.23%' |   2948  |
|    8    | 'ramda'                             |    '416'| 2403588.8273381316| '±0.25%' |    417  |


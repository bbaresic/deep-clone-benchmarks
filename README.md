# Deep Clone Benchmark

This tries to benchmark different deep cloning libraries. This is a micro-benchmark, and that comes with caveats.

I use a nested object that mimics a Prebid bid.

## Why

Currently Prebid uses a very outdated version of `just-clone`. I wanted to update it, but decided to check for other and better alternatives that are faster and maybe use less memory.

## Prerequisites

- Node
- NPM

I use [proto](https://moonrepo.dev/proto) to manage my Node/NPM versions.
To get the same version that I am using, look into the `.prototools` file.

## How to Run

1. `npm i`
2. `npm run start`


## My results

[Klona](https://github.com/lukeed/klona) has consistently been the best.

| (index) | Task Name          | ops/sec | Average Time (ns)  | Margin   | Samples |
|---------|--------------------|---------|--------------------|----------|---------|
|    0    | 'klona (json)'     | '19,492'|  51302.83568460547| '±0.70%' |  19493  |
|    1    | 'cloneDeep'        |  '7,110'| 140635.57142857212| '±3.18%' |   7112  |
|    2    | 'nanoCopy'         |  '6,391'| 156462.48529411523| '±1.13%' |   6392  |
|    3    | 'fastCopy'         |  '5,529'| 180841.78264013998| '±0.99%' |   5530  |
|    4    | 'copyAnything'     |  '3,774'| 264919.6235761788 | '±0.58%' |   3775  |
|    5    | 'lodash CloneDeep' |  '2,764'| 361753.05388788506| '±1.54%' |   2765  |
|    6    | 'just-clone'       |  '2,272'| 440072.02243730053| '±4.32%' |   2273  |
|    7    | 'ramda'            |    '381'| 2619699.1544502573| '±2.90%' |   382   |

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

`just-clone prebid version` is the version that prebid currently uses.

| Index | Task Name                        | ops/sec  | Average Time (ns)  | Margin   | Samples |
|-------|----------------------------------|----------|--------------------|----------|---------|
| 0     | 'klona (json)'                   | '18,484' | 54098.02867188367  | '±0.35%' | 18485   |
| 1     | 'cloneDeep'                      | '9,935'  | 100648.60175120902 | '±0.35%' | 9936    |
| 2     | 'nanoCopy'                       | '6,409'  | 156021.21341654425 | '±0.44%' | 6410    |
| 3     | 'fastCopy'                       | '5,342'  | 187172.9230769353  | '±0.48%' | 5343    |
| 4     | 'just-clone prebid version (v1)' | '3,514'  | 284508.511237554   | '±0.27%' | 3515    |
| 5     | 'copyAnything'                   | '3,473'  | 287915.14536556514 | '±0.35%' | 3474    |
| 6     | 'json-parse-stringify'           | '3,030'  | 330029.9868030314  | '±0.21%' | 3031    |
| 7     | 'lodash CloneDeep'               | '2,925'  | 341805.6298701318  | '±0.38%' | 2926    |
| 8     | 'just-clone (v6)'                | '2,640'  | 378672.5918212722  | '±0.35%' | 2641    |
| 9     | 'ramda'                          | '371'    | 2689549.1962365555 | '±0.36%' | 372     |
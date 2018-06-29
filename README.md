# callbag-delay

[![Greenkeeper badge](https://badges.greenkeeper.io/janryWang/callbag-delay.svg)](https://greenkeeper.io/)

> Just delay in callbags chain



## Install

```
npm install --save  callbag-delay
```

## Usage

```
import {fromIter,pipe,forEach} from 'callbag-basics'
import delay from 'callbag-delay'

//no pipeline

pipe(
    fromIter(
        [1,2,3,4]
    ),
    delay(1000),
    forEach((data)=>{
        console.log(data)
    })
)

//pipeline syntax

fromIter([1,2,3,4])
   |> delay(1000)
   |> forEach((data)=>{
       console.log(data)
    })

```

### LICENSE

The MIT License (MIT)

Copyright (c) 2018 JanryWang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
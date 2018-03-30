import test from "ava"
import { fromIter, pipe, forEach } from "callbag-basics"
import delay from "./lib"



test.cb("normal", t => {
    let i = 1
    fromIter([1,2,3])
        |> delay(200)
        |> forEach(i => {
            t.is(i, i)
            t.end()
        })

})


export default (duration)=>source=>{
    return (type,sink)=>{
        if(type !== 0) return
        source(0,(t,d)=>{
            if(t !== 1) return sink(t,d)
            let id = setTimeout(()=>{
                clearTimeout(id)
                sink(1,d)
            },duration)
        })
    }
}
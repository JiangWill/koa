let p = new Promise((resolve,reject)=>{
   resolve(1)
})
function abc(res){
   return new Promise((resolve,reject)=>{
      console.log(res)
      reject('123')
   })
}

p.then(res=>{
   return abc(res)
}).then(val=>{
   console.log(val)
}).catch(err=>{
   console.log('err',err)
})
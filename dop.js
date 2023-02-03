const api = {
  async save(){

  },
  async read(){
    return {name: 'Dasha'}
  }
}

async function run (){
  await api.save()
  console.log('saved')
  let data = await api.read()
  console.log('read: ',data)
}
run()
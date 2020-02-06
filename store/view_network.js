export const state = () => ({
    fileName : "/network_test1.json"
  })
  
  export const mutations = {
    changeData (state, name){
      console.log(name);
      state.fileName = name;
    }
  }
  
  export const actions = {

  }

  
export const getters = {
  getFileName: state => {
    return state.fileName
  }
}
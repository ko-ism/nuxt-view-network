<template>
  <div class="network">
    <select v-model="fileName">
      <option disabled value="">Please select one</option>
      <option>/network_test1.json</option>
      <option>/network_test2.json</option>
    </select>
    <span>Selected: {{ fileName }}</span>
      <svg width="960" height="960"></svg>
      <!-- fileDataをそのまま扱う手法はうまくいっていない。
      <button v-on:click="change('/network_test1.json')">1</button>
      <button v-on:click="change('/network_test2.json')">2</button> -->
  </div>
  
</template>

<script>
  export default{
      data: function(){
        return {
          fileName: "/network_test1.json"
        }
      },
      created: function() {
        
      },
      mounted: async function(){
        // fileDataをそのまま扱う手法はうまくいっていない。
        // await this.$store.dispatch('view_network/changeDataAction', this.fileName);

        this.$store.dispatch('view_network/viewNetwork', this.fileName);

      },
      watch: {
        fileName: function(newValue) {
          console.log("watch:" + newValue);

          // 描画されている情報を削除
          d3.select('svg').selectAll('*').remove();

          // 新しいファイルで再描画
          this.$store.dispatch('view_network/viewNetwork', newValue);

        }
      },
      methods: {
        // fileDataをそのまま扱う手法はうまくいっていない。
        // change(name){
        //     // console.log(name);
        //     // this.item_file = name;
        //     this.$store.dispatch('view_network/changeDataAction', name);
        // }

      },
      computed: {

      }
  }
</script>







<style>
.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}

text {
  font-family: sans-serif;
  font-size: 10px;
}
</style>
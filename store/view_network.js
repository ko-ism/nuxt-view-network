// fileDataをそのまま扱う手法はうまくいっていない。
import axios from 'axios'

export const state = () => ({
    // fileDataをそのまま扱う手法はうまくいっていない。
    // fileName : "/network_test1.json",
    // fileData : ""
  })
  
  export const mutations = {
    // fileDataをそのまま扱う手法はうまくいっていない。
    // changeData (state, data){
    //   console.log("changeData:" + data);
    //   state.fileData = data;
    // }
  }
  
  export const actions = {
    // fileDataをそのまま扱う手法はうまくいっていない。
    // changeDataAction (context, name){
    //   axios
    //   .get(name)
    //   .then((response) => (context.commit('changeData', response["data"]) ))
    // },

    viewNetwork (state, name){
      var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

      var color = d3.scaleOrdinal(d3.schemeCategory20);

      var simulation = d3.forceSimulation()
          .force("link", d3.forceLink()
              .id(function(d) { return d.id; }).distance(function(d){ return d.value*400}))
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(width / 2, height / 2));

      console.log("view_network:" + name);

      d3.json(name, function(error, graph) {
        if (error) throw error;
      // fileDataをそのまま扱うパターンはうまくいっていない。
      // var graph = state.fileData;
      // console.log(graph.links);
      // if (graph != undefined){
        

        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            // fileDataをそのまま扱う手法はうまくいっていない。
            // .data(state.fileData.links)
            .enter().append("line")
            // 線の太さ
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(graph.nodes)
            // fileDataをそのまま扱う手法はうまくいっていない。
            // .data(state.fileData.nodes)
            .enter().append("g")
            
        var circles = node.append("circle")
            .attr("r", 5)
            .attr("fill", function(d) { return color(d.group); })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        var lables = node.append("text")
            .text(function(d) {
                return d.id;
            })
            .attr('x', 6)
            .attr('y', 3);

        node.append("title")
            .text(function(d) { return d.id; });

        simulation
            .nodes(graph.nodes)
            // fileDataをそのまま扱う手法はうまくいっていない。
            // .nodes(state.fileData.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);
            // fileDataをそのまま扱う手法はうまくいっていない。
            // .links(state.fileData.links);

        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node
                .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
                })
        }
      });

      function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
      }

      function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
      }

      function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
      }

      }


// fileDataをそのまま扱う手法はうまくいっていない。
    // }




  }

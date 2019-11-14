var screen = {width:400,height:500}
var margins = {top:10,right:50,bottom:50,left:50}

var PenguinPromise = d3.json("classData.json")
PenguinPromise.then(function(penData)
  {

    console.log(penData)
    
    setup(penData)

},
 
    function(err){
                    
});

var setup = function(array2D)
{d3.select("svg")
 .attr("width",screen.width)
 .attr("height",screen.height)
 .append("g")
 .attr("id","graph")
 .attr("transform","translate("+margins.left+","+margins.top+")");
 
 
 var width = screen.width - margins.left - margins.right;
 var height = screen.height - margins.top - margins.bottom;
 
 var xScale = d3.scaleLinear()
                .domain([0,38])
                .range([0,width])
 
 var yScale = d3.scaleLinear()
                .domain([0,10])
                .range([height,0])
 
 var xAxis = d3.axisBottom(xScale)
 var yAxis = d3.axisLeft(yScale)
 
 d3.select("svg")
 .append("g")
 .classed("axis", true);
 
 d3.select(".axis")
   .append("g")
   .attr("id", "xAxis")
   .attr("transform","translate("+margins.left+","+(margins.top+height)+")")
   .call(xAxis)
 
 d3.select(".axis")
   .append("g")
   .attr("id","yAxis")
   .attr("transform","translate(25,"+margins.top+")")
   .call(yAxis)
 
 drawArray(array2D, xScale, yScale, 0)

}

var drawArray = function(array2D, xScale, yScale, index)
{
    var arrays = d3.select("#graph")
                   .selectAll("circle")
                   .data(array2D[index])
                   .enter()
                   .append("circle")
                   .attr("cx", function(num, index)
                        {
                       return xScale(index);
                   })
                   .attr("cy", function(num)
                        {
                       return yScale(num);
                   })
                   .attr("r",3)
}
                         
                         
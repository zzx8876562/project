(function() {
  //随机方块
  // 把方块抽象成对象
  
  function Diamond(width, height, color, x, y,map) {
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || "yellow";
    this.x = x;
    this.y = y;
    this.div = document.createElement("div");
    var map =document.querySelector('.map');
    map.appendChild(this.div);
    this.init(map);
  }
  //外部可以访问 方块
  window.Diamond = Diamond;
  //设置个随机方法对象

  //  两个整数之间的包含两个整数 的范围
  // Diamond.prototype.getRandom = function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  //设置方块的样式在地图上显示
  Diamond.prototype.init = function(map) {
   
    // var elements=[];
   
    // remove();
    
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.color =
      "rgb(" +
      getRandom(0, 255) +
      "," +
      getRandom(0, 255) +
      "," +
      getRandom(0, 255) +
      ")";
    this.div.className = "box";
    this.div.style.backgroundColor = this.color;
    this.x = Math.floor(
              getRandom(0, map.offsetWidth / this.width - 1) * this.width
            );
    this.y = Math.floor(
              getRandom(0, map.offsetHeight / this.height - 1) * this.height
            );
            this.div.style.left = this.x + "px";
            this.div.style.top = this.y + "px";
    
            
          
    // elements.push(div);
   
    
    //移出div
    // console.log(1); 
    
    //  function  remove(){
    //   for(var i=0;i<elements.length;i++){
    //       var e=elements[i];
    //       e.parentNode.removeChild(e);
    //       elements.splice(i,1);
    //       console.log(111111);
    //   }
    //  };
     function getRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
  };

})();

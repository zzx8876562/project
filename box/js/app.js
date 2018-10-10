var map =document.querySelector('.map');
var d = new Diamond();
   //创建个定时器 
  
      var num= setInterval(function(){
        
        d.init(map);
        
      },1000);

      // 给方块注册点击事件
      map.onclick=function(e){
        var t = e.target;
        if(t.className==='box'){
          alert('恭喜你赢了');
          clearInterval(num);
          map.onclick=null;
        }else{
          console.log('继续');
        }
      }
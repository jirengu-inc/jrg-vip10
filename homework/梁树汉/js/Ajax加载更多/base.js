      var btn = document.querySelector('.btn');
          ul = document.querySelector('.ct');
          start = 3;
          lock =false;
      btn.addEventListener('click',function(){
        if(!lock){
          lock = true;
          ajax({
            url:'/getMore',
            type:'get',
            date:{
              start:start,
              length:5
            },
            success:function(e){
              var fragment = document.creatDocumentFrame();
              for(i=0;i<e.length;i++){
                var newLi=document.createElement('li');
                newLi.innerText=e[i];
                newLi.setAttribute('class','items');
                fragment.appendChild(newLi)
              };
              ul.appendChild(fragment);
              lock=false;
              start+=5;
            },
            error: function(){
              alert('error');
              lock=false;
            }
          })
        }else{
          return;
        }
      },false)


      function ajax(obj){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function(){
          if(xhr.readystate===4){
            if(xhr.status===200||xhr.status===304){
              var data = JSON.parse(xhr.responseText);
              obj.success(data);
            }else{
              obj.error();
            }
          }
        };
        var dataStr ='';
        for(key in obj.data){
          dataStr+=key+'='+obj.data[key]+'&'
        };
        dataStr = dataStr.substr(0,dataStr.length);
        if(obj.type.toLowerCase==='get'){
          xhr.open('get',obj.url+'?'+dataStr,true);
          xhr.send();
        }else if(obj.type.toLowerCase==='post'){
          xhr.open('post',obj.url,true);
          xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
          xhr.send(dataStr); 
        }
      }
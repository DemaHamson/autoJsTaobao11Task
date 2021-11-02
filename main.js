
"auto";


function _tap(item)

{

  click(item.bounds().centerX(),item.bounds().centerY());

}

function start() {
  while(text("去浏览").exists()) {
    toast(" go go");
    var a= text("去浏览").findOne();
    _tap(a);
    sleep(18000);
    if(textContains("任务已完成").exists()
       ||textContains("明天再来").exists() ){
        
    } else {
        sleep(10000);
    }
    back();
    var b = random(1000,2000);
    sleep(b);
  }
  toast("没有了");
}
 
function secondTask(){
    className("android.widget.ListView").findOne().children().forEach(child => {
       var target = child.findOne(textContains("浏览15"));
       if(target==null){
           
       } else {
           var btn=child.findOne(text("去完成"));
           if(btn==null) {
               
           } else{
               _tap(btn);
               // 天天领钱
              sleep(2000);
              if(textContains("Jggg==").exists()){
                 var t=textContains("Jggg==").findOne();
                // _tap(t)
                click(device.width*300/1080,device.height*1700/2340);

                 sleep(2000);
              }
              sleep(16000);
              if(textContains("任务已完成").exists()
                ||textContains("明天再来").exists() ){
        
              } else {
                 sleep(10000);
              }

              back();
              var b = random(1000,2000);
              sleep(b);

           }
        }
    });
}

start();
secondTask();
toast("没有了");




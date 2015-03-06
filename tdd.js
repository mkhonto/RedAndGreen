var passed = 0;
var failed = 0;
var total = 0;

var assert = {
       equals: function(expectedResults, returnResults) {
         total = passed+failed;

         var newElement = document.createElement('div');
         newElement.id = "myElement"+total;
         newElement.className = "test"
         //document.body.appendChild(newElement);
         document.getElementById("tests").appendChild(newElement);

        var myDiv = new RedOrGreen(newElement.id);

        if(expectedResults===returnResults){

          passed++;
          myDiv.makeGreen();
        }
	      else {

         failed++;
         myDiv.makeRed();
        }
        total = passed+failed;
      
        //var newEl = document.createElement('p');
        document.getElementById("progress").innerHTML ='passed:'+passed+' failed: '+failed+ ' totalpassed: '+total;
        //newElement.innerHTML = newEl.innerHTML;
      }
};

        var TestMyCode={
          run:function(testfunction,functiontoreturn){
            functiontoreturn(assert);
          }
        };

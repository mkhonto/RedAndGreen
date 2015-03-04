var passed = 0;
var failed = 0;
var total = 0;

var assert = {
       equals: function(expectedResults, returnResults) {
         total = passed+failed;

        var newElement = document.createElement('div');
        newElement.id = "myElement"+total;
        document.body.appendChild(newElement);
    
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
      
      var newEl = document.createElement('p');
        newEl.innerHTML='passed:'+passed+' failed: '+failed+ ' totalpassed: '+total;
        document.body.appendChild(newEl);
      }
};

        var TestMyCode={
          run:function(testfunction,functiontoreturn){
          functiontoreturn(assert);
          }
        };

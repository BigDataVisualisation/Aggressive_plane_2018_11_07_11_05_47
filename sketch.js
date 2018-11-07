var data = [];
var ready = false;

function setup() {
  createCanvas(600, 600);
	
	 d3.csv("gun-violence.csv", function(d) {

    return {
      date: d['Incident Date'],
			state:d.State,
      adress: d.Address
    };
}).then(function(csv) {
    data = csv;
    ready = true;
     console.log(data);
   });
   
}  
  
function draw() {
 
  if (!ready) {
    background(255, 0, 0);
    return;
     
  } else {
    background(255);
  }
  background(255,0,0);
  
};

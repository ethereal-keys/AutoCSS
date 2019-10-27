
//$.getJSON('.json',function(data){console.log(data);})
var y = {};
function setup() {
  loadJSON('tree.json', gotData);
  loadStrings('domt.txt',pickString)
}

function gotData(data) {
  // The JSON is now in data!
  y=data;
  console.log(y);
  editor.addComponents(`<div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYOFDahDDZNUenjnDv0xdbDhpLc_9FVSNhyZn9Vxmujd6g-8cP" />
  <span title="foo">Hello world!!!</span>
</div>`);
}

function pickString(result){
  editor.addComponents(result[0]);
}

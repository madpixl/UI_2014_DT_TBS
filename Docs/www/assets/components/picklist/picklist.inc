 <div id="multi-transfer-container" class="pick-list row">
 
 <!-- source container.... -->
  <div id="source-container" class="col-sm-4"> 
    <div class="panel-primary">
      <div class="panel-heading">
       <h3 id="source-title" class="panel-title">
         Available
        </h3>
      </div>
       <ul id="source-list" class="list-group list-unstyled source-list">
          <li class="list-group-item">Accordion</li>
          <li class="list-group-item">Autocomplete</li>
          <li class="list-group-item">Button</li>
          <li class="list-group-item">Datepicker</li>
          <li class="list-group-item">Dialog</li>
          <li class="list-group-item">Progressbar</li>
          <li class="list-group-item">Slider</li>
          <li class="list-group-item">Tabs</li>
        </ul>
    </div>
    </div>
   
   <!-- buttons  -->
   
  <div id="transfer-buttons-container" class="col-sm-2 dti-vspace">
    <div id="transfer-buttons" class="btn-group-vertical">
      <button class="btn btn-default" id="add-button"><i class="arrow right"></i>Add</button>
      <button class="btn btn-default" id="add-all-button"><i class="arrow right"></i><i class="arrow right"></i>Add All</button>
      <button class="btn btn-default" id="remove-button"><i class="arrow left"></i>Remove</button>
      <button class="btn btn-default" id="remove-all-button"><i class="arrow left"></i> <i class="arrow left"></i> Remove All</button>
    </div>
  </div>
  
 <!-- target  container.... -->
    <div id="target-container" class="col-sm-4"> 
   <div class="panel-primary">
      <div class="panel-heading">
    <h3 id="target-title" class="panel-title">Selected</h3>
    </div>
    <ul id="target-list" class="list-group list-unstyled target-list">
    </ul>
  </div>
  </div>
  <!-- buttons  -->
  <div id="reorder-buttons-container" class="dti-vspace col-sm-2 pull-right">
    <div id="reorder-buttons" class="btn-group-vertical">
      <button class="btn btn-default dropup" id="move-up"><i class="arrow up"></i>Move Up</button>
      <button class="btn btn-default movedown" id="move-down"><i class="arrow down"></i>Move Down </button>
    </div>
  </div>
   </div>
    </div>
  <!--  --> 
</div>
<script>  
//initialize buttons

     var sl = "#source-list";
     var tl = "#target-list";

// do stuff        

    $(sl+","+tl).selectable(); 
	  $("#add-button").click (function () { 
      add(sl,tl);
    });
	  $("#add-all-button").click( function () {
      addAll(sl,tl);
	  });   
    $("#remove-button").click( function () {
     remove(sl,tl);
	  });
    $("#remove-all-button").click( function () {
      removeAll(sl,tl);
		});
    $("#move-up").click(function () {
      moveUp(tl);
    });    	
		$("#move-down").click(function () {
      moveDown(tl);
    }); 
 </script> 
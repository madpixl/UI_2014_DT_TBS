// Picklist Js
	function add(sourceList,targetList) {
		transfer($(sourceList+ " li.ui-selected"),targetList,sourceList);
	}
	function addAll(sourceList,targetList) {
	  transfer($(sourceList+ " li:visible"),targetList,sourceList);
	}
	function transfer(listItems,targetList,sourceList) {
	  listItems.fadeOut(function() {
	    $(this)
		  .removeClass("ui-selected")
		  .clone()
		  .appendTo(targetList)
		  .fadeIn()
		  .data("index", $(sourceList +" li").index($(this)))
		  .highlight();
	  });
	}	
	
	function remove(sourceList,targetList) {
		$(targetList+ " li.ui-selected").fadeOut(function() {
			$(sourceList+ "  li") 
				.eq($(this).data("index"))
				.removeClass("ui-selected")
				.fadeIn()
				.highlight();
				
		  $(this).remove();		
		});	
	}	
  
	function removeAll(sourceList,targetList) {
	  $(targetList+ " li").fadeOut()
	    .promise().done(function() {
	      $(targetList+ " li").remove();
		  $(sourceList+ " li:hidden").fadeIn().highlight();
	    });
	}
  	function moveUp(targ) {
				$(targ + " li.ui-selected").each(function() {
					var listItem = $(this);
					var listItemPosition = $(targ+" li").index(listItem) + 1;
					
					if (listItemPosition == 1) return false;
					  listItem.insertBefore(listItem.prev());
				  });			
		}
		
		function moveDown(targ) {
				var itemsCount = $(targ +" li").length;
				
				$($(targ + " li.ui-selected").get().reverse()).each(function() {
					var listItem = $(this);
					var listItemPosition = $(targ + " li").index(listItem) + 1;
					
					if (listItemPosition == itemsCount) return false;
					 listItem.insertAfter(listItem.next());
				});
		}
		/*
		function resetList(targ) { 
			$(targ).html(originalItems);
			$(targ).html(sourceList);
		}
    */
			
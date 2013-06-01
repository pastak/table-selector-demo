$(window).load(function(){
	var status = 0;
	/*
	 * 0 ; default
	 * 1 : clicked
	 * 2 : drogging
	 */
	var p_selected = {};
	var n_selected = {};
	var f_select = {};
	var director = 0;
	/*
	 * 0 : default
	 * 1 : 下向き
	 * 2 : 上向き
	 */
	var f_mouseOver = function(){
	if(status == 1){
		var startRow = f_select.row;
		var thisRow = $(this).data('cell').row;
	if(f_select.line == $(this).data('cell').line){	
		$('tbody > tr > td.selected').removeClass('selected');
		if(thisRow > startRow){
		//始めよりも下
			for(var i=startRow;i < thisRow; i++){
				$('tbody > tr:eq('+i+') > td:eq('+($(this).data('cell').line-1)+')').addClass('selected');
			}
		}else{
		//始めより上
			for(var i=(thisRow-1);i<startRow;i++){
				$('tbody > tr:eq('+i+') > td:eq('+($(this).data('cell').line-1)+')').addClass('selected');
			}
		}
	}
	}
	}
	var f_DragStart = function(){
		if(status == 0){
			$(this).addClass('dragStart');
			p_selected = $(this).data('cell');
			status = 1;
			f_select = $('.dragStart').data('cell');
		}else if(status ==1){
			
		}else{
			$('td.active').removeClass('dragStart');
			$(this).addClass('dragStart');
			p_selected = $(this).data('cell');
			status = 1;
		}
	}
	var f_DragEnd = function(){
		var startElmData = $('.dragStart').data('cell');
		var endElmData = $(this).data('cell');
		var startTime = $(('tr:eq('+(startElmData.row )+') > td:eq(0)')).text();
		var endTime = $('tr:eq('+(endElmData.row )+') > td:eq(0)').text();
		status = 0;
		if(startElmData.row < endElmData.row){
			$('#startTime').prop('selectedIndex',(startElmData.row -1));
			$('#endTime').prop('selectedIndex',(endElmData.row -1));
		}else{
			var tmp = startTime;
			startTime = endTime;
			endTime = tmp;
			$('#startTime').prop('selectedIndex',(endElmData.row -1));
			$('#endTime').prop('selectedIndex',(startElmData.row -1));
		}
		$('#selectDate').text($(('thead > tr > td:eq('+(startElmData.line -1)+')')).text());
		$('td').removeClass('dragStart').removeClass('selected');
		//console.log(startTime+' ~ '+endTime);
		$('#conformPopup').toggle();
		$('tbody>tr>td').unbind();
	}
	/*
	$('td').bind('dragstart',f_DragStart);
	$('td').bind('dragover',f_mouseOver);
	$('td').bind('dragend',f_DragEnd);
	*/
	//$('td').click(f_DragStart);
	$('tbody>tr>td').mousedown(f_DragStart);
	$('tbody>tr>td').mouseover(f_mouseOver);
	$('tbody>tr>td').mouseup(f_DragEnd);
	$('#appointCancelButton').click(function(){
	$('tbody>tr>td').mousedown(f_DragStart);
	$('tbody>tr>td').mouseover(f_mouseOver);
	$('tbody>tr>td').mouseup(f_DragEnd);
		$('#conformPopup').toggle();
	})
})

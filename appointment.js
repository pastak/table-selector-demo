$(window).load(function(){
	var status = 0;
	/*
	 * 0 ; default
	 * 1 : clicked
	 * 2 : drogging
	 */
	var p_selected = {};
	var n_selected = {};
	var director = 0;
	/*
	 * 0 : default
	 * 1 : 下向き
	 * 2 : 上向き
	 */
	var f_mouseOver = function(){
		if(status == 1){
			n_selected = $(this).data('cell');
			if(n_selected.line == p_selected.line){
				//同じ列かを確認
				console.log('director : '+director);
				if(n_selected.row == (p_selected.row+1)){
					//下向きの動作
					//それまで上向きだったら、１つ下の要素をトグルする
					if(director==2){
$(('tr:eq('+(n_selected.row-2)+')>td:eq('+(n_selected.line-1)+')')).toggleClass('selected')
					}
					director = 1;
					$(this).toggleClass('selected');
					p_selected = n_selected;
				}else if(n_selected.row == (p_selected.row-1)){
					//上向きの動作
					//それまで下向きだったら、１つ上の要素をトグルする
					if(director == 1){
						$(('tr:eq('+(n_selected.row)+')>td:eq('+(n_selected.line-1)+')')).toggleClass('selected')
					}
					director = 2;
					$(this).toggleClass('selected');
					p_selected = n_selected;
				}
			}
		}
	};
	var f_DragStart = function(){
		if(status == 0){
			$(this).addClass('dragStart');
			p_selected = $(this).data('cell');
			status = 1;
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

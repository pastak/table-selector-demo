<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title></title>
	<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="../src/bscustom.css" rel="stylesheet">
	<script src="../src/jquery.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
	<link href='appointment/appointment.css' rel='stylesheet'>
	<script src='appointment/appointment.js'></script>
</head>
<body>
<div>
<div id='conformPopup'>
	<h3>操作の確認</h3>
	<span id='selectDate'></span>の
	<select id='startTime' class='span2'>
		<option>9:00</option>
<option>9:30</option>
<option>10:00</option>
<option>10:30</option>
<option>11:00</option>
<option>11:30</option>
<option>12:00</option>
<option>12:30</option>
<option>13:00</option>
<option>13:30</option>
<option>14:00</option>
<option>14:30</option>
<option>15:00</option>
<option>15:30</option>
<option>16:00</option>
<option>16:30</option>
<option>17:00</option>
<option>17:30</option>
<option>18:00</option>
<option>18:30</option>
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
<option>20:30</option>
<option>21:00</option>
	</select>
	〜
	<select id='endTime' class='span2'>
		<option>9:00</option>
<option>9:30</option>
<option>10:00</option>
<option>10:30</option>
<option>11:00</option>
<option>11:30</option>
<option>12:00</option>
<option>12:30</option>
<option>13:00</option>
<option>13:30</option>
<option>14:00</option>
<option>14:30</option>
<option>15:00</option>
<option>15:30</option>
<option>16:00</option>
<option>16:30</option>
<option>17:00</option>
<option>17:30</option>
<option>18:00</option>
<option>18:30</option>
<option>19:00</option>
<option>19:30</option>
<option>20:00</option>
<option>20:30</option>
<option>21:00</option>
	</select>
	<br />でよろしいですか？<br />
	<button type='button' id='appointCancelButton' >取消</button>
</div>
	<table class='table table-bordered' style='width:600px;'>
	<thead>
		<tr>
<?php for($k = 1; $k <= 8; $k++){
		if($k == 1){
			echo'<td></td>';
		}else{
			echo '<td>'.'5月2'.$k.'日</td>';
		}
}?>
		</tr>
	</thead>
<?php
	$hour = 9;
	for($i = 1; $i<=25; $i++){
			echo "<tr>\n";
			for($j = 1; $j <= 8;$j++){	
						$prop='';
						$text='';
					if($j == 1){
						$prop='onSelectStart=”return false;” unselectable=”on” class="datecell"';
					if($i%2 == 1){
						$text = $hour.":00";
					}else{
						$text = $hour++.":30";
					}
				}
				echo "<td data-cell='{\"row\":$i,\"line\":$j}' ".$prop.">".$text."</td>\n";
			}
			echo "</tr>\n";
	}
?>
	</table>
</div>
</body>
</html>


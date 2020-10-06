<?php
$db = mysqli_connect('192.168.3.21', 'WEB-PTE', 'TonySoprano', 'boiler',3306);
	//mysql_select_db("boiler" ,$db);

if (!$db) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
if ($_GET['flag']==true){
	
	$result = mysqli_query($db,"SELECT Date_event, T1 FROM Gorkogo_56 ORDER BY Date_event DESC LIMIT 1");
	$data = mysqli_fetch_row($result);
	$data[0] = strtotime($data[0])*1000;
	$data[1] = $data[1]+0;
	
	echo json_encode($data);
	exit;
}

//if (isset($_GET['start']) AND isset($_GET['end'])) {
	
	$start = $_GET['start'];
	$end = $_GET['end'];
	//$tag = $_GET['tag'];
	$data = array();
	
	//$start='2019-04-04 00:00';
	//$end ='2019-04-05 00:00';
	//Запрос 
	//$result = mysql_query ("SELECT `Date_event`, $tag FROM `Lenina_91` WHERE timestamp(date_event) BETWEEN timestamp('{$start}') AND DATE_ADD(timestamp('{$end}'), INTERVAL 0 hour)");
	$result = mysqli_query($db,"SELECT Date_event, T1 FROM Gorkogo_56 WHERE  date_event>='$start' AND date_event<='$end'");	
	
	while ($row = mysqli_fetch_row($result)) 
			{
			$data[] =array(strtotime($row[0])*1000, $row[1]+0);
			}
	echo json_encode($data);

//}

?>
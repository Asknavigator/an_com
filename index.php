
<?php 
$path    = './';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
foreach($files as $file){
  echo "<a target='_blank' href='$file'>$file</a><br>";
}
?>
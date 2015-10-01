<?php
$str = file_get_contents('http://localhost/gate/questions.json');
$json = json_decode($str, true);
echo '<pre>' .$json['questions'][26]['question']. '</pre>';

?>
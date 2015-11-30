
<?php

header("Access-Control-Allow-Origin: http://www.client.com");

$data_out = <<<End
{
  "code": 1,
  "data": {
    "title": "数据",
    "list": ["1", "2", "3"]
  },
  "message": "success"
}
End;

echo $data_out;
?>

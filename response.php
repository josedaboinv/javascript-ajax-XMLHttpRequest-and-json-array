
$id=$_GET['idsr'];

$title="Json Array";

$return_arr=array(
	"id" => $id,
	"title" => $title
);

echo json_encode($return_arr); 

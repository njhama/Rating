$(document).ready(function () {
    $('#table_id').DataTable({
       "ajax": "data.json",
       "columns": [
        {"data": "name"},
        {"data": "artist"},
        {"data": "album"},
        {"data": "rating"}
       ]
        
    });
    $("tr:odd").css ({
        "background-color":"#888"
    })
});
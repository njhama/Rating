$(document).ready(function () {
    $('#table_id').DataTable({
        order: [[0, 'desc']],
        paging: false,
       "ajax": "data.json",
       "columns": [
        {"data": "rating"},
        {"data": "name"},
        {"data": "artist"},
        {"data": "album"},
       
       ]
        
    });
    $("tr:odd").css ({
        "background-color":"#888"
    })
});
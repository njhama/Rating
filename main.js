$(document).ready(function () {
    $('#table_id').DataTable({
        order: [[0, 'desc']],
        paging: false,
        dom: 'Bfrtip',
        buttons: ['excel', 'pdf', 'print'],
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
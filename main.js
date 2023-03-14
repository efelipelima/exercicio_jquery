$(document).ready(function() {
    $('#add-task-form').submit(function(e) {
    e.preventDefault();

        var taskName = $('#task-name').val();

        var newTask = $('<li>').text(taskName);

    $('#task-list').append(newTask);
    $('#task-name').val('');
    });
});

$(document).ready(function() {
    $('#newTask').on('click', function() {
    

    });
});

$(document).ready(function() {
    $('#add-task-form').submit(function(e) {
        e.preventDefault();
        var taskName = $('#task-name').val();
        var newTask = $('<li>').text(taskName);
        $('#task-list').append(newTask);
        $('#task-name').val('');
    });
    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
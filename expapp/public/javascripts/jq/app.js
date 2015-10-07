(function() {
    console.log('App');
    $('#btn1').click(function() {
        console.log('click');
        $.get('/api/people', function(data) {
            $('tbody').empty('tr');
            for (var i=0;i<data.length;i++) {
                $('<tr><td>' + data[i].fn+ '</td><td>' + data[i].ln+ '</td></tr>')
                    .appendTo('tbody');
            }
            console.log('data', data);
        });


    });

    $('form').submit(function(event) {
        event.preventDefault();

        var person = {};
        person.fn=$('form > #fn').val();
        person.ln=$('form > #ln').val();
        $.post('/api/add',person,function(data, text, resp){
            if (resp.status===204) {
                console.log('Not created');
            } else {
                console.log('success');
                $('#btn1').trigger('click');
            }
        }).error(function(data) {
            console.log('error', data);

        });
    });

})();
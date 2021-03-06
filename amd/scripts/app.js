
requirejs.config({

    //By default load any module IDs from scripts/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});
// Start the main app logic.
requirejs(['jquery', 'app/module1'],
    function   ($,        module1) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
        console.log('Loaded app-template.js');
        console.log("From app show object module1 ", module1);

        console.log($);

    });

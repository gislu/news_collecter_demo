
app.controller('feedCtrl', function($scope) {
    // $http.get("/oa")
    //     .success(function (response) {
    //         var hmcontext = '';
    //         for(var i = 0;i<response.posts.length /10 ;i++){
    //             hmcontext = hmcontext + '<div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="img/logo.jpg" class="img-circle" alt="..."></a>    <div class="m-l-lg m-b-lg"> <div class="m-b-xs"> <a href ="http://'
    //                 +response.posts[i].thread.site_full +'" class="h4">'
    //                 + response.posts[i].title + '</a> <span class="text-muted m-l-sm pull-right">' + response.posts[i].published
    //                 + '</span></div><div class="m-b"><div class="m-b">' + response.posts[i].thread.site_full +  '</div>'
    //                 + '<img src="' + response.posts[i].thread.main_image
    //                 + '"class="b b-a wrapper-xs bg-white img-responsive">' + '<div class="m-b">'
    //                 + response.posts[i].text
    //                 + '</div><div class="m-t-sm"><a href class="text-muted m-xs"><i class="icon-action-redo"></i></a><a href class="text-muted m-xs"><i class="icon-star"></i></a><a href class="text-muted m-xs"><i class="icon-refresh"></i> 13</a></div></div></div></div>';
    //         }
            console.log($scope.sprintlist='this is a alert');
           $scope.testbody='a test~~~';
          //  console.log($scope.sprintlist=hmcontext);
    //    });
});
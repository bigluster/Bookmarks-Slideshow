define(["jquery", "qlik", "text!./FEI-BookmarksSlideshow.css",'./properties'], function($, qlik, cssContent, properties) {
    'use strict';
    $("<style>").html(cssContent).appendTo("head");

    return {

        //define the properties panel looks like
        definition: properties,
        paint : function($element,layout) {
            console.log("------------------------------------",layout);
            console.log("Refresh Interval", layout.props.refreshInterval);
            var app = qlik.currApp(this);

            var BookmarkIDs = [];
            for(var i=1; i<=layout.props.noOfSlides; i++){
                BookmarkIDs.push(eval('layout.props.bookmark' + i));
            }
            console.log('Bookmark IDs: ',BookmarkIDs);

            var SheetIDs = [];
            for(var i=1; i<=layout.props.noOfSlides; i++){
                SheetIDs.push(eval('layout.props.sheet' + i));
            }
            console.log('Sheet IDs: ',SheetIDs);

            var html = '<html><button name="BookmarkSlideshow' + layout.qInfo.qId + '" id="bookmarkSlideshow_' + layout.qInfo.qId + '" class="bookmarkSlideshow">Start Slideshow</button></html>';
            $element.html(html);

            $("#bookmarkSlideshow_" + layout.qInfo.qId).on('qv-activate', function () {
                
                for(var i=0; i<layout.props.noOfSlides; i++){
                    slideshow(i, BookmarkIDs, SheetIDs, app, qlik, layout);
                }
            });
        }
    };
});

var slideshow = function (i, BookmarkIDs, SheetIDs, app, qlik, layout) {
    setTimeout(function(){
        app.bookmark.apply(BookmarkIDs[i]);
        qlik.navigation.gotoSheet(SheetIDs[i]);
        setInterval(function(){     
            app.bookmark.apply(BookmarkIDs[i]);
            qlik.navigation.gotoSheet(SheetIDs[i]);
        },layout.props.refreshInterval*layout.props.noOfSlides);
    },layout.props.refreshInterval*i); 
};
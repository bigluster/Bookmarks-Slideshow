/*global define*/
define( [
    'jquery',
    'underscore',
    'qlik',
    'ng!$http',
    'ng!$q'

], function ($, _, qlik, $http, $q) {

    var app = qlik.currApp();

    // ****************************************************************************************
    // Helper Promises
    // ****************************************************************************************
    var getBookmarkList = function () {
        var defer = $q.defer();

        app.getList( 'BookmarkList', function ( items ) {
            defer.resolve( items.qBookmarkList.qItems.map( function ( item ) {
                return {
                    value: item.qInfo.qId,
                    label: item.qData.title
                }
            } )
                         );
        } );
        return defer.promise;
    };

    var getSheetList = function () {

        var defer = $q.defer();

        app.getAppObjectList( function ( data ) {
            var sheets = [];
            var sortedData = _.sortBy( data.qAppObjectList.qItems, function ( item ) {
                return item.qData.rank;
            } );
            _.each( sortedData, function ( item ) {
                sheets.push( {
                    value: item.qInfo.qId,
                    label: item.qMeta.title
                } );
            } );
            return defer.resolve( sheets );
        } );

        return defer.promise;
    };

    // ****************************************************************************************
    // Layout
    // ****************************************************************************************

    var refreshInterval = {
        ref: "props.refreshInterval",
        type: "integer",
        label: "Refresh Interval (milliseconds)",
        defaultValue: 5000
    };

    var noOfSlides = {
        ref: "props.noOfSlides",
        component: "dropdown",
        type: "integer",
        label: "No. of Slides",
        options: [
            {value: 2,
             label: "2 Slides"},
            {value: 3,
             label: "3 Slides"},
            {value: 4,
             label: "4 Slides"},
            {value: 5,
             label: "5 Slides"},
            {value: 6,
             label: "6 Slides"},
            {value: 7,
             label: "7 Slides"},
            {value: 8,
             label: "8 Slides"},
            {value: 9,
             label: "9 Slides"},
            {value: 10,
             label: "10 Slides"}
        ],
        defaultValue: 3
    };

    var bookmark1 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 1:",
        ref: "props.bookmark1",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var sheet1 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 1:",
        ref: "props.sheet1",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var bookmark2 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 2:",
        ref: "props.bookmark2",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var sheet2 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 2:",
        ref: "props.sheet2",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 2;
        }
    };

    var bookmark3 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 3:",
        ref: "props.bookmark3",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 3;
        }
    };

    var sheet3 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 3:",
        ref: "props.sheet3",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 3;
        }
    };

    var bookmark4 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 4:",
        ref: "props.bookmark4",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 4;
        }
    };

    var sheet4 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 4:",
        ref: "props.sheet4",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 4;
        }
    };

    var bookmark5 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 5:",
        ref: "props.bookmark5",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 5;
        }
    };

    var sheet5 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 5:",
        ref: "props.sheet5",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 5;
        }
    };

    var bookmark6 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 6:",
        ref: "props.bookmark6",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 6;
        }
    };

    var sheet6 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 6:",
        ref: "props.sheet6",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 6;
        }
    };

    var bookmark7 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 7:",
        ref: "props.bookmark7",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 7;
        }
    };

    var sheet7 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 7:",
        ref: "props.sheet7",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 7;
        }
    };

    var bookmark8 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 8:",
        ref: "props.bookmark8",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 8;
        }
    };

    var sheet8 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 8:",
        ref: "props.sheet8",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 8;
        }
    };

    var bookmark9 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 9:",
        ref: "props.bookmark9",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 9;
        }
    };

    var sheet9 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 9:",
        ref: "props.sheet9",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 9;
        }
    };

    var bookmark10 = {
        type: "string",
        component: "dropdown",
        label: "Bookmark 10:",
        ref: "props.bookmark10",
        options: function () {
            return getBookmarkList()
                .then( function ( items ) {
                return items;
            });
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 10;
        }
    };

    var sheet10 = {
        type: "string",
        component: "dropdown",
        label: "Sheet 10:",
        ref: "props.sheet10",
        options: function () {
            return getSheetList().then( function ( items ) {
                return items;
            } );
        },
        show: function ( data ) {
            return data.props.noOfSlides >= 10;
        }
    };

    // ****************************************************************************************
    // Setup
    // ****************************************************************************************
    var settings = {
        uses: "settings",
        items: {
            general: {
                items: {
                    showTitles: {
                        defaultValue: false
                    }
                }
            },
            bookmarkSettings: {
                type: "items",
                label: "Settings",
                items: {
                    refreshInterval: refreshInterval,
                    noOfSlides: noOfSlides,
                    bookmark1: bookmark1,
                    sheet1: sheet1,
                    bookmark2: bookmark2,
                    sheet2: sheet2,
                    bookmark3: bookmark3,
                    sheet3: sheet3,
                    bookmark4: bookmark4,
                    sheet4: sheet4,
                    bookmark5: bookmark5,
                    sheet5: sheet5,
                    bookmark6: bookmark6,
                    sheet6: sheet6,
                    bookmark7: bookmark7,
                    sheet7: sheet7,
                    bookmark8: bookmark8,
                    sheet8: sheet8,
                    bookmark9: bookmark9,
                    sheet9: sheet9,
                    bookmark10: bookmark10,
                    sheet10: sheet10
                }
            }
        }
    };

    var panelDefinition = {
        type: "items",
        component: "accordion",
        items: {
            settings: settings
        }
    };

    // ****************************************************************************************
    // Return Values
    // ****************************************************************************************
    return panelDefinition;
});
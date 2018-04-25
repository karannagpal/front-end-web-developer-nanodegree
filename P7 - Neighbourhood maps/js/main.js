var locations = []; //array of markers

//viewmodel starts
var viewmodel = function() {
    var defaultMarker = makeMarkerIcon('55FF55');
    var highlightedMarker = makeMarkerIcon('FF55FF');
    var Infowindow = new google.maps.InfoWindow();

    function makeMarkerIcon(markerColor) { // passing marker color and building marker icon in this 
        var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2', //type of marker we choose.			
        new google.maps.Size(21, 34), // Size of marker height and width
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34), // accuracy when they are pointing.
        new google.maps.Size(21, 34));
        return markerImage;
    }

    for (i = 0; i < area.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: area[i].lat,
                lng: area[i].lng
            },
            icon: defaultMarker,
            map: map,
            title: area[i].name,
            //the following 4 are from foursquare
            rating: '',
            venues: area[i].id,
            selected: area[i].selected,
            image: '',
            show: ko.observable(true)
        });

        locations.push(marker);

        marker.addListener('mouseover', function() {
            this.setIcon(highlightedMarker);
        });

        marker.addListener('mouseout', function() {
            this.setIcon(defaultMarker);
        });

        //bouncing if marker when clicked
        var makeBounce = null;
        var clickListener = function() {
            if (makeBounce !== null)
                makeBounce.setAnimation(null);
            if (makeBounce != this) {
                this.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    makeBounce.setAnimation(null);
                }, 500);
                makeBounce = this;
            } else {
                makeBounce = null;
            }
        };

        //opening infowindow when marker is clicked
        google.maps.event.addListener(marker, 'click', clickListener);
        marker.addListener('click', function() {
            openInfoWindow(this, Infowindow);
        });

    }


    //fetching rating from foursquare
    locations.forEach(function(m) {
        // passing m for marker
        $.ajax({
            method: 'GET',
            dataType: "json",
            url: "https://api.foursquare.com/v2/venues/" + m.venues + "?client_id=2JYEJY5E54SCTS2TJRILIIVLFPXCLQFXF0MPWI2YS2UQCJY3&client_secret=TH4C4MYFH44B2V02JS3YZEXYTKND5IEI4CTX0U51UT4JTKZ4&v=20170303",
            success: function(data) { // if data is successfully fetch than function will execute
                var venue = data.response.venue;
                var imgurl = data.response.venue.photos.groups[0].items[0];
                if ((venue.hasOwnProperty('rating')) || ((imgurl.hasOwnProperty('prefix')) && (imgurl.hasOwnProperty('suffix')))) {
                    m.rating = venue.rating;
                    m.image = imgurl.prefix + "150x100" + imgurl.suffix;
                } else {
                    m.rating = '';
                    m.imgurl = '';
                }
            },
            //error message
            error: function(e) {
                alert('Error in fetching data');
            }
        });
    });

    function openInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div><h3>' + marker.title + '</h3><h4>Ratings:' + marker.rating + '</h4></div><div><img src="' + marker.image + '"></div>');
            
            if (marker.rating !== null || marker.image !== null) {
                infowindow.open(map, marker);
            }

            //clearing the contents of infowindow when its closed
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }

    }

    //bouncing of marker when clicked
    this.selectAll = function(marker) {
        openInfoWindow(marker, Infowindow);
        marker.selected = true;
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 500);
    };

    //Search bar operation using knockout.js
    this.inputText = ko.observable('');
    this.filtersearch = function() {
        Infowindow.close(); // close all the previously opened infowindows
        var inputSearch = this.inputText();
        if (inputSearch.length === 0) {
            this.showAll(true);
        } else {
            for (i = 0; i < locations.length; i++) {
                if (locations[i].title.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1) {
                    locations[i].show(true);
                    locations[i].setVisible(true);
                } else {
                    locations[i].show(false);
                    locations[i].setVisible(false);
                }
            }
        }
        Infowindow.close();
    };

    this.showAll = function(variable) {
        for (i = 0; i < locations.length; i++) {
            locations[i].show(variable);
            locations[i].setVisible(variable);
        }
    };
};
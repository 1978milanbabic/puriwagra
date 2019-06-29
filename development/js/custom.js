/**************** CUSTOM IIFE *****************/

(function (win, doc, $) {
    /****************************
     * LOADS IN HEADER
     ****************************/

    //cookies handling fn-s
    var setCookie = function (cname, cvalue, exmins) {
        var d = new Date();
        d.setTime(d.getTime() + (exmins * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    var getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var checkCookie = function (cname) {
        var user = getCookie(cname);
        if (user && user != "" && user != "undefined" && user != null) {
            return true;
        } else {
            return false;
        }
    };

    //responsive sprites Constructor fn

    function RespSprites(Obj) {

        var cssClass = Obj["cssclass"];
        var img_source = Obj["img_source"];

        var total_width = Obj["total_width"];
        var total_height = Obj["total_height"];

        var picsObjs = Obj["imgs"];

        var unused = [];

        this.create = function () {

            for (var imgname in picsObjs) {
                var curClass = cssClass + "-" + imgname;
                var curElems = document.getElementsByClassName(curClass);

                if (curElems && curElems.length > 0) { //element exists
                    for (var i = 0; i < curElems.length; i++) { //for each of that class

                        curElems[i].style.display = "inline-block";
                        var curElemDefWidth = curElems[i].offsetWidth;

                        var contW, defW, defH;

                        //find default img width and height
                        defW = picsObjs[imgname]["width"];
                        defH = picsObjs[imgname]["height"];

                        if (curElemDefWidth && curElemDefWidth > 0) { //predefined width in css
                            contW = curElemDefWidth;
                        } else { //default img sizes
                            contW = defW;
                            curElems[i].style.width = contW + "px";
                        }

                        //******** create inner pic elem ******
                        //css vars
                        var objW = picsObjs[imgname]["width"];
                        var objH = picsObjs[imgname]["height"];
                        var objX = picsObjs[imgname]["x"];
                        var objY = picsObjs[imgname]["y"];
                        //also usable => total_width  total_height

                        //var spanW = 100%;
                        var spanH = ((objH / objW) * 100); //padding-bottom in %
                        var picW = ((total_width / objW) * 100); //pic width in %
                        //var picH = auto; 

                        var xperc = (objX / total_width) * 100;
                        var yperc = (objY / total_height) * 100;

                        //create span element (dimensions + overflow: hidden)
                        var innerSpan = document.createElement("span");
                        innerSpan.style.cssText = "display: block; position: relative; overflow: hidden; width: 100%; height: 0; padding-bottom: " + spanH + "%";
                        curElems[i].appendChild(innerSpan);

                        //create inner pic
                        var innerPic = document.createElement("img");
                        innerPic.src = img_source;
                        innerPic.alt = "";
                        innerPic.style.cssText = "position: absolute; top: 0; left: 0; width: " + picW + "%; height: auto; transform: translate(-" + xperc + "%, -" + yperc + "%); ";

                        innerSpan.appendChild(innerPic);

                    }
                } else {
                    unused.push(curClass);
                }

            }
            if (unused.length > 0) {
                console.log("UNUSED PICS: .", unused); //Unused Pics Log for developers
            }
        };
    }

    var pngs_data = {
        cssclass: "sprites",
        img_source: "./img/sprites.png",
        total_width: 1160,
        total_height: 899,
        imgs: {
            "arr-left": {
                x: 960,
                y: 573,
                width: 31,
                height: 49
            },
            "arr-right": {
                x: 1112,
                y: 497,
                width: 31,
                height: 49
            },
            "img_21": {
                x: 720,
                y: 480,
                width: 200,
                height: 179
            },
            "img_22": {
                x: 960,
                y: 189,
                width: 200,
                height: 179
            },
            "img_23": {
                x: 960,
                y: 0,
                width: 200,
                height: 179
            },
            "img_24": {
                x: 630,
                y: 720,
                width: 200,
                height: 179
            },
            "img_25": {
                x: 420,
                y: 720,
                width: 200,
                height: 179
            },
            "img_26": {
                x: 210,
                y: 720,
                width: 200,
                height: 179
            },
            "img_27": {
                x: 0,
                y: 720,
                width: 200,
                height: 179
            },
            "ingr-bioperine": {
                x: 480,
                y: 480,
                width: 230,
                height: 230
            },
            "ingr-catuaba": {
                x: 0,
                y: 0,
                width: 230,
                height: 230
            },
            "ingr-damiana": {
                x: 720,
                y: 0,
                width: 230,
                height: 230
            },
            "ingr-ginko": {
                x: 240,
                y: 0,
                width: 230,
                height: 230
            },
            "ingr-glog": {
                x: 0,
                y: 480,
                width: 230,
                height: 230
            },
            "ingr-goatweed": {
                x: 480,
                y: 240,
                width: 230,
                height: 230
            },
            "ingr-svilovina": {
                x: 480,
                y: 0,
                width: 230,
                height: 230
            },
            "ingr-tribulus": {
                x: 240,
                y: 240,
                width: 230,
                height: 230
            },
            "ingr-vilinekosice": {
                x: 0,
                y: 240,
                width: 230,
                height: 230
            },
            "ingr-zenseng": {
                x: 720,
                y: 240,
                width: 230,
                height: 230
            },
            "ingr-zinc": {
                x: 240,
                y: 480,
                width: 230,
                height: 230
            },
            "step1": {
                x: 1079,
                y: 378,
                width: 66,
                height: 66
            },
            "step2": {
                x: 960,
                y: 497,
                width: 66,
                height: 66
            },
            "step3": {
                x: 1036,
                y: 497,
                width: 66,
                height: 66
            },
            "step4": {
                x: 960,
                y: 378,
                width: 109,
                height: 109
            }
        }
    };

    /****************************
     * LOADS ON DOCUMENT READY
     ****************************/

    $(doc).ready(function () {

        //btns onclick scroll to form
        $("a.btn, a.odmah").click(function (event) {
            event.preventDefault();
            var toSc = $(".section10").offset().top;
            $("html, body").animate({
                scrollTop: toSc
            }, 1000);
        });

        //arrows
        var arrows = $(".arr-left, .arr-right");

        arrows.mouseover(function () {
            $(this).css("opacity", "1");
        });

        arrows.mouseleave(function () {
            $(this).css("opacity", "0.4");
        });

        //date stamp
        var objToday = new Date();
        var monthNames = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
        var datestamp = objToday.getDate() + ". " + monthNames[objToday.getMonth()] + " " + objToday.getFullYear() + ".";
        $(".date-stamp span").html(datestamp);

        //countdown time
        var days3 = [1, 5, 9, 13, 17, 21, 25, 29];
        var days2 = [2, 6, 10, 14, 18, 22, 26, 30];
        var days1 = [3, 7, 11, 15, 19, 23, 27, 31];
        var days0 = [4, 8, 12, 16, 20, 24, 28];

        var daynow = objToday.getDate();
        var hournow = objToday.getHours();
        var minnow = objToday.getMinutes();
        var secnow = objToday.getSeconds();

        var startDay;
        if (days0.indexOf(daynow) > -1) {
            startDay = 0;
        }
        if (days1.indexOf(daynow) > -1) {
            startDay = 1;
        }
        if (days2.indexOf(daynow) > -1) {
            startDay = 2;
        }
        if (days3.indexOf(daynow) > -1) {
            startDay = 3;
        }

        var startHour = 23 - hournow;

        var startMin = 59 - minnow;

        var startSec = 59 - secnow;

        $(".days").html(startDay);
        $(".hours").html(startHour);
        $(".mins").html(startMin);
        $(".secs").html(startSec);

        var counter = {
            stop: false,
            init: function () {
                var t = this;
                startSec--;
                if (startSec < 0) {
                    startSec = 59;
                    startMin--;
                    if (startMin < 0) {
                        startMin = 59;
                        startHour--;
                        if (startHour < 0) {
                            startHour = 23;
                            startDay--;
                            if (startDay < 0) {
                                startDay = 0;
                                this.stop = true;
                            }
                            $(".day").html(startDay);
                        }
                        $(".hours").html(startHour);
                    }
                    $(".mins").html(startMin);
                }
                $(".secs").html(startSec);

                if (!this.stop) {
                    //timeout
                    setTimeout(function () {
                        t.init();
                    }, 1000);
                }
            }
        };
        setTimeout(function () {
            counter.init();
        }, 1000);

        //forms handling
        $("#topform, #bottomform").submit(function (event) {
            event.preventDefault();
            if (!checkCookie("narucio")) {
                //geting vals
                var country = $(this).find('select[name="country"]').val();
                var name = $(this).find('input[name="name"]').val().trim();
                var phone = $(this).find('input[name="phone"]').val().trim();

                //check vals
                if (name !== "" && name.length > 2) {
                    if (phone !== "" && phone.length > 5) {
                        //ajax data
                        $.ajax({
                                url: "./mailer.php",
                                method: "post",
                                data: {
                                    "country": country,
                                    "name": name,
                                    "phone": phone
                                },
                                success: function (resp) {
                                    if (resp == "mailed") {
                                        setCookie("narucio", "5", 5);
                                        alert(window.alerts[3]);
                                    } else {
                                        alert(window.alerts[4]);
                                    }
                                }
                            })
                            .fail(function () {
                                alert(window.alerts[4]);
                            });
                    } else {
                        alert(window.alerts[1]);
                    }
                } else {
                    alert(window.alerts[0]);
                }

            } else {
                setCookie("narucio", "5", 5);
                alert(window.alerts[2]);
            }
        });

    }); //document ready end

    /****************************
     * LOADS ON WINDOW LOAD
     ****************************/

    $(win).load(function () {

        //create sprites
        var pngs = new RespSprites(pngs_data);
        pngs.create();

        //pics preload handler
        var picPreloadHandler = {
            picsToAdd: {
                1: ["./img/backs/above_fold_bg.jpg", "./img/backs/stockings.jpg", "./img/backs/viuviu.jpg", "./img/backs/bg-bottom.jpg"],
                2: ["./img/backs/above_fold_bg_small.jpg", "./img/backs/stockings_small.jpg", "./img/backs/viuviu_small.jpg", "./img/backs/bg-bottom_small.jpg"]
            },
            addPicsToPreload: function (size) {
                $(".loader-outer").show();
                var pics = this.picsToAdd[size];
                if (pics.length > 0 && pics[0] !== "") {
                    for (var i = 0; i < pics.length; i++) {
                        var pic = $("<img>", {
                            attr: {
                                src: pics[i],
                                alt: ""
                            }
                        }).load(function () {
                            $(this).attr("data-loaded", "y");
                        });
                        $("#pics-preload").append(pic);
                    }
                }
                this.checkLoad();
            },
            checkLoad: function () {
                var t = this;
                var allPics = $("#pics-preload img");
                var loaded = true;
                for (var i = 0; i < allPics.length; i++) {
                    var $pic = $(allPics[i]);
                    if (!$pic.attr("data-loaded") || $pic.attr("data-loaded") != "y") {
                        loaded = false;
                    }
                }
                if (loaded) {
                    this.successLoad();
                } else {
                    setTimeout(function () {
                        t.checkLoad();
                    }, 50);
                }
            },
            successLoad: function () {
                $(".loader-outer").fadeOut(500);
            }
        };

        //moving back on top
        var topback_controler = {
            picW: 1920,
            picH: 2703,
            winH: 0,
            navH: 0,
            realPicH: 0,
            headerH: 0,
            sec1H: 0,
            backH: 0,
            backCont: $(".top-background-container"),
            init: function () {
                this.createEvent();
                this.sizeThis();
            },
            sizeThis: function () {
                var t = this;

                t.winH = $(win).outerHeight();
                t.navH = $("nav").outerHeight();
                t.headerH = $("header").outerHeight();
                t.sec1H = $("section.section1").outerHeight();
                var realPicW = $(win).outerWidth();
                t.realPicH = (t.picH * realPicW) / t.picW; //picW : picH = realPicW : realPicH

                //make height
                t.backH = t.navH + t.headerH + t.sec1H + 50;
                $(".top-background-container").height(t.backH);

                var sctop = $(win).scrollTop();

                //calc
                if (t.realPicH > t.winH) {
                    //movement back
                    var newTop = (sctop * t.realPicH) / t.backH;
                    t.backCont.css("background-position-y", "-" + newTop + "px");
                } else {
                    t.backCont.css("background-position-y", "0px");
                }

            },
            createEvent: function () {
                var t = this;
                $(win).scroll(function () {
                    t.sizeThis();
                });
            }
        };

        topback_controler.init();

        //moving scale
        var scale_controler = {
            img: $("#scale-cont img"),
            picW: 240,
            picH: 4591,
            winH: 0,
            docH: 0,
            off: false,
            off_initiated: false,
            init: function () {
                this.createEvent();
                this.sizeThis();
            },
            sizeThis: function () {
                var t = this;

                //if not off
                if (!this.off) {
                    t.winH = $(win).outerHeight();
                    t.docH = $(".container").outerHeight();

                    t.picW = t.img.outerWidth();
                    t.picH = t.picW * 19.12916667;

                    var sctop = $(win).scrollTop();

                    //calc
                    var move = sctop - sctop * (t.picH - t.winH) / (t.docH - t.winH);
                    move = move * 0.95;

                    //move scale
                    $("#scale-cont").css("top", move + "px");
                } else {
                    if (!this.off_initiated) {
                        this.off_initiated = true;
                        //top scale
                        $("#scale-cont").css("top", "0px");
                    }
                }
                
            },
            createEvent: function () {
                var t = this;
                $(win).scroll(function () {
                    t.sizeThis();
                });
            }
        };

        scale_controler.init();

        //carousel 1 controler
        var carousel_1 = {
            car: $(".section3 .carousel"),
            step: (2500 / 175),
            curstep: 1,
            maxStep: 4,
            clickInit: false,
            init: function () {
                this.createEvents();
            },
            createEvents: function () {
                var t = this;
                var leftbtn = this.car.parent().find(".arr-left");
                var rightbtn = this.car.parent().find(".arr-right");
                leftbtn.click(function () {
                    if (t.curstep > 1 && !t.clickInit) {
                        t.curstep--;
                        t.clickInit = true;
                        t.anim(t.curstep);
                    }
                });
                rightbtn.click(function () {
                    if (t.curstep < t.maxStep) {
                        t.curstep++;
                        t.clickInit = true;
                        t.anim(t.curstep);
                    }
                });
            },
            anim: function (step) {
                var t = this;
                this.car.css({
                    "transform": "translateX(-" + (step - 1) * t.step + "%)"
                });
                setTimeout(function () {
                    t.clickInit = false;
                }, 700);
            }
        };

        carousel_1.init();

        //carousel 2 controler
        var carousel_2 = {
            car: $(".section6 .carousel"),
            step: (2500 / 275),
            curstep: 1,
            maxStep: 8,
            clickInit: false,
            init: function () {
                this.createEvents();
            },
            createEvents: function () {
                var t = this;
                var leftbtn = this.car.parent().find(".arr-left");
                var rightbtn = this.car.parent().find(".arr-right");
                leftbtn.click(function () {
                    if (t.curstep > 1 && !t.clickInit) {
                        t.curstep--;
                        t.clickInit = true;
                        t.anim(t.curstep);
                    }
                });
                rightbtn.click(function () {
                    if (t.curstep < t.maxStep) {
                        t.curstep++;
                        t.clickInit = true;
                        t.anim(t.curstep);
                    }
                });
            },
            anim: function (step) {
                var t = this;
                this.car.css({
                    "transform": "translateX(-" + (step - 1) * t.step + "%)"
                });
                setTimeout(function () {
                    t.clickInit = false;
                }, 700);
            }
        };

        carousel_2.init();

        //css connector
        var media = csstojsID("css-connector");

        media.size(1, function () {
            //custom function for size 1
            picPreloadHandler.addPicsToPreload(1);
            carousel_1.maxStep = 4;
            carousel_2.maxStep = 8;
            //mfpic
            $("#mfpic").attr("src", "./img/backs/mf-big.jpg");
            //scale
            scale_controler.off = false;
            scale_controler.picW = 240;
        });

        media.size(2, function () {
            //custom function for size 2
            picPreloadHandler.addPicsToPreload(1);
            carousel_1.maxStep = 5;
            carousel_2.maxStep = 9;
            //mfpic
            $("#mfpic").attr("src", "./img/backs/mf.jpg");
            //scale
            scale_controler.off = false;
            scale_controler.picW = 150;
        });

        media.size(3, function () {
            //custom function for size 3
            picPreloadHandler.addPicsToPreload(2);
            carousel_1.maxStep = 6;
            carousel_2.maxStep = 10;
            //mfpic
            $("#mfpic").attr("src", "./img/backs/mf.jpg");
            //scale
            scale_controler.off = true;
            scale_controler.picW = 150;
        });

        media.size(4, function () {
            //custom function for size 3
            picPreloadHandler.addPicsToPreload(2);
            carousel_1.maxStep = 7;
            carousel_2.maxStep = 11;
            //mfpic
            $("#mfpic").attr("src", "./img/backs/mf.jpg");
            //scale
            scale_controler.off = true;
            scale_controler.picW = 80;
        });

        media.init();

        //on resize
        $(win).resize(function () {
            topback_controler.sizeThis();
            scale_controler.sizeThis();
        });


    }); //window load end

}(window, document, jQuery));
﻿"use strict";

/*jslint regexp: true, nomen: true, sloppy: true */
/*global require, define, alert, applicationConfig, location, document, window,  setTimeout, Countable */

define(['jquery', 'typing'], function ($) {
    var module = {};

    module.initInstallationAnimation = function () {
        var triggerInstall = $('.js-typing-install'),
            triggerStart = $('.js-typing-start'),
            installationList = $('li', '.installation-process');

        triggerInstall.addClass('active');
        triggerInstall.loadTyping({
            incorrectTypingSpeed: 70,
            deletingSpeed: 70,
            correctTypingSpeed: 70
        });

        setTimeout(function () {
            $(installationList.eq(0)).addClass('animate');
            $(installationList.eq(1)).addClass('active');
        }, 5000);

        setTimeout(function () {
            $(installationList.eq(1)).addClass('animate');
            $(installationList.eq(2)).addClass('active');

            triggerStart.addClass('active');
            triggerStart.loadTyping({
                incorrectTypingSpeed: 70,
                deletingSpeed: 70,
                correctTypingSpeed: 70
            });
        }, 5500);
    };

    module.initToggle = function () {
        var trigger = $('.js-toggle-button'),
            container = $('.js-toggle-container'),
            activeClass = 'opened',
            self;

        trigger.on('click', function () {
            self = $(this);

            if (!container.hasClass(activeClass)) {
                self.removeClass('active');
                container.addClass(activeClass);
            } else {
                self.addClass('active');
                container.removeClass(activeClass);
            }
        })
    };

    module.initScrollTo = function () {
        var triggerContainer = ('.js-scroll-nav'),
            spaceTop,
            targetElement,
            self;

        $('a[href^="#"]', triggerContainer).on('click', function (event) {
            event.preventDefault();

            self = $(this);
            targetElement = $(self.attr('href'));

            if (self.attr('href') === '#features') {
                spaceTop = 120;
            } else {
                spaceTop = 85;
            }

            $('html, body').animate({
                scrollTop: targetElement.offset().top - spaceTop
            }, 900);
        });
    };

    module.initStickyHeader = function () {
        var header = $('.js-header');

        function stickyHeader() {
            if ($(document).scrollTop() > 0) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }

        stickyHeader();

        $(window).on('scroll', function () {
            stickyHeader();
        });
    };

    module.init = function () {
        module.initInstallationAnimation();
        module.initToggle();
        module.initScrollTo();
        module.initStickyHeader();
    };

    return module;
});
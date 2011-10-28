/*
 * jQuery commify Plug-in
 *
 * Copyright (c) 2011 WATANABE Hiroaki
 *
 * licensed under the MIT:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Rev$
 * Version: 0.0.2
 *
*/
(function($){
    $.fn.commify = function(){
        var _commify = function (matched,cap){
                if( matched.match(/\..*\./) || matched.match(/,/) ){
                    return matched;
                }
                while(cap != (cap = cap.replace(/^(-?\d+)(\d{3})/, '$1,$2')));
                return cap;
            };

        $(this).each(function(){
            $(this).contents().each(function (){
                if( this.nodeType == 3 ){ // if text node
                    $(this).replaceWith( $(this).text().replace(/([0-9\.,]+)/g, _commify ) );
                }
            });
        });
        return this;
    };
})(jQuery);

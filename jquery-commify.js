/*
 * jQuery commify Plug-in
 *
 * Copyright (c) 2011 WATANABE Hiroaki
 *
 * licensed under the MIT:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Rev$
 * Version: 0.0.1
 *
*/
(function($){
    $.fn.commify = function(){
        var _commify = (function (){
            return function (matched,cap){
                    if( matched.match(/\..*\./) ){
                        return matched;
                    } 
                    while(cap != (cap = cap.replace(/^(-?\d+)(\d{3})/, '$1,$2')));
                    return cap;
                }
            })();
        var _digdag = (function (){
            return function (elem){
                    if( elem.nodeType == 3 ){ // if text node
                        $(elem).replaceWith( $(elem).text().replace(/([0-9\.]+)/g, _commify ) );
                    }else{
                        $(elem).contents().each(function (){
                            _digdag(this);
                        })
                    }
                }
            })();

        $(this).each(function(){
            _digdag(this);
        });
        
        return this;
    };
})(jQuery);

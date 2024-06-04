"use strict";

 angular.module('visageNgCommon.config', [])

.constant('ENV', {development:true,apiEndpoint:'http://localhost:3000',pdfViewerEndpoint:'http://localhost:9011/viewer.html#/'})

.constant('ThirdParties', {checkout:{jsLib:'https://sandbox.checkout.com/js/v1/checkout.js',endpoint:'http://localhost:2222',apiKey:'pk_test_dd1c0c5a-2669-475a-952a-f203f08fdb73'},zappier:{updateLead:'https://zapier.com/hooks/catch/230zsq/'},intercom:{appId:'qgdnsb89'},auth0:{clientID:'bQ1LbVxzegv8oUew3SO7eHa8bemGgcu0',domain:'visage.auth0.com'}})

;
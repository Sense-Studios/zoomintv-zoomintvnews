/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var homeTimeout

 function initPushwoosh() {
   console.log("init puusssh!")
   var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

   // Should be called before pushwoosh.onDeviceReady
   document.addEventListener('push-notification', function(event) {
     var notification = event.notification;
     // handle push open here
     console.log("has notification", event)
     console.log("has link, switch dirty", event.notification.userdata.url)

     var url = "http://zoomin.tv/video/?source=ios#" + event.notification.userdata.hash

     // FIXME: TODO: consolodate this
     // var url = event.notification.userdata.url
     console.log("load: ", event.notification.userdata.url)
     $.ajax({
         url: url,
         type: 'GET',
         complete: function(e, xhr, settings){
           console.log('complete:', e, xhr, settings)
            if(e.status === 200){
               console.log("go! go! go!")
               //document.getElementById("app_content_frame").src = url;
               //document.getElementsByTagName('body')[0].style.backgroundImage = 'url("")'
               //document.getElementsByTagName('body')[0].style.backgroundColor = '#000000'
               clearTimeOut(homeTimeout)
               //window.open(url)
               window.location.hash = '#' + event.notification.userdata.hash

            }else{
               $('#could_not_connect').fadeIn('slow')
            }
         }
     });

   });

   // Initialize Pushwoosh. This will trigger all pending push notifications on start.
   pushwoosh.onDeviceReady({
     appid: "22245-224A7",
     projectid: "640476839621",       // android only, note thisis project number, not id!
     serviceName: "MPNS_SERVICE_NAME" // windows only
   });

   pushwoosh.registerDevice(
     function(status) {
       var pushToken = status.pushToken;
         // handle successful registration here
         console.log("has status", status)
         console.log("has token", pushtoken)
     },
     function(status) {
       // handle registration error here
       console.log("has token", status)
     }
   );
 }


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
      // should be called before pushwoosh.onDeviceReady
      document.addEventListener('push-notification', function(event) {
        var notification = event.notification;
        // handle push open here
        console.log("push has received etwas")
        // alert("you have received a push event and opens")
      });

      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function(e) {
        app.receivedEvent('deviceready')
        console.log("device ready:", e);

        var url = "http://zoomin.tv/video/?source=ios"
        console.log("load: ", url)
        $.ajax({
            url: url,
            type: 'GET',
            complete: function(e, xhr, settings){
              console.log('complete:', e, xhr, settings)
               if(e.status === 200){
                  console.log("go! go! go!")
                  homeTimeout = setTimeout( function() { window.open(url) }, 600 )
               }else{
                  $('#could_not_connect').fadeIn('slow')
               }
            }
        });

        console.log('now, init push')
        initPushwoosh();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

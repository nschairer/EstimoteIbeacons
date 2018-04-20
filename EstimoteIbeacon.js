

var fs = require('fs');
var Bleacon = require('bleacon');
var UUID = 'your UUID';
var Major = 'Your Major';
Bleacon.startScanning(UUID,Major); // scan for ibeacons
var jsonArray =[];
Bleacon.on('discover', function(bleacon) {
        //bleacon properties are: uuid, major, minor, measuredPower, rssi, accu$
                var beacon = JSON.stringify(bleacon);
                jsonArray.push(bleacon)
                fs.writeFile("test.json",JSON.stringify(jsonArray), function(er$
                if (err) {
                        return console.log(err);
                }
                console.log('file saved')
        });

});

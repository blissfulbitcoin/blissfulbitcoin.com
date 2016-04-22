const https = require(https);

var options = {
    hostname: bmoinvestorline.co.uk
    port: 443
    path: /
    method: get
   
}

var req = https.request(options, (res) => {
    console.log(statusCode: , rest.statusCode);
    console.log(headers: , res.headers);
    
    res.on(data, (d) => {
        process.stdout.write(d)
        
    })
})
req.end();

req.on(error, (e) => {
    console.error(e);
})
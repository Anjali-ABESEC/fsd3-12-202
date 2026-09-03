import http from "http"

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'application/json'});

    const product = [{
        name:"Iphone",
        price: 85000,
        qty:15,
    };

    const product = {
        name:"HP Laptop",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        price: 85000,
        qty:15, 
    },

    ];
    res.end(JSON.stringify(product));
  
});

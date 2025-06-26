import {serve} from "bun"
serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === "/"){
            return new Response("Chud gye guru", {status: 200});
        }
        if(url.pathname === "/ice-tea"){
            return new Response("Thanks for ordering ice tea, its really hot");
        }
        return new Response("404 Not Found",{status: 404});
    },
    port: 3000,
    hostname: "127.0.0.1"
})


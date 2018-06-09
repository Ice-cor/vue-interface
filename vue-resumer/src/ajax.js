window.zwq = {}
//命名空间

zwq.ajax = function(method,url,body,success,fail){
    let request = new XMLHttpRequest() 

    request.open(method,url) 
    
    request.onreadystatechange = function(){
        if (request.readyState === 4) {
                if (request.status === 200 ) {
                    let string = request.responseText
                    let object = JSON.parse(string)
                    success.call(undefined, object)
                } else if (request.status > 400) {
                    fail.call(undefined, request)
                }
        }
}

request.send(body)

}
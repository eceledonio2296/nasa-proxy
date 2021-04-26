try {
    var apiKey = context.getVariable("request.header.x-apikey");
    //var apiKey="LfZX1oMw1Q2xQgwrQFnY6IzBBcpwpVa1BIm1L8ED";
    var url = "https://api.nasa.gov/planetary/apod";
    context.setVariable("target.url", url + "?api_key=" + apiKey);
} catch (error) {
    print('Error occurred when trying to add the apikey header to the request.');
}
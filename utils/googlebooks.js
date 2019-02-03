const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    var response = {
        data: results.data,  // results. or response.? Using results because that seems to work
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.requestHeaders,
    };

    console.log(results.headers);
    console.log(results.config.headers);

    return JSON.stringify(response);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/

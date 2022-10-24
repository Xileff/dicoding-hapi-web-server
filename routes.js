const routes = [
    // Route: /
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Page not accessible with such method'
        }
    },

    // Route: /about
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            // Respose toolkit from h
            // h.response() is the same as response() from native NodeJS
            return h.response('About page')
                    .type('text/plain')
                    .header('X-Powered-By', 'NodeJS')
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Page not accessible with such method'
        }
    },

    // Route: hello
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params // {hello/Felix}
            const { lang } =  request.query // {hello/Felix?lang=id}

            if(lang === 'id'){
                return `Hai, ${name}!`
                // curl -X GET http://localhost:5000/hello/Felix?lang=id
            }

            return `Hello, ${name}!`
            // curl -X GET http://localhost:5000/hello/Felix
        }
    },

    // Route: /login
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            // Request is the same like native NodeJS, which is a subclass of readableStream
            const { username, password } = request.payload

            return `Welcome, ${username}`
        }
    },

    // Route: literally anything. This route will be last priority, because it is not specific
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page not found'
        }
    }
]

module.exports = routes
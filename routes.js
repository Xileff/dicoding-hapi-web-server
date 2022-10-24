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
            return 'About page'
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
            const { name = "stranger" } = request.params
            return `Hello, ${name}!`

            // curl -X GET http://localhost:5000/hello/Felix
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
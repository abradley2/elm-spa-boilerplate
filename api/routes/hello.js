exports.get = async function (ctx) {
    ctx.response.body = {message: 'Hello!'}
    ctx.response.status = 200
}

exports.get.schema = {
    body: {}
}

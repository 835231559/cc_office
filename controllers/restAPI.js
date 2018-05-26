module.exports = {
    'GET /restAPI': async (ctx, next) => {
        ctx.render('restAPI.html', {
            title: 'cc_office'
        });
    }
};
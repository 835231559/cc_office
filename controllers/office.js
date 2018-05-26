module.exports = {
    'GET /office': async (ctx, next) => {
        ctx.render('office.html', {
            title: 'cc_office'
        });
    }
};
// sign in:
const User = require('../models/User');

module.exports = {
    'POST /signin': async (ctx, next) => {
        console.log(ctx.request.body);
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';


            var pass = await User.findAll({
                attributes: ['passwd'],
                where: {
                    email: email
                }
            });

            var qqq = [{
                "qqqq":"qqqqq"
            }];
            var pwd = JSON.stringify(pass);
            console.log(pwd[0].passwd);
            console.log(qqq[0].qqqq);
            console.log(pwd);
            console.log(qqq);
            console.log(JSON.parse(pwd));
            console.log(JSON.parse(pwd)[0].passwd);
            


        if (password === JSON.parse(pwd)[0].passwd) {
            console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};
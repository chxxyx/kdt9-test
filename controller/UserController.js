// const { User } = require('../models');
const models = require('../models');

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};


exports.post_signup = (req, res) => {
    const { userid, name, pw } = req.body;
    models.User.create({ userid, name, pw})
    .then((result) => {
        res.send({ result: true });
    })
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {

    const { userid, pw } = req.body; // 구조 분해 할당
    models.User.findOne({
        // where: {
        //     userid: userid,
        //     pw: pw
        // } -> 생략이 가능하다 
        where: { userid, pw }
    }).then((result) => {
            res.send({ result: true, data: result});
    })

};

exports.postProfile = (req, res) => {
    const { userid } = req.body
    models.User.findOne({ where: { userid } })
    .then((result) => {
        console.log(result)
        res.render('profile', { data: result });
    })

}

exports.editProfile = (req, res) => {
    const { name, pw, id } = req.body;
    // 객체는 총 2개, 첫번째 객체는 사용자가 수정을 요청할 데이터들, 두번째 객체는 where 절
    models.User.update({ name, pw }, { where: { id } })
    .then((result) => {
        res.send({ result: true });
    })
}

exports.deleteProfile = (req, res) => {
    const { id } = req.body;
    models.User.destroy({ where: { id } })
    .then(() => {
        res.send({ result: true });
    })
}
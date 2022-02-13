require('dotenv').config()
module.exports = {
    env: {
        serviceName: 'NextDomain', //大文字小文字を区別する正式名称
        serviceNamePlain: 'nextdomain', //大文字小文字を区別しない正式名称
        serviceDomain: 'nextdomain.space', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '🍺NextDomainはFreenomAPIを使用した無料でドメインを取得することが可能なサービスです', //サービスの説明文を入力
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f37a.png', //サービスのアイコンを指定するためのURL
    }
};
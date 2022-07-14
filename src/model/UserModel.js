import APIUtil from '../utils/APIUtils'

export default class UserModel {

    static checkLogin() {
        return new Promise((resolve, reject) => {
            APIUtil.getJSONWithCredentials(process.env.REACT_APP_DOMAIN + `/api/user`, resolve, reject);
        });
    }

    static register(form) {
        return new Promise((resolve, reject) => {
            APIUtil.postJSONWithCredentials(process.env.REACT_APP_DOMAIN + `/api/user/register`, JSON.stringify(form), resolve, reject);
        });
    }

    static checkPhone(phone) {
        return new Promise((resolve, reject) => {
            APIUtil.getJSONWithCredentials(process.env.REACT_APP_DOMAIN + `/api/user/check-phone?phone=${phone}`, resolve, reject);
        });
    }
}
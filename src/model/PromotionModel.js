import APIUtil from '../utils/APIUtils'

export default class PromotionModel {

    static get(id) {
        return new Promise((resolve, reject) => {
            APIUtil.getJSONWithCredentials(process.env.REACT_APP_DOMAIN + `/api/promotion?id=${id}`, resolve, reject);
        });
    }


}
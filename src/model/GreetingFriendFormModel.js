import APIUtil from '../utils/APIUtils'

export default class GreetingFriendFormModel {

    static submit(form) {
        return new Promise((resolve, reject) => {
            APIUtil.postJSONWithCredentials(process.env.REACT_APP_DOMAIN + `/api/construction/greeting-new-friend/submit`, JSON.stringify(form), resolve, reject);
        });
    }


}
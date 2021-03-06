export const WAITING_SUBMIT = 0;
export const INIT = 1;
export const APPROVED = 2;
export const REJECTED = 3;
export const SENT_GIFT = 4;
export const RECEIVED = 5;
export const RE_SUBMIT = 6;
export const VERIFIED = 7;
export const NEED_APPROVAL_MORE = 8;


export function findName(value) {
    switch (value) {
        case WAITING_SUBMIT: return 'Chưa tham gia'
        case INIT: return 'Chờ duyệt'
        case APPROVED: return 'Đã duyệt'
        case REJECTED: return 'Từ chối'
        case SENT_GIFT: return 'Đã gửi quà'
        case RECEIVED: return 'Đã nhận'
        case RE_SUBMIT: return 'Submit lại'
        case VERIFIED: return 'Đã xác thực'
        case NEED_APPROVAL_MORE: return 'Cần xác nhận lại'
        default: return null;
    }
}

export function findColor(value) {
    switch (value) {
        case INIT: return '#20c997'
        case APPROVED: return '#dc3535'
        case REJECTED: return '#999'
        case SENT_GIFT: return '#999'
        case RECEIVED: return '#999'
        case RE_SUBMIT: return '#999'
        case VERIFIED: return '#999'
        case NEED_APPROVAL_MORE: return '#999'
        default: return null;
    }
}
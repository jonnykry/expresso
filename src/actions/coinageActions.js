import ActionUtil from './actionUtil';

const COINAGE_URL = 'https://coinage.expresso.store/api/customer';

export function modifyPaymentInfo(id, card) {
    return dispatch => {
        Stripe.setPublishableKey(process.env.REACT_APP_STRIPE_PUB_KEY);

        return Stripe.createToken(card, function (status, response) {
            card.token = response.id;
            card.userId = id;

            if (status !== 200) {
                dispatch(ActionUtil.error(status, response.error.message));
                return;
            }

            const url = COINAGE_URL + '/' + id;
            dispatch(ActionUtil.handleRequest(url, 'POST', card));
        });
    };
}

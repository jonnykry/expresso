import ActionUtil from './actionUtil';

const COINAGE_URL = 'https://coinage.expresso.store/api/customer';

export function modifyPaymentInfo(data) {
    return dispatch => {
        console.log(data, process.env);
        Stripe.setPublishableKey(process.env.REACT_APP_STRIPE_PUB_KEY);

        return Stripe.createToken(data, function (status, response) {
            data.token = response.id;

            if (status !== 200) {
                dispatch(ActionUtil.error(response, status));
            }

            const url = COINAGE_URL + '/' + data.UserID;
            return ActionUtil.handleRequest(url, 'POST', data);
        });
    };

}

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '')


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-5 bg-gradient-to-b from-blue-900 to-cyan-300' type="submit" disabled={!stripe}>
                    Pay
                </button>

            </form>
            {
                cardError && <p className='text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-300'>{cardError}</p>
            }
        </>

    );
};

export default CheckoutForm;
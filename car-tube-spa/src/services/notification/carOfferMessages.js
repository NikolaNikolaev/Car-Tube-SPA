const successMessages = {
    successfullyCreatedCarOffer: 'Successfully Created Car Offer',
    successfullyEditedCarOffer: 'Successfully Edited Car Offer',
    successfullyDeletedCarOffer: 'Successfully Deleted Car Offer',
};

const errorMessages = {
    invalidUrl: 'Invalid Image Url Format',
    invalidPrice: 'Price Should Be Larger Than Zero',
};

const carOfferMessages = {
    ...successMessages,
    ...errorMessages,
};
export default carOfferMessages;
const API_BASE_URL_COUSTOMER = 'api/v1/customer';
const API_BASE_URL_APPOINTMENT = 'api/v1/appoinments';

export const environment = {
  ENVIRONMENTNAME: 'LOCAL',
  YEAR_VERSION: '2023',
  VERSION: '1.0.0',
  TAG_VERSION: 'ITE-2023-1.0.0',
  production: false,

  AUTENTICATION_URL: {},
  REGISTRATION_STEP_NEW_USER_URL: {
    REGISTER: `${API_BASE_URL_COUSTOMER}/saveCustomer`,
    GET_CUSTOMER: `${API_BASE_URL_COUSTOMER}/getCustomer/`,
  },
  APPOINMENT_STEP_URL: {
    ADDAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/saveAppoinment`,
    GETAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/getAppoinment/`,
    UPDATEAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/updateAppoinment`,
    DELETEAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/deleteAppoinment/`,
  },
};

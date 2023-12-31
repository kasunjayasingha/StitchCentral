const API_BASE_URL_COUSTOMER = 'api/v1/customer';
const API_BASE_URL_APPOINTMENT = 'api/v1/appoinments';
const API_BASE_URL_AUTHENTICATION = 'api/v1/auth';

export const environment = {
  ENVIRONMENTNAME: 'LOCAL',
  YEAR_VERSION: '2023',
  VERSION: '1.0.0',
  TAG_VERSION: 'ITE-2023-1.0.0',
  production: false,

  AUTENTICATION_URL: {
    CHEACK_EMAIL: {
      EMAIL: `${API_BASE_URL_AUTHENTICATION}/checkEmailIsPresent/`,
      ONLY_EMAIL: `${API_BASE_URL_AUTHENTICATION}/checkOnlyEmailIPresent/`,
    },
    LOGIN: {
      LOGIN: `${API_BASE_URL_AUTHENTICATION}/login`,
    },
  },
  REGISTRATION_STEP_NEW_USER_URL: {
    REGISTER: `${API_BASE_URL_COUSTOMER}/saveCustomer`,
    GET_CUSTOMER: `${API_BASE_URL_COUSTOMER}/getCustomer/`,
    UPDATE_CUSTOMER: `${API_BASE_URL_COUSTOMER}/updateCustomer`,
    SAVE_CONTACTUS: `${API_BASE_URL_COUSTOMER}/saveContactUs`,
  },
  APPOINMENT_STEP_URL: {
    ADDAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/saveAppoinment`,
    GETAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/getAppoinment/`,
    UPDATEAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/updateAppoinment`,
    DELETEAPPOINMENT: `${API_BASE_URL_APPOINTMENT}/deleteAppoinment/`,
    ADDAPPOINMENT_WITH_SAMPLE: `${API_BASE_URL_APPOINTMENT}/uploadFile`,
  },
};

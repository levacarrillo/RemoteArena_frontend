import * as services from '../services/service';

export const getUsersCatalogue = (data) => async (dispatch) => {
    console.log('api')
    try {
        const response = services.getUsersCatalogue(data);
        return { success: true, response }
    } catch (error) {
        return { success: false, response: error }
    }
};


const url_base = 'http://10.131.10.43:84'

const axios = require('axios');
 
export function consultaDetalleClasEstudiante(idClass, header) {
    let classId = {
        classId: idClass
    }
    return axios.post(url_base + '/superAdmin/classDetail', classId, header)
}

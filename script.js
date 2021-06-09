const datos = [];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            console.log('No hay datos');
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

async function fetchingData() {
    try {
        const datosFeteched = await getDatos();
        console.log(datosFeteched);
    } catch (err) {
        console.log(err);
    }
}
fetchingData();
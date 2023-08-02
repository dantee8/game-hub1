import axios from "axios";



export default axios.create(
    {   baseURL: 'https://api.rawg.io/api',
        params : {
            key : 'f11c061867c7412cbb4a9b7364a12fa9'
        }
    }
)
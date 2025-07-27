import axios from "axios"

const instance= axios.create({   
    base_Url:"https://api.themoviedb.org/3"
});

export default instance;
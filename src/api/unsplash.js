import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID c1465ccdd72fbc113470f92a84b212bd2e7774e49b817b00447f47133c08409e'
    }

});
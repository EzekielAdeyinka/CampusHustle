const searchForm = document.getElementById('search-form');

const makeRequest = (url, method, data = null) => {
    const req = null;
    if(method === 'get'){
        req = fetch(url , {
            method,
        });
    } else if (method === 'post'){
        req = fetch(url , {
            methd 
        })
    }
}

const handleSearch = (e, searchForm) => {
    const formData = new FormData(searchForm);

}

if(searchForm !== null) {
    searchForm.addEventListener('submit', (e) => handleSearch(e,searchForm));
}
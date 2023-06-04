let userId='';
window.onload=()=>{
    const params = new URLSearchParams(window.location.search)
    userId=params.get('userId')
    //Add your URL (this request should give you account details)
    fetch('url', {
        method: 'POST',
        body: {'userId':userId},
    })
        .then((response) => response.json())
        .then((data) => {
        
        })
        .catch((error) => {
        //handle error
        });
    //once you get account details append the same in HTML

}

elementSelector('logout').addEventListener('click',()=>{
    //remove userId from 
    sessionStorage.removeItem('userId');
    location.href='index.html?loggedOut=true';
})

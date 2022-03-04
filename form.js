const form =document.getElementById('form');
const username =document.getElementById('username');
const reg =document.getElementById('reg');
const branch =document.getElementById('branch');
const year =document.getElementById('year');
const pass_year =document.getElementById('pass_year');
form,addEventListener('submit',(e)=> {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const regValue = reg.value.trim();
    const branchValue = branch.value.trim();
    const yearValue = year.value.trim();
    const pass_yearValue = pass_year.value.trim();
    if(usernameValue==='')
    {
        setErrorFor(username,"name cant be blank");
    }
    else{
        setSuccessFor(username);
    }
    if(regValue==='')
    {
        setErrorFor(reg,"name cant be blank");
    }
    else{
        setSuccessFor(reg);
    }
    if(yearValue==='')
    {
        setErrorFor(year,"name cant be blank");
    }
    else{
        setSuccessFor(year);
    }
    if(pass_yearValue==='')
    {
        setErrorFor(pass_year,"name cant be blank");
    }
    else{
        setSuccessFor(pass_year);
    }
    if(branchValue==='')
    {
        setErrorFor(branch,"name cant be blank");
    }
    else{
        setSuccessFor(branch);
    }
}
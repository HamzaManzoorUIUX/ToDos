//change Tabs
function changeTabes(){
    if(form.className=='displayNone')
    {
        form.className='';
        main.className='displayNone';
        document.querySelector('div.sidenav-overlay').style.display='none';
    }
    else if(main.className=='displayNone')
    {
        form.className='displayNone';
        main.className='';
    }
}

// model
function openModel(e){
if(e.target.classList.contains('card-panel'))
{
    var model=document.getElementById('myModel');
    model.className='closeModel';    
}
}
function closeModel(e){
    if(e.target.classList.contains('closeModel'))
    {
        var model=document.getElementById('myModel');
    model.className='displayNone closeModel';
    }
    
}
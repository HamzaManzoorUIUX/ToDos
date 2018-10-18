// pre requires
var todosMain=document.getElementById('toDos');

// object for data
function Plan(title,location,time,date,dec)
{
    this.title=title;
    this.location=location;
    this.time=time;
    this.date=date;
    this.dec=dec;
    this.comp='false';
}

// getData From localStorage
TData=localStorage.getItem('todos');

// make array
if(TData===null)
{
    var myData=[];
}
else{
 myData=JSON.parse(TData);
}

// save Data in Object
function SubmitBtnF()
{
    var title=document.getElementById('title').value;
    var location=document.getElementById('location').value;
    var time=document.getElementById('time').value;
    var date=document.getElementById('date').value;
    var dec=document.getElementById('dec').value;
    var abc=true;
    for(var i=0;i<myData.length;i++)
    {
        if(myData[i].title===title)
        {
        alert('Change title');
        return 0;
        }

    }
    var newPlan=new Plan(title,location,time,date,dec);
    myData.push(newPlan);
    saveData();
    loadHome();
    M.toast({html: 'Data Add'});
    changeTabes(); 
    addForm.reset(); 
}
// save data in localStorage
function saveData(){
    localStorage.setItem('todos',JSON.stringify(myData));
}

function loadHome(){
    if(myData.length>0)
    {
        toDos.innerHTML='';
    for(var i=0;i<myData.length;i++)
    {
        toDos.innerHTML+=`
    <div class="card-panel white-text waves-effect waves-light  wow fadeInleft" onclick="viewModel(${i})">
                            <label>
                                <input type="checkbox" class="check${i}" onclick='CB2O(event,${i})' />
                                <span class="span${i}">
                                ${myData[i].title}
                                </span>
                            </label>
                            <a href="javascript:void(0)" class="white-text right close" onclick='delete1(${i})'>
                                <i class="material-icons">
                                    close
                                </i>
                            </a>
                            <a href="javascript:void(0)" class="white-text right create" onclick='edit1(${i})'>
                                <i class="material-icons">
                                    create
                                </i>
                            </a>
                        </div>
    `;
    }
    }
    else{
        toDos.innerHTML='<h1 class="white-text center">Empty</h1>';
    }
    O2CB();
}
// line Event and CheckBox to array
function CB2O(event,i){
    var linespan=document.querySelector(`.span${i}`);
    var cBox=document.querySelector(`.check${i}`);
    if(cBox.checked==true)
    {
        myData[i].comp='true';
        linespan.classList.add("lineT");        
    }
    else{
        myData[i].comp='false';
        linespan.classList.remove("lineT");    
    }
saveData();
}

// array to check box
function O2CB()
{
    var CBoxs=document.querySelectorAll('input[type="checkbox"]');
    for(var i=0;i<CBoxs.length;i++)
    {
        if(myData[i].comp=="true")
        {
            CBoxs[i].checked=true;
            
        }
    }
}
// delete any box
function delete1(i){
myData.splice(i,1);
saveData();
loadHome();
M.toast({html: 'Data Rmove'});

}
// delete All
function removeAll(){
    localStorage.clear();
    myData=[];
    loadHome();
    M.toast({html: 'Remove All'});
}
// edit one box
function edit1(i){
    if(event.target.parentElement.classList.contains('create'))
    {
        openModel(event);
        modelBody.innerHTML=`
    <h3>Edit</h3>
    <table>
                        <tr>
                            <td>
                            Title
                            </td>
                            <td>
                            <input type="text" id="ititle" readonly value="${myData[i].title}">
                            </td>
                        </tr>
                        <tr>
                        <td>
                        Location
                        </td>
                        <td>
                        <input type="text" id="ilocation" value="${myData[i].location}" required>
                        </td>
                    </tr>
                    <tr>
                            <td>
                            Time
                            </td>
                            <td>
                            <input type="text" class="timepicker" value="${myData[i].time}" id="itime" required>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Date
                            </td>
                            <td>
                            <input type="text" class="datepicker" value="${myData[i].date}" id="idate">                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Decription
                            </td>
                            <td>
                            <input type="text" id="idec" value="${myData[i].dec}" required>                                
                            </td>
                        </tr>
                    </table>
    `;
    modelFoot.innerHTML=`
    <button  class="btn" id="SubmitBtn" onclick="editBtnF(${i})">
                                Edit
                            </button>
                            <button class="btn red waves-effect waves-light closeModel" onclick="closeModel(event)">
                            Cancel
                        </button>
    `;
    }
}

function viewModel(i){
    if(event.target.classList.contains('card-panel'))
    {
        openModel(event);
        modelBody.innerHTML=`
    <h3>View</h3>
    <table>
                        <tr>
                            <td>
                            Title
                            </td>
                            <td>
                            ${myData[i].title}
                            </td>
                        </tr>
                        <tr>
                        <td>
                        Location
                        </td>
                        <td>
                        ${myData[i].location}
                        </td>
                    </tr>
                    <tr>
                            <td>
                            Time
                            </td>
                            <td>
                            ${myData[i].time}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Date
                            </td>
                            <td>
                            ${myData[i].date}                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Decription
                            </td>
                            <td>
                            ${myData[i].dec}                                
                            </td>
                        </tr>
                    </table>
    `;
    modelFoot.innerHTML=`
                            <button class="btn red waves-effect waves-light closeModel" onclick="closeModel(event)">
                            Cancel
                        </button>
    `;
    }
}
function editBtnF(i)
{
    myData[i].title=document.getElementById('ititle').value;
    myData[i].location=document.getElementById('ilocation').value;
    myData[i].time=document.getElementById('itime').value;
    myData[i].date=document.getElementById('idate').value;
    myData[i].dec=document.getElementById('idec').value;
    saveData();
    loadHome(); 
    M.toast({html: 'Data Edit'});
    addForm.reset(); 
    var model=document.getElementById('myModel');
    model.className='displayNone closeModel';
}
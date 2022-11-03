var Dform = document.getElementById('dynamic_form');

var key_input = document.getElementById('key');
var select_input = document.getElementById('dataType');
var key_value = document.getElementById('key_value');

var addFields = document.getElementById('addFields');
var deleteField = document.getElementsByClassName('delRow');

var email = '';
var phone_number = 0;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var submitbtn = document.getElementById('submit');

submitbtn.onclick = function(){
    
    if (email.length == 0){
        window.alert("Please Fill in your Email!");
        
    }else if(!emailRegex.test(email)){
        window.alert(email_input, "Use the correct email format."); 
    }

    if (phone_number.length < 10){
        window.alert("Please enter a correct Phone number.")
    }
}

var insert_position = 2;

select_input.addEventListener('click', on_change);


addFields.onclick = function() {
    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');

    var newKeyInput = document.createElement('input');
    newKeyInput.setAttribute('type', 'text');
    newKeyInput.setAttribute('name', 'key[]');
    newKeyInput.setAttribute('placeholder', 'Key');
    newKeyInput.setAttribute('id', 'key');
    newRow.appendChild(newKeyInput);

    var newSelectInput = document.createElement('select');
    newSelectInput.setAttribute('name', 'dataType[]');
    newSelectInput.setAttribute('id', 'dataType');
    newSelectInput.setAttribute('onchange', 'on_change()');

    newSelectInput.addEventListener('click', on_change);

    var disabled_option = document.createElement('option');
    disabled_option.setAttribute('disabled', true);
    disabled_option.setAttribute('selected', true)
    disabled_option.innerText = "Data Type";
    newSelectInput.appendChild(disabled_option);

    var text_option = document.createElement('option');
    text_option.setAttribute('value', 'text');
    text_option.innerText = "Text";
    newSelectInput.appendChild(text_option);

    var number_option = document.createElement('option');
    number_option.setAttribute('value', 'number');
    number_option.innerText = "Number";
    newSelectInput.appendChild(number_option);

    var tel_option = document.createElement('option');
    tel_option.setAttribute('value', 'tel');
    tel_option.innerText = "Telephone";
    newSelectInput.appendChild(tel_option); 

    var email_option = document.createElement('option');
    email_option.setAttribute('value', 'email');
    email_option.innerText = "Email";
    newSelectInput.appendChild(email_option);

    var list_option = document.createElement('option');
    list_option.setAttribute('value', 'list');
    list_option.innerText = "List";
    newSelectInput.appendChild(list_option);

    var map_option = document.createElement('option');
    map_option.setAttribute('value', 'map');
    map_option.innerText = "Map";
    newSelectInput.appendChild(map_option);

    var boolean_option = document.createElement('option');
    boolean_option.setAttribute('value', 'boolean');
    boolean_option.innerText = "Boolean";
    newSelectInput.appendChild(boolean_option);

    var form_option = document.createElement('option');
    form_option.setAttribute('value', 'form');
    form_option.innerText = "Form";
    newSelectInput.appendChild(form_option);

    newRow.appendChild(newSelectInput);

    var newValueInput = document.createElement('input');
    newValueInput.setAttribute('type', 'text');
    newValueInput.setAttribute('name', 'value[]');
    newValueInput.setAttribute('placeholder', 'Value');
    newValueInput.setAttribute('id', 'key_value');
    newRow.appendChild(newValueInput);

    var del = document.createElement('a');
    
    del.innerHTML = "&times;";
    del.className = 'delRow';
    newRow.appendChild(del);

    del.addEventListener('click', removeInput);

    Dform.insertBefore(newRow, Dform.children[insert_position]);
    var rows = document.getElementsByClassName('row');
    insert_position = rows.length + 1;
    

}

function removeInput(){
    this.parentElement.remove();
    var rows = document.getElementsByClassName('row');
    insert_position = rows.length;
    
}

function on_change(){

    var selectedDataType = this.options[this.selectedIndex].value;
    console.log(selectedDataType);
    if (selectedDataType == "number"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'range');
        all_inputs[1].setAttribute('max', '100');
        all_inputs[1].setAttribute('min', '0');
        all_inputs[1].setAttribute('step', '5');
        // small = document.createElement('small');
        // all_inputs[1].oninput = function() {
        //     small.innerHTML = this.value;
        // }
        // all_inputs[1].parentNode.insertBefore(small, all_inputs[1].parentNode.children[3]);
    }
    if (selectedDataType == "tel"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'tel');
        phone_number = all_inputs[1].value;
    }
    if (selectedDataType == "boolean"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'checkbox');
        
    }
    if (selectedDataType == "email"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'email');
        email = all_inputs[1].value;
        
    }
    if (selectedDataType == "text"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'text');
    }
    if (selectedDataType == "list"){
        all_inputs = this.parentNode.querySelectorAll('input');
        var textarea = document.createElement('textarea');
        textarea.setAttribute('rows', '4');
        textarea.setAttribute('columns', '30');
        all_inputs[1].remove();
        this.parentNode.insertBefore(textarea, this.parentNode.children[2]);
    }
    if (selectedDataType == "map"){
        all_inputs = this.parentNode.querySelectorAll('input');
        all_inputs[1].setAttribute('type', 'text');
        all_inputs[1].innerHTML = "Map Loading...";
    }
}

function cant_delete(){
    window.alert("Sorry, You cant delete the last element");
}




// function populateTextArea(e){
//     var tag = e.target.value
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     li.innerHTML = tag;
//     ul.appendChild(li);
//     e.target.appendChild(ul);    
// }


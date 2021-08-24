export  function fetchData(){
    var data;
    fetch('./EmployeeData.json')
    .then(response => response.json())
    .then(response => data=response)

    return data
}

export function formatDate(jsonData){
    for (var i = 0; i < jsonData.length; i++) {
        if(jsonData[i].dob){
            jsonData[i].dob = jsonData[i].dob.slice(0, 10);
        }else{
            jsonData[i].dob= "NA"
        }
    }
    return jsonData;
}
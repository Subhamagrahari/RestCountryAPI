function getData()
{
    var request=new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/bharat")
    request.send()

    request.addEventListener("load",()=>{
        var data=JSON.parse(request.responseText)
        data=data[0]
       document.getElementById("name").innerHTML=data.name.official
       document.getElementById("capital").innerHTML=data.capital[0]
       document.getElementById("flags").src=data.flags.svg
       document.getElementById("population").innerHTML=data.population
       document.getElementById("area").innerHTML=data.area
       document.getElementById("region").innerHTML=data.region
       document.getElementById("subregion").innerHTML=data.subregion
       document.getElementById("borders").innerHTML=data.borders
       document.getElementById("timezone").innerHTML=data.timezones
       document.getElementById("landlocked").innerHTML=data.landlocked
       document.getElementById("independent").innerHTML=data.independent
       document.getElementById("unname").innerHTML=data.unmember
       document.getElementById("maps").href =data.maps.googleMaps
    
        
    })
}
getData()
function searchCountry()
{
    var name=document.getElementById("search").value
    var request=new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/"+name )
    request.send()

    request.addEventListener("load",()=>{
        var data=JSON.parse(request.responseText)
        data=data[0]
       document.getElementById("name").innerHTML=data.name.official
       document.getElementById("capital").innerHTML=data.capital[0]
       document.getElementById("flags").src=data.flags.svg
       document.getElementById("population").innerHTML=data.population
       document.getElementById("area").innerHTML=data.area
       document.getElementById("region").innerHTML=data.region
       document.getElementById("subregion").innerHTML=data.subregion
       document.getElementById("borders").innerHTML=data.borders
       document.getElementById("timezone").innerHTML=data.timezones
       document.getElementById("landlocked").innerHTML=data.landlocked
       document.getElementById("independent").innerHTML=data.independent
       document.getElementById("unname").innerHTML=data.unmember
       document.getElementById("maps").href =data.maps.googleMaps
    
        
    })
}
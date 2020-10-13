window.onload = function()
{
    includeHTML();
}
function includeHTML()
{
    let element;
    let filename;
    let xmlhttp = new XMLHttpRequest();
    let z = document.getElementsByTagName("*");

    for(let i = 0; i < z.length; i++)
    {
        element = z[i];
        filename = element.getAttribute("import-page");
        
        if (filename)
        {
            console.log(filename);
            xmlhttp.open("GET", filename, false);
            xmlhttp.send();

            if (xmlhttp.status == 200)
            {
                element.innerHTML += xmlhttp.responseText;
            } 

            else 
            {
                throw `[ERROR] status ${xmlhttp.status} With the file ${filename}`;
            }
        }
    }
}
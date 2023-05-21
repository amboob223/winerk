const namee = document.getElementById("name");
const destination = document.getElementById("destination");
const originn = document.getElementById("origin");
const bags = document.getElementById("bags");
const pic = document.getElementById("pic"); 
const button = document.getElementById("btn");


const users = document.getElementById("users");
const uname = document.getElementById("uname");
const ubags = document.getElementById("ubags");
const uorigin = document.getElementById("uorigin");
const uimage = document.getElementById("uimage");
const udestination = document.getElementById("udestination");


//event

button.addEventListener("click", async(event)=>{
    try {
        event.preventDefault()
    //now we got to use the form data objext to makew the form since we got file and form data 
    const body = new FormData()
        body.append("name",namee.value)
        body.append("destination",destination.value)
        body.append("origin",originn.value)
        body.append("bags",bags.value)
        body.append("pic",pic.files[0]) // remember to do files it workls with the form data object to give you the files in a the form data  here 

    const response = await fetch("http://localhost:5000/travlers",
    {
        method:"POST",
        body:body
    })
    } catch (error) {
      console.log(error) 
    }
});

//event
    users.addEventListener("click", async(e)=>{
        try {
            e.preventDefault()
             const body = new FormData();

            body.append("uname",uname.value)
            body.append("ubags",ubags.value)
            body.append("udestination",udestination.value)
            body.append("uorigin", uorigin.value)
            body.append("uimage",uimage.files[0]) // that files shhit comes from the fome data object and node 

            const response = await fetch("http://localhost:5000/users",
            {
                method:"POST",
                body:body
            })

            console.log("jjj")
        } catch (error) {
            console.log(error)
        }
    });


function login(username, password)
{
    if(username==="admin" && password==="123")
    {
        console.log("login successful");
    }
    else
    {
            console.log("invalid username and paasword");
    }
}
login("admin","123");
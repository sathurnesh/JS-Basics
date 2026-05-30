function launchBrowser(browserName){

//let browserName="chrome" 

    if(browserName=="chrome")
    {
        console.log("This is expected and browser is chrome")
        
    }
    else if(browserName=="safari")
    {
        console.log("Mac Engine")
        
    }
    else if(browserName=="FireFox")
    {
        console.log("Mozilla Engine")
        
    }
    else{
        console.log("No Browser")
    }
}

launchBrowser("FireFox");
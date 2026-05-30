function runtests(testType){
switch(testType){
    case "smoke":
    console.log("This is smoke")
    break;


    case "sanity":
    console.log("This is sanity")
    break;

    case "regression":
    console.log("This is regression")
    break;

    default:
      console.log("This is smoke")  


}
}
runtests();
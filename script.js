function getFormvalue() {
    //Write your code here
	let fname=document.querySelection(`[name="fname"]`).values;
	let lname=document.querySelection(`[name="lname"]`).values;
	alert(fname+" "+lname);

}

function test() {
	var doc = new jsPDF();
	var source = window.document.getElementsByTagName("body")[0];
	doc.fromHTML(source,15,15);
	doc.output("dataurlnewwindow");
}
   document.addEventListener("deviceready", onDeviceReady, false);
	// PhoneGap加载完毕
		// PhoneGap加载完毕
	function create() {
		var myContact = navigator.contacts.create();
		//myContact.displayName = "Test";
		myContact.name = "Test";
		myContact.nickname = "nicai";
		myContact.gender = "male";
		myContact.phoneNumbers = "15810881100";
		myContact.emails = "110@163.com";
		myContact.addrsses = "3sweww";
		myContact.save();
		alert("save success");
	} 
	function find() {

		var options = new ContactFindOptions();
		options.filter="";
		var fields = ["nickname"];
		navigator.contacts.find(fields, onSuccess, onError);
	}
	// onSuccess: 获取当前联系人结果集的快照
	function onSuccess(contacts) {
alert("result length:"+contacts.length);
		//for (var i=0; i<contacts.length; i++) {
		//	aler("Display Name = " + contacts[i].nickname);
		//}
	}

	// onError: 获得联系人失败
	function onError() {
		alert('onError!');
	}


	// �ȴ�����PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false); 
	
	// ������ݿ�
	function populateDB(tx) {
		//tx.executeSql('DROP TABLE DEMO IF EXISTS');
		tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
		tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Firest row")');
		tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Sec3eond12 row")',[],insertSuccess);
	}
	function testDB(){
		var db = window.openDatabase("Database7", "1.0", "PhoneGap Demo", 200000);
		db.transaction(populateDB, errorCB, successCB);
	};
	function insertSuccess(te,results){
		console.log("Insert ID = " + results.insertId);
		console.log("Rows Affected = " + results.rowAffected);
	}
	// ��ѯ���ݿ�
	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}
	
	// ��ѯ�ɹ�����õĻص�����
	function querySuccess(tx, results) {
		//alert("Insert ID = " + results.insertId);
		//alert("Rows Affected = " + results.rowAffected);
		//alert("Insert ID = " + results.rows.length);
		var len = results.rows.length;
		console.log("DEMO table: " + len + " rows found.");
		for (var i=0; i<len; i++){
			alert("��������֮��Ĳ�ѯ��¼:Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
		}
	}
	
	// ����ִ�г������õĻص�����
	function errorCB(err) {
		console.log("Error processing SQL: "+err.message);
	}
	
	// ����ִ�гɹ�����õĻص�����
	function successCB() {
		var db = window.openDatabase("Database7", "1.0", "PhoneGap Demo", 200000);
		db.transaction(queryDB, errorCB);
	}
	
	// PhoneGap�������
	//function onDeviceReady() {
	//	var db = window.openDatabase("Database9", "1.0", "PhoneGap Demo", 200000);
	//	db.transaction(populateDB, errorCB, successCB);
	//}
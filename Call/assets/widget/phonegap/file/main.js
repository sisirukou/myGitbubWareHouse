	document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, fail);
	 //window.resolveLocalFileSystemURI("file:///var/mobile/Applications/E3A1AF2B-5037-4D82-A7F6-A285E3529011/Documents/apps1/txt1.txt", onSuccess, fail);
}
function onSuccess(fileSystem){
   //alert(fileSystem.name);
   // alert("name:"+fileSystem.name+",root:"+fileSystem.root.name);
	fileSystem.root.getDirectory("/sdcard/apps1",{create:true},directSuc,directFail);
	//fileSystem.root.getDirectory("test",{create:true},directSuc,directFail);
	
};
function directSuc(entry){
alert("sds");
    //console.log(entry.fullPath);
	//document.getElementById("parent").innerHTML= entry.fullPath;
	//document.getElementById("newName").innerHTML= entry.fullPath;
	//DirectoryEntry  �ĸ�������
	//alert("DirectoryEntry:isfile="+entry.isFile+",isDirectory="+entry.isDirectory+",name="+entry.name+",fullpath="+entry.fullPath);
	//alert(entry.filesystem);
	//entry.getFile("lockfile.txt",{create:true,exclusive:true},fileSuc,fileFail);
	//entry.getMetadata(metaDataSuc,metaDataFail);
	//�ƶ��ļ�
	//moveTo(entry);
	//copyTo(entry);
	//alert(entry.toURL());
	//entry.remove(removeSuc,fail);
	//entry.getParent(parentSuc,fail);
	//entry.getDirectory("/temp2",{create: true, exclusive: false},getDirectSuc,fail);
	entry.getFile("/sdcard/apps1/txt1.txt",{create: true, exclusive: false},getFileSuc,fail);
	//entry.removeRecursively(removeRecSuc,fail);
	//entry.createReader(readerSuc,fail);
};
function readerSuc(entries){
	for(var i=0;i<entries.length;i++){
	   var temp = entries[i];
		alert("name:"+temp.name+",fullPath:"+temp.fullPath);
	}
};
function removeRecSuc(){
	alert("removeRecSuc is OK");
};
function getFileSuc(file){
	//alert("name:"+file.name+",fullPaht:"+file.fullPath+",type:"+file.type+",lastModifiedDate:"+file.lastModifiedDate+",size:"+file.size);
	//alert("name:"+temp.name+",fullPath:"+temp.fullPath);
	file.getMetadata(metaDataSuc, fail);
	alert(file.toURL());
	//file.remove(removeSuc,fail);
	file.getParent(parentSuc,fail);
	file.createWriter(writerSuc,fail);
	file.file(fileSuc,fail);
	
};
function writerSuc(writer){
	//writer.write("some text to the file");
	//alert("ok");
	writer.onwrite = function(evt) { 
			alert("write success"); 
		}; 
		//alert(writer.readyState+","+writer.fileName+","+writer.length+","+writer.position);
		writer.onwritestart = function(){
			alert("onwritestart");
		};
		writer.onwriteend = function(evt){
			alert("onwriteend");
		};
		writer.onerror = function(error){
			alert(error);
		};
		//writer.onabort = function(evt){
		//	alert("onabort");
		//};
		writer.write("some sample text"); 
		// �ļ���ǰ�����ǡ�some sample text��
		writer.truncate(11); 
		// �ļ���ǰ�����ǡ�some sample�� 
		writer.seek(4); 
		// �ļ���ǰ������Ȼ�ǡ�some sample���������ļ���ָ��λ�ڡ�some���ġ�e��֮��
		writer.write(" different text"); 
		// �ļ��ĵ�ǰ�����ǡ�some different text��
};
function getDirectSuc(entry){
	alert(entry.fullPath);
};
function parentSuc(parent){
	alert("parentName="+parent.name);
};
function removeSuc(){
	alert("removeSucceeded");
};
function metaDataSuc(metadata){
//metadata   ��modificationTime����
	alert(metadata.modificationTime);
};
function metaDataFail(error){
	alert(error.code);
};
function directFail(error){
	alert("directErro:"+error.code);
};
function fileSuc(file){
	//alert("file:"+file);
	//readDataUrl(file); 
	readAsText(file); 
};
function readDataUrl(file) { 
		var reader = new FileReader(); 
		   reader.onloadend = function(evt) { 
		   alert("Read as URL");
			alert(evt.target.result); 
		}; 
		reader.readAsDataURL(file); 
	}  
	
	function readAsText(file) { 
		var reader = new FileReader(); 
		//reader.onloadstart = function(evt){
		//	alert("loadStart");
		//};
		reader.onprogress = function(){
			alert("onprogress");
		};
		//reader.onload = function(evt){
		//	alert("onload");
		//};
		//reader.onabort = function(evt){
		//	alert("onabort");
		//};
		//reader.onerror = function(evt){
		//	alert("onerror");
		//};
		reader.onloadend = function(evt) { 
			//alert("Read as text"); 
			alert(evt.target.result); 
		}; 
		//encoding  ios��֧�� һֱ��utf��8����
		reader.readAsText(file); 
		//reader.abort(); 
	}  
function fileFail(error){
	alert(error.code);
};
function fail(error) {	
	alert(error.code);	
}


function win(entry) {
	console.log("New Path:" + entry.fullPath);
}

function fail(error) {
	alert(error.code);
}
function copyTo(entry){
 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
   fileSystem.root.getDirectory("/sdcard/apps1",{create:true},function(entry){
		entry.getDirectory("/sdcard/apps1/temp2",{create: true, exclusive: false},function(file){
		file.copyTo(entry, "ttt3", moveToSuc, fail);
	});
   },directFail);
   }, fail);
};
function moveTo() {
   // �ƶ�Ŀ¼��һ���µ�Ŀ¼��������������
   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
   fileSystem.root.getDirectory("/sdcard/apps1",{create:true},function(entry){
		alert("toURI:"+entry.toURI());
		entry.getMetadata(metaDataSuc,metaDataFail);
		entry.getDirectory("/sdcard/apps1/temp2",{create: true, exclusive: false},function(file){
		file.moveTo(entry, "ttt", moveToSuc, fail);
		file.remove(removeSuc,fail);
		});
   },directFail);
   }, fail);
  // window.resolveLocalFileSystemURI("file:///var/mobile/Applications/E3A1AF2B-5037-4D82-A7F6-A285E3529011/Documents/apps1/",function(file){
   
} 
function moveToSuc(entry){
	alert(entry.name);
};
function fail(error){
	alert(error.code);
};	
	// �ɼ������ɹ���ɺ�Ļص�����
	function captureSuccess(mediaFiles) { 
	
	alert(mediaFiles[0].name+","+mediaFiles[0].fullPath+","+mediaFiles[0].type+","+mediaFiles[0].size+","+mediaFiles[0].lastModifiedDate);
		var media = mediaFiles[0];
		media.getFormatData(mediaSuc,mediaErr);
		//var i, len; 
		//for (i = 0, len = mediaFiles.length; i < len; i += 1) {
		//	uploadFile(mediaFiles[i]); 
		//} 
	} 
	function mediaSuc(mediaData){
	//codecs ��Ƶ����Ƶ���ݵ�ʵ�ʸ�ʽ
	//bitrate �ļ����ݵ�ƽ�������ʡ�����ͼ���ļ�������ֵΪ0��
	//duration ����Ϊ��λ����Ƶ����Ƶ����ʱ����ͼ���ļ��ĸ�����ֵΪ0�����������ͣ�
	//height �����ر�ʾ��ͼ�����Ƶ�߶ȣ���Ƶ�����ĸ�����ֵΪ0�����������ͣ�
	//width �����ر�ʾ��ͼ�����Ƶ�Ŀ�ȣ���Ƶ�����ĸ�����ֵΪ0��
		//alert(mediaData.height+","+mediaData.width);
	};
	function mediaErr(err){
		alert("err");
	};
	
	// �ɼ����������Ļص�����
	function captureError(error) { 
		var msg = 'An error occurred during capture: ' + error.code;
		navigator.notification.alert(msg, null, 'Uh oh!'); 
	} 
	
	// ��Capture Audio����ť����¼���������
	function captureAudio() { 
	
		
		var options = {duration: 10 };
		navigator.device.capture.captureAudio(captureSuccess, captureError, options);
	} 
	 function captureImage(){
		navigator.device.capture.captureImage(captureSuccess, captureError);
	 };
	 function captureVideo (){
		navigator.device.capture.captureVideo(captureSuccess, captureError);
	 };
	// �ϴ��ļ��������� 
	function uploadFile(mediaFile) {
		var ft = new FileTransfer(), 
		path = mediaFile.fullPath, 
		name = mediaFile.name; 
		ft.upload(path,
				"http://my.domain.com/upload.php",
				function(result) { 
					console.log('Upload success: ' + result.responseCode); 
					console.log(result.bytesSent + ' bytes sent'); 
				}, 
				function(error) { 
					console.log('Error uploading file ' + path + ': ' + error.code); 
				}, 
				{ fileName: name });  
	} 
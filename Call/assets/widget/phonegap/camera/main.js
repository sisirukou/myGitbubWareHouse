
	var pictureSource;		//ͼƬ��Դ
	var destinationType;		//���÷���ֵ�ĸ�ʽ
	
	// �ȴ�PhoneGap�����豸
	document.addEventListener("deviceready",onDeviceReady,false);
	
	// PhoneGap׼������������ʹ�ã�
	function onDeviceReady() {
		pictureSource=navigator.camera.PictureSourceType;
		destinationType=navigator.camera.DestinationType;
	}
	
	// ���ɹ����һ����Ƭ��Base64�������ݺ󱻵���
	function onPhotoDataSuccess(imageData) {
	
		// ȡ��ע���Բ鿴Base64�����ͼ������
		// console.log(imageData);
		// ��ȡͼ����
		var smallImage = document.getElementById('smallImage');
			 
		// ȡ�����ص�ͼ��Ԫ��
		smallImage.style.display = 'block';
		
		// ��ʾ�������Ƭ
		// ʹ����ǶCSS����������ͼƬ
		//smallImage.src = "data:image/jpeg;base64," + imageData;
		smallImage.src = imageData;
	}
	   
   // ���ɹ��õ�һ����Ƭ��URI�󱻵���
   function onPhotoURISuccess(imageURI) {
	
		// ȡ��ע���Բ鿴ͼƬ�ļ���URI
		// console.log(imageURI);
		// ��ȡͼƬ���
		var largeImage = document.getElementById('largeImage');
		 
		// ȡ�����ص�ͼ��Ԫ��
		largeImage.style.display = 'block';
	
		// ��ʾ�������Ƭ
		// ʹ����ǶCSS����������ͼƬ
		largeImage.src = imageURI;
	}
	   
   // ��Capture Photo����ť����¼���������
   function capturePhoto() {

		// ʹ���豸�ϵ�����ͷ���գ������Base64�����ַ�����ʽ��ͼ��
		//navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20,destinationType: destinationType.DATA_URL});
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20,destinationType: destinationType.FILE_URI});
   }
   
   // ��Capture Editable Photo����ť����¼���������
   function capturePhotoEdit() {

		// ʹ���豸�ϵ�����ͷ���գ������Base64�����ַ�����ʽ�Ŀɱ༭ͼ��
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20,destinationType: destinationType.FILE_URI,allowEdit: true });
   }
	   
   //��From Photo Library��/��From Photo Album����ť����¼���������
   function getPhoto(source) {
   
   		// ���趨����Դ����ȡͼ���ļ�URI
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
		destinationType: destinationType.FILE_URI,sourceType: source });
		//������� allowEdit,EncodingType,targetWidth,targetHeight,MediaType
   }

   // ���д�����ʱ�����˺���
   function onFail(mesage) {
		alert('Failed because: ' + message);
   }
	
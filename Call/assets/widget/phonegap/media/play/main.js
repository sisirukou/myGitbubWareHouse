// �ȴ�����PhoneGap
document.addEventListener("deviceready", onDeviceReady, false); 

// PhoneGap�������
function onDeviceReady() {
	//playAudio("bg.mp3");
}

// ��Ƶ������
var my_media = null;
var mediaTimer = null;
var allLenght = null;
// ������Ƶ
function playAudio(src) {
	// ��Ŀ���ļ�����Media����
	my_media = new Media(src, onSuccess, onError);

	// ������Ƶ
	my_media.play();
     allLenght = my_media.getDuration();
	// ÿ�����һ��ý�岥�ŵ���λ��
	if (mediaTimer == null) {
		mediaTimer = setInterval(function() {
			// ��ȡý�岥�ŵ���λ��
			my_media.getCurrentPosition(		
		
				//��ȡ�ɹ�����õĻص�����
				function(position) {
					if (position > -1) {
						setAudioPosition((position) + " sec "+allLenght);
					}
				},
				// �����������õĻص�����
				function(e) {
					console.log("Error getting pos=" + e);
					setAudioPosition("Error: " + e);
				}
			);
		}, 1000);
	}
	//5��֮�����õ�10���λ��
		//setTimeout(function() {
		//	my_media.seekTo(10000);
		//}, 5000);
}

// ��ͣ��Ƶ����
function pauseAudio() {
	if (my_media) {
		my_media.pause();
	}
}

// ֹͣ��Ƶ����
function stopAudio() {
	if (my_media) {
		my_media.stop();
	}
	clearInterval(mediaTimer);
	mediaTimer = null;
}

// ����Media����ɹ�����õĻص�����
function onSuccess() {
	console.log("playAudio():Audio Success");
}

// ����Media����������õĻص�����
function onError(error) {
	alert('code: '    + error.code    + '\n' + 
		'message: ' + error.message + '\n');
}

// ������Ƶ����λ��
function setAudioPosition(position) {
	document.getElementById('audio_position').innerHTML = position;
}

//��sd����ѡ���ļ�
function selectMusic(){
	navigator.camera.getPicture(onMusicSuccess, onFail, { quality: 50,destinationType: destinationType.FILE_URI,sourceType: source });
};
function onMusicSuccess(imageURI){
	my_media = new Media(imageURI, onSuccess, onError);

	// ������Ƶ
	my_media.play();
     allLenght = my_media.getDuration();
	// ÿ�����һ��ý�岥�ŵ���λ��
	if (mediaTimer == null) {
		mediaTimer = setInterval(function() {
			// ��ȡý�岥�ŵ���λ��
			my_media.getCurrentPosition(		
		
				//��ȡ�ɹ�����õĻص�����
				function(position) {
					if (position > -1) {
						setAudioPosition((position) + " sec "+allLenght);
					}
				},
				// �����������õĻص�����
				function(e) {
					console.log("Error getting pos=" + e);
					setAudioPosition("Error: " + e);
				}
			);
		}, 1000);
	}
	//5��֮�����õ�10���λ��
		//setTimeout(function() {
		//	my_media.seekTo(10000);
		//}, 5000);
};
function onFail(mesage) {
	alert('Failed because: ' + message);
}
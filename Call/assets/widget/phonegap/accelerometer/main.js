	// watch id �ǵ�ǰ��watchAcceleration��������
	var watchID = null;
	
	// �ȴ�����PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false);
	
	// PhoneGap�������
	function onDeviceReady() {
	     //getCurrentAcceleration �������ios��֧�� һֱ����0
		//navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
		startWatch();
	}
	
	// ��ʼ���Ӽ��ٶ�
	function startWatch() {
	
	// ÿ��3���Ӹ���һ�μ��ٶ�����
	var options = { frequency: 3000 };
	
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
	
	}
	
	// ֹͣ���Ӽ��ٶ�
	function stopWatch() {
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// onSuccess: ��ȡ��ǰ���ٶ����ݵĿ���
	function onSuccess(acceleration) {
		var element = document.getElementById('accelerometer');
		element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
							'Acceleration Y: ' + acceleration.y + '<br />' +
							'Acceleration Z: ' + acceleration.z + '<br />' +
							'Timestamp: '      + acceleration.timestamp + '<br />';
	}
	
	// onError: ��ȡ���ٶ�ʧ��
	function onError() {
		alert('onError!');
	}


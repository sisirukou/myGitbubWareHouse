
	// �ȴ�����PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false); 
	
	var watchID = null;
	
	// PhoneGap�������
	function onDeviceReady() {
		// ÿ��3���Ӹ���һ��
		var options = { frequency: 3000, maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
		watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
	}
	
	// ��ȡλ����Ϣ�ɹ�ʱ���õĻص�����
	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
							'Longitude: '          + position.coords.longitude             + '<br />' +
							'Altitude: '           + position.coords.altitude              + '<br />' +
							'Accuracy: '           + position.coords.accuracy              + '<br />' +
							'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
							'Heading: '            + position.coords.heading               + '<br />' +
							'Speed: '              + position.coords.speed                 + '<br />' +
							'Timestamp: '          + new Date(position.timestamp)          + '<br />';
	}
	// ���ǰ���Ѿ���ʼ�ļ���
	function clearWatch() {
		if (watchID != null) {
			navigator.geolocation.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// onError�ص���������һ��PositionError����
	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
	}

// watchID �ǵ�ǰ��watchHeading��������
	var watchID = null;
	
	// �ȴ�����PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false);
	
	// PhoneGap�������
	function onDeviceReady() {
		//startWatch();
	}
	
	// ��ʼ��������
	function startWatch() {
	
		// ÿ��3���Ӹ���һ�����̵ĳ�����Ϣ
		var options = { frequency: 3000 };
		watchID = navigator.compass.watchHeading(onSuccess, onError, options);
	}
	
	// ֹͣ��������
	function stopWatch() {
		if (watchID) {
			navigator.compass.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// onSuccess: �������̵ĵ�ǰ����
	function onSuccess(heading) {
		var element = document.getElementById('heading');
			element.innerHTML = 'Heading: ' + heading.magneticHeading +'<br>'+
							'trueHeading:' + heading.trueHeading + '<br>' +
							'headingAccuracy:' + heading.headingAccuracy +'<br>'+
							'timestamp:' + heading.timestamp;
	}
	
	// onError: ��ȡ���̳���ʧ��
	function onError(compassError) {
		alert('Compass error: ' + compassError.code);
	}
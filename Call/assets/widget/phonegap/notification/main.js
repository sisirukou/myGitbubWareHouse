	// �ȴ�����PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false); 
	
	// PhoneGap�������
	function onDeviceReady() {
		// ��
	}
	
	// ����Ի��򱻺���
	function alertDismissed() {
		// ���д���
	}
	
	// ��ʾһ�����Ƶľ����
	function showAlert() {
		navigator.notification.alert(
			'You are the winner!',  // ��ʾ��Ϣ
			alertDismissed,         // ���汻���ӵĻص�����
			'Game Over',            // ����
			'Done'                  // ��ť����
		);
	}
	
// ����ȷ�϶Ի��򷵻صĽ��
	function onConfirm(button) {
		alert('You selected button ' + button);
	}
	
	// ��ʾһ�����Ƶ�ȷ�϶Ի���
	function showConfirm() {
		navigator.notification.confirm(
			'You are the winner!',  // ��ʾ��Ϣ
			onConfirm,              // ���°�ť�󴥷��Ļص����������ذ��°�ť������	
			'Game Over',            // ����
			'Restart,Exit'          // ��ť��ǩ
		);
	}
	// ��������
function playBeep() {
   	navigator.notification.beep(2);
}
// ������
function vibrate() {

   	navigator.notification.vibrate(2000);
}

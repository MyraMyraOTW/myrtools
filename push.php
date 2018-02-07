<?php
	/*  
	Parameter Example
		$data = array('post_id'=>'12345','post_title'=>'A Blog post');
		$target = 'single tocken id or topic name';
		or
		$target = array('token1','token2','...'); // up to 1000 in one request
	*/
	public function sendMessage($data, $target) {
		// API url
		$url = 'https://fcm.googleapis.com/fcm/send';
		// Key
		$key = 'AAAAvbT1HqY:APA91bG2Z5XI863bYNETiRmyGzMmEDadZZIffnO8Gcdn6Nhhd7Gi25rC-Q-VTSiQYrab82XQUxryNN4d50arb1dNmp4gcr50Yje76RQuNkGunaiiALOkBRG5zIN6t0t7oJLmUnZrK-xE';
		
		$fields = array();
		$fields['data'] = $data;
		if(is_array($target)){
			$fields['registration_ids'] = $target;
		}else{
			$fields['to'] = $target;
		}
		
		// Header
		$headers = array(
			'Content-Type:application/json',
			'Authorization:key='.$key
		);
		
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
		$result = curl_exec($ch);
		
		if ($result === FALSE) {
			die('FCM send Error: ' . curl_error($ch));
		}
		
		curl_close($ch);
		
		return $result;
	}
?>
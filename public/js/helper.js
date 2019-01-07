$("#loadContest").submit(function (e) {
	e.preventDefault();
	$.ajax({
		url: "/load",
		data: {
			APIKey: e.target[0].value,
      APISecret: e.target[1].value,
      PGContestID: e.target[2].value,
			CFContestID: e.target[3].value
		},
		type: "POST",
		success: function (response) {
			if (response.valid) {

			}
			else {

			}
		},
		error: console.error
	});
});
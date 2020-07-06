(function ($) {

	$("#countdown_dashboard").countDown({
		targetDate: {
			day: 1,
			month: 12,
			year: 2019,
			hour: 0,
			min: 0,
			sec: 0
		},
		omitWeeks: !0
	})

})(jQuery);